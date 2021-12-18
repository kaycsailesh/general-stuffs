import React, {useContext, useState} from 'react';
import {ActionConstants} from "../../constant/Action";
import {FieldConstant, InvoiceFormConstant} from "../../constant/Constants";
import {InvoiceContext} from "../../context/InvoiceContext";
import {InitializeForm} from "../../services/FormService";

function InvoiceFormComponent(props) {
    const [state, setState] = useState(() => InitializeForm(props))
    const dispatch = useContext(InvoiceContext);

    const errorMessage = (target) => {
        if (state[target].isDirty && state[target].hasError) {
            return (
                <p className={"error"}>
                    <small>{target[0].toUpperCase() + target.substring(1)} is required</small>
                </p>
            )
        }
    }

    const showAddButton = () => {
        if (!state.id) {
            return (
                <button onClick={handleSubmit} type={"submit"}>Add item</button>
            )
        }
    }

    const showEditButtons = () => {
        if (state.id) {
            return (
                <div className={"button-footer"}>
                    <div className={"left-item"}>
                        <button className={"is-danger"} onClick={() => handleDelete()}>Delete</button>
                    </div>
                    <div className={"right-item"}>
                        <button className={"is-dull"} onClick={() => handleReset()}>Cancel</button>
                        <button onClick={handleSubmit}>Edit</button>
                    </div>
                </div>
            )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!state.description.hasError && !state.cost.hasError && !state.quantity.hasError) {
            const payload = {
                id: state.id,
                description: state.description.value,
                cost: state.cost.value,
                quantity: state.quantity.value
            }
            dispatch({type: props.action, payload: payload})
            return handleReset();
        }
        setErrors();
    }

    const handleReset = () => {
        setState(JSON.parse(JSON.stringify(InvoiceFormConstant)))
        if (state.id) {
            dispatch({type: ActionConstants.CANCEL})
        }
    }

    const handleDelete = () => {
        dispatch({type: ActionConstants.REMOVE})
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        const error = state[id].required && !value.length;
        setState({
            ...state,
            [id]: {
                ...state[id],
                value: value,
                hasError: error,
                isDirty: true
            }
        })
    }

    const setErrors = () => {
        setState({
            ...state,
            description: {
                ...state.description,
                isDirty: true
            },
            cost: {
                ...state.cost,
                isDirty: true
            },
            quantity: {
                ...state.quantity,
                isDirty: true
            }
        })
    }

    return (
        <div>
            <form>
                <div className="invoice-form">
                    {FieldConstant.map(field => (
                        <div key={field.id} className={`input ${field.className}`}>
                            <label>{field.label}</label>
                            <input
                                id={field.id}
                                placeholder={field.label}
                                type={field.type}
                                onChange={handleChange}
                                value={state[field.id].value}
                            />
                            {errorMessage(field.id)}
                        </div>
                    ))}
                    {showAddButton()}
                </div>
            </form>
            {showEditButtons()}
        </div>
    )
}

export default InvoiceFormComponent