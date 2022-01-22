import React from "react";
import {ActionConstants} from "../../constant/Action";

import FormComponent from "./FormComponent";

export default function AddForm() {
    const formValue = {
        id: '',
        description: '',
        cost: '',
        quantity: '',
        isTaxable: false
    }

    return (
        <div className={"main-card"}>
            <h3>Add New Invoice</h3>
            <FormComponent key={'add-form-0'} invoiceForm={formValue} action={ActionConstants.ADD}/>
        </div>
    )
}
