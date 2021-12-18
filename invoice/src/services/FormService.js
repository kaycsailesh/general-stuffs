import {InvoiceFormConstant} from "../constant/Constants";

export function InitializeForm(props) {
    const form = JSON.parse(JSON.stringify(InvoiceFormConstant))
    form.description.value = props.invoiceForm.description || "";
    form.cost.value = props.invoiceForm.cost || "";
    form.quantity.value = props.invoiceForm.quantity || "";
    form.id = props.invoiceForm.id || ""

    if (form.description.value.length) form.description.hasError = false;
    if (form.cost.value.length) form.cost.hasError = false;
    if (form.quantity.value.length) form.quantity.hasError = false;
    return form;
}