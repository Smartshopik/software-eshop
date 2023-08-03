import AjaxResource from "..";

class BillingInformationResource extends AjaxResource {
    methods = ['add_delivery_address', 'add_billing_address']
}

export default new BillingInformationResource()