import React, {useEffect, useState} from 'react';
import InvoiceTableComponent from "./InvoiceTable";
import MobileList from "./MobileList";

export default function InvoiceListComponent({invoices}) {

    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const handleResize = () => {
        setScreenSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", (handleResize));
        return () => window.removeEventListener("resize", handleResize);
    }, [screenSize]);


    let total = 0;
    invoices.map(invoice => total += (invoice.cost * invoice.quantity))

    let listComponent = InvoiceTableComponent({total, invoices})
    if (screenSize < 600) {
        listComponent = MobileList({total, invoices})
    }

    const handleInvoiceSubmit = () => {
        //Need to send the payload to API
        console.log(invoices)
    }

    return (
        <div>
            <h3>Invoice List</h3>
            {listComponent}
            <div className="flex flex-end">
                <button onClick={handleInvoiceSubmit}>Submit</button>
            </div>
        </div>
    );
}