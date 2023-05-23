import React from "react";
import './Input.css';

function Input(props) {

    if (props.type !== "textarea") {
        return (< input
            className="inputFormsSm"
            id={props.id}
            type={props.type}
            name={props.name}
            disabled={props.disabled}
            value={props.quantity} />)
    }
    return (<textarea
        className="inputFormsSm"
        id={props.id}
        type={props.type}
        name={props.name}
        disabled={props.disabled}
        value={props.quantity} />)
}

export default Input;