import React from "react";
import './layout.css';

export default function MainButton(props) {
    return(
        <button className={`button ${props.color}`} onClick={props.function}>
            { props.text }
        </button>
    );
}