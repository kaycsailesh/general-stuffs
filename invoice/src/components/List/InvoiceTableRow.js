import React, {Fragment, useContext} from "react";
import {InvoiceContext} from "../../context/InvoiceContext";
import {ActionConstants} from "../../constant/Action";

export default function TableRowComponent(props) {
    const dispatch = useContext(InvoiceContext);

    const els = []
    props.invoices.forEach(invoice => {
        els.push(
            <Fragment key={invoice.id}>
                <tr>
                    <td className={"spacer"}/>
                </tr>
                <tr onClick={() => dispatch({type: ActionConstants.CLICK, payload: invoice})}>
                    <td>{invoice.description}</td>
                    <td>${(invoice.cost).toLocaleString()}</td>
                    <td>{invoice.quantity.toLocaleString()}</td>
                    <td>${(invoice.cost * invoice.quantity).toLocaleString()}</td>
                </tr>
            </Fragment>
        )
    })

    return els
}