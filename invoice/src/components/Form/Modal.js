import React, {useContext} from "react";
import FormComponent from "./FormComponent";

import {ActionConstants} from "../../constant/Action";
import {InvoiceContext} from "../../context/InvoiceContext";

function ModalComponent(props) {
    const dispatch = useContext(InvoiceContext);
    return (
        <div className={`modal ${props.invoice.id ? "is-active" : ""}`}>
            <div className="modal-background" onClick={() => dispatch({type: ActionConstants.CANCEL})}/>
            <div className="modal-content">
                <h3>Edit Invoice</h3>
                <FormComponent
                    key={'edit-form-' + props.invoice.id}
                    invoiceForm={props.invoice}
                    action={ActionConstants.UPDATE}
                />
                <button className="close" aria-label="close" onClick={() => dispatch({type: ActionConstants.CANCEL})}/>
            </div>
        </div>
    )
}

export default ModalComponent