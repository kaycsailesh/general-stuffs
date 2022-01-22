import React, {useReducer} from 'react';
import InvoiceContainer from "../components/List/InvoiceContainer";
import ModalComponent from "../components/Form/Modal";
import AddForm from "../components/Form/AddForm";
import InvoiceReducer from "../reducers/InvoiceReducer";
import {InvoiceContext} from "../context/InvoiceContext";

function HomeView() {
    const initialState = {
        invoices: [{
            id: '1',
            description: 'apple',
            cost: '10',
            quantity: '100',
            isTaxable: true
        }],
        activeInvoice: null
    }
    const [state, dispatch] = useReducer(InvoiceReducer, initialState, () => initialState)
    const {invoices, activeInvoice} = state;
    const editModal = showModal(activeInvoice)

    return (
        <InvoiceContext.Provider value={dispatch}>
            <div className={"view-container"}>
                <AddForm/>
                <InvoiceContainer key={'list-' + invoices.length} invoices={invoices}/>
                {editModal}
            </div>
        </InvoiceContext.Provider>
    );
}

function showModal(activeInvoice) {
    if (activeInvoice) {
        return (
            <ModalComponent
                key={'modal-' + activeInvoice.id}
                invoice={activeInvoice}
            />
        )
    }
    return []
}

export default HomeView
