import { ConnectorItem } from '../../connector'
import Component from '../component'
import utils from '../../utils'

interface TreeInstance {
  id: string
  element: HTMLLIElement
  depth: number
  isActive: boolean
  children: TreeInstance[]
}

class MenuRecursive extends Component {
  tree: TreeInstance[] = []

  register(connected: ConnectorItem) {
    this.bootTree(connected.element as HTMLUListElement, 0, this.tree)
    this.handleTree(this.tree)
  }

  toggle(instance: TreeInstance) {
    if (instance.isActive) {
      this.close(instance)
    } else {
      this.open(instance)
    }
  }

  close(instance: TreeInstance) {
    const body = Array.from(instance.element.children).filter((child) => child.tagName === 'UL')[0] as HTMLUListElement

    if (body.classList.contains('is-collapsing')) return
    body.style.display = 'block'
    let height = body.clientHeight

    body.style.height = height + 'px'
    body.classList.remove('is-collapse')
    body.classList.add('is-collapsing')

    setTimeout(() => {
      body.style.height = '0'
    }, 1)

    setTimeout(() => {
      body.classList.remove('is-collapsing')
      body.classList.add('is-collapse')
      body.style.height = ''
      body.style.display = ''
    }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000)

    instance.element.classList.remove('is-active')
    instance.isActive = false
    body.classList.remove('is-collapsed')

    instance.children.forEach((child) => child.isActive && child.children.length && this.close(child))
  }

  open(instance: TreeInstance) {
    const body = Array.from(instance.element.children).filter((child) => child.tagName === 'UL')[0] as HTMLUListElement

    if (body.classList.contains('is-collapsing')) return
    body.style.display = 'block'
    let height = body.clientHeight

    setTimeout(() => {
      body.style.height = height + 'px'
      body.style.display = ''
    }, 1)

    body.classList.add('is-collapse')
    body.classList.add('is-collapsing')

    setTimeout(() => {
      body.classList.remove('is-collapsing')
      body.classList.add('is-collapse')
      body.style.height = ''
      body.style.display = ''
    }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000)

    instance.element.classList.add('is-active')
    instance.isActive = true
    body.classList.add('is-collapsed')

    this.closeRelatives(this.tree, instance)
  }

  closeRelatives(tree: TreeInstance[], opened: TreeInstance) {
    tree.forEach((item) => {
      if (item.depth === opened.depth) {
        if (item !== opened && item.children.length && item.isActive) this.close(item)
      }

      this.closeRelatives(item.children, opened)
    })
  }

  handleTree(tree: TreeInstance[]): void {
    tree.forEach((item) => {
      if (item.children.length) {
        const link = item.element.querySelectorAll('a')[0]

        link.addEventListener('click', (e) => {
          if (e.target !== link.children[0]) {
            e.preventDefault()
            e.stopPropagation()
            this.toggle(item)
          }
        })

        this.handleTree(item.children)
      }
    })
  }

  bootTree(list: HTMLUListElement, depth: number = 0, dest: any[]) {
    Array.from(list.children).forEach((element, index) => {
      if (element.tagName === 'LI') {
        const instance: TreeInstance = {
          id: utils.str.random(10),
          element: element as HTMLLIElement,
          depth: depth,
          isActive: element.classList.contains('is-active'),
          children: [],
        }

        dest.push(instance)

        const ul = Array.from(element.children).filter((child) => child.tagName === 'UL')[0]

        if (ul) {
          ul.classList.add('is-collapse')
          this.bootTree(ul as HTMLUListElement, depth + 1, instance.children)
        }
      }
    })
  }
}

export default new MenuRecursive()
