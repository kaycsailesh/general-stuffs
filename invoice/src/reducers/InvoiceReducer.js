import {ActionConstants} from "../constant/Action";

export default function InvoiceReducer(state, action) {
    const {payload, type} = action;
    const addInvoice = (payload) => {
        payload.id = Date.now().toString()
        return {
            invoices: [
                ...state.invoices,
                payload,
            ]
        }
    }

    const clickInvoice = (payload) => {
        return {
            ...state,
            activeInvoice: payload
        }
    }

    const updateInvoice = (payload) => {
        const index = state.invoices.findIndex(item => item.id === payload.id)
        if (index >= 0) {
            return {
                invoices: [
                    ...state.invoices.slice(0, index),
                    payload,
                    ...state.invoices.slice(index + 1)
                ],
                activeInvoice: null
            }
        }
    }

    const deleteInvoice = () => {
        const index = state.invoices.findIndex(item => item.id === state.activeInvoice.id)
        if (index >= 0) {
            return  {
                invoices: [
                    ...state.invoices.slice(0, index),
                    ...state.invoices.slice(index + 1)
                ],
                activeInvoice: null
            }
        }
    }

    const cancelEdit = () => {
        return {
            ...state,
            activeInvoice: null
        }
    }

    switch (type) {
        case ActionConstants.ADD:
            return addInvoice(payload);
        case ActionConstants.CLICK:
            return clickInvoice(payload)
        case ActionConstants.CANCEL:
            return cancelEdit()
        case ActionConstants.UPDATE:
            return updateInvoice(payload)
        case ActionConstants.REMOVE:
            return deleteInvoice(payload)
        default:
            return state
    }
}
