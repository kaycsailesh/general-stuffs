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
    },
    isTaxable: {
        value: false,
        required: false,
        hasError: false,
        isDirty: false,
    }
}

export const FieldConstant = [
    {
        id: 'description',
        label: 'Description',
        className: 'input flex-1',
        type: 'text',
    },
    {
        id: 'cost',
        label: 'Cost',
        className: 'input narrow',
        type: 'number'
    },
    {
        id: 'quantity',
        label: 'Quantity',
        className: 'input narrow',
        type: 'number'
    },
    {
        id: 'isTaxable',
        label: 'Taxable',
        className: 'narrow',
        type: 'checkbox'
    }
]
