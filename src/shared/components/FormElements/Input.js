import {useReducer, useEffect} from "react";

import {validate} from "../../util/validators";
// import "./Input.css";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE' :
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH' :
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, disptach] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched:false,
        isValid: props.initialValid || false
    });

    const {id, onInput} = props ;
    const {value, isValid} = inputState;
    useEffect(() => {
        onInput(props.id, inputState.value, inputState.isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        disptach({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        disptach({
            type: 'TOUCH'
        })
    };

    const element = props.element === 'input' ?
        (<input id={props.id} type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control is-invalid'}`}
                placeholder="name@example.com"
                value={inputState.value}/>

        ) :
        (
            <textarea id={props.id} rows={props.rows || 3}
                   onChange={changeHandler}
                   className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control is-invalid'}`}
                   placeholder="name@example.com"
                   value={inputState.value}
                   onBlur={touchHandler}></textarea>
        )

    return <div
        className="form-floating mb-3">
        {element}
        <label htmlFor={props.id}>{props.id}</label>
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>;
};

export default Input;