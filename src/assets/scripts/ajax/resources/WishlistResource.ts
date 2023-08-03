import AjaxResource from ".";

class WishlistResource extends AjaxResource {
    methods = ['add', 'delete']
}

export default new WishlistResource()