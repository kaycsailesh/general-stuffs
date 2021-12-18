import React from 'react';
import ListComponent from "./InvoiceList";

export default function InvoiceContainer({invoices}) {
    let listComponent = BlankComponent()
    if (invoices.length) {
        listComponent = ListComponent({invoices})
    }

    return (
        <div className={"main-card"}>
            {listComponent}
        </div>
    );
}

function BlankComponent() {
    return (
        <div className={"blank"}>
            <h3>
                No Invoices
            </h3>
            <p>Start by adding new Invoices from the form above</p>
        </div>
    )
}

