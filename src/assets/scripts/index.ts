import { Carousel, Modal, Input, Dropdown, Menu, Tabs, Header } from './components'
import Action, { Remove, Show, Collapse, FacebookTrack, WritingEffect, PopupMessage, Connect } from './actions'
import config from './config'
import Connector from './connector'
import Ajax from './ajax'
import ProductResource from './ajax/resources/Cart/ProductResource'
import WishlistResource from './ajax/resources/WishlistResource'
import GiftResource from './ajax/resources/Cart/GiftResource'
import ShopResource from './ajax/resources/ShopResource'
import { Template } from './components/Template'
import { Variable } from './components/Variable'
import SearchResource from './ajax/resources/SearchResource'
import BillingInformationResource from './ajax/resources/Cart/BillingInformationResource'
import CheckoutResource from './ajax/resources/Cart/CheckoutResource'

declare global {
  interface Window {
    dump: any
    lozad: any
    fbq: any
  }
}

window.dump = (value: string, options: {}) => {
  if (config.app.debug) console.debug(value, options || '')
}

Connector.init('js-id', '{name}::{type}@{event}#{id}')
Carousel.init('carousel', {
  type: 'slide',
  rewind: true,
  arrows: false,
  pagination: false,
  keyboard: true,
  gap: 24,
  breakpoints: {
    478: {
      gap: 12,
    },
  },
})
Modal.init('modal', {
  gallery: {
    icon_close: 'far fa-times',
    icon_left: 'far fa-chevron-left',
    icon_right: 'far fa-chevron-right',
  },
})
Input.init('input', {
  number: {
    icon_up: 'far fa-chevron-up',
    icon_down: 'far fa-chevron-down',
  },
  file: {
    icon_file: 'far fa-file',
  },
})
Action.init('action', {
  actions: {
    remove: Remove,
    show: Show,
    connect: Connect,
    collapse: Collapse,
    fb_track: FacebookTrack,
    writing_effect: WritingEffect,
    popup_message: PopupMessage,
  },
})
Header.init('header')
Menu.init('menu')
Dropdown.init('dropdown')
Tabs.init('tab')
Template.init('template')
Variable.init('variable')

Ajax.init('ajax', {
  resources: {
    'front.cart.products': ProductResource,
    'front.cart.gifts': GiftResource,
    'front.cart.checkout': CheckoutResource,
    'front.cart.billing-information': BillingInformationResource,
    'front.search': SearchResource,
    'front.wishlist': WishlistResource,
    'front.shop': ShopResource,
  },
})

self.addEventListener('load', () => {
  document.body.classList.remove('is-loading')
})
