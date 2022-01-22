import React, {Fragment, useContext} from "react";
import {InvoiceContext} from "../../context/InvoiceContext";
import {ActionConstants} from "../../constant/Action";

export default function TableRowComponent(props) {
    const dispatch = useContext(InvoiceContext);

    const getTotal = (invoice) => {
        let total =  invoice.cost * invoice.quantity
        if (invoice.isTaxable) {
            return total + (total * 0.1)
        }
        return total
    }

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
                    <td>${(getTotal(invoice)).toLocaleString()}</td>
                </tr>
            </Fragment>
        )
    })

    return els
}
