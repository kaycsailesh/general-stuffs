export const InvoiceFormConstant = {
    id: '',
    description: {
        value: '',
        hasError: true,
        required: true,
        isDirty: false,
    },
    cost: {
        value: '',
        hasError: true,
        required: true,
        isDirty: false,
    },
    quantity: {
        value: '',
        hasError: true,
        required: true,
        isDirty: false,
    }
}

export const FieldConstant = [
    {
        id: 'description',
        label: 'Description',
        className: 'flex-1',
        type: 'text'
    },
    {
        id: 'cost',
        label: 'Cost',
        className: 'narrow',
        type: 'number'
    },
    {
        id: 'quantity',
        label: 'Quantity',
        className: 'narrow',
        type: 'number'
    }
]