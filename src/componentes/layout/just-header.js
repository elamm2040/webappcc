import React from "react";
import './layout.css';

export default function JustHeader(props) {
    return (
        <>
            <header className="empAppHeader"></header>
            { props.children }
        </>
    );
}