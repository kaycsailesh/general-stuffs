import React, {useContext} from 'react';
import {ActionConstants} from "../../constant/Action";
import {InvoiceContext} from "../../context/InvoiceContext";

export default function MobileList(props) {
    const dispatch = useContext(InvoiceContext)
    const els = []
    const {total, totalTaxable, invoices} = props

    invoices.forEach(invoice => {
        els.push(
            <div key={invoice.id} className={"small-card"} onClick={() => dispatch({type: ActionConstants.CLICK, payload: invoice})}>
                <p>{invoice.description}</p>
                <div className="bottom-info">
                    <div>
                        <p>Cost</p>
                        <p>${(invoice.cost).toLocaleString()}</p>
                    </div>
                    <div>
                        <p>Quantity</p>
                        <p>{invoice.quantity.toLocaleString()}</p>
                    </div>
                    <div>
                        <p>Price</p>
                        <p>${(invoice.cost * invoice.quantity).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        )
    })

    els.push(
        <div key={'total-mobile'} className={"small-card total"}>
            Total: ${total.toLocaleString()}
        </div>
    )

    return els
}
