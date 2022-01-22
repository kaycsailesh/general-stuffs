import React from 'react';
import TableRowComponent from "./InvoiceTableRow";

export default function InvoiceTableComponent({total, totalTaxable, invoices}) {
    console.log(totalTaxable)
    const lists = TableRowComponent({invoices});

    return (
        <table>
            <thead>
            <tr>
                <td>Description</td>
                <td>Cost</td>
                <td>Quantity</td>
                <td>Price</td>
            </tr>
            </thead>
            <tbody>
            {lists}
            <tr>
                <td className="spacer"></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td/>
                <td/>
                <td>Taxable Total:</td>
                <td>${(totalTaxable)}</td>
            </tr>
            <tr>
                <td/>
                <td/>
                <td>Total:</td>
                <td>${(total).toLocaleString()}</td>
            </tr>
            <tr>
                <td/>
                <td/>
                <td>Total:</td>
                <td>${(total + totalTaxable).toLocaleString()}</td>
            </tr>
            </tfoot>
        </table>
    )
}
