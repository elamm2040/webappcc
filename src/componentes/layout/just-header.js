import React from "react";
import './layout.css';

export default function JustHeader(props) {
    return (
        <>
            <header className="empAppHeader"></header>
            <div style={{ textAlign: "center", paddingTop: "50px", paddingLeft: "30px", paddingRight: "30px", height: "100vh" }}>
                { props.children }
            </div>
        </>
    );
}