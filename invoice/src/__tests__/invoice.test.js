import React, {useContext} from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import InvoiceContainer from "../components/List/InvoiceContainer";
import FormComponent from "../components/Form/FormComponent";
import {InvoiceFormConstant} from "../constant/Constants";

test('should render invoice list when list and give correct cost and total', () => {
    const invoices = [
        {id: 1, description: "apple", quantity: "1", cost: "10"},
        {id: 2, description: "apple", quantity: "2", cost: "20"}
    ]
    render(<InvoiceContainer invoices={invoices}/>);
    const element = screen.getByRole('table')
    expect(element).toBeInTheDOM()
    expect(element).toHaveTextContent("apple")
    const cost = "$"+((1*10)).toLocaleString()
    const total = "$" + (50).toLocaleString()
    expect(element).toHaveTextContent(cost)
    expect(element).toHaveTextContent(total)
})

test('should render empty text when no list', () => {
    const invoices = [
    ]
    render(<InvoiceContainer invoices={invoices}/>);
    expect(screen.getByText('No Invoices')).toBeInTheDocument()
})

test('shows error message when a field is empty', () => {
    const formValue = {
        id: '',
        description: '',
        cost: '',
        quantity: ''
    }
    render(<FormComponent invoiceForm={formValue}/>);
    const button = screen.getByText('Add item', { selector: 'button' })
    expect(button).toBeInTheDocument();
    fireEvent.click(button)

    const error = screen.getByText('Description is required')
    expect(error).toBeInTheDocument()
})



