import React from "react";
import './layout.css';

export default function Header(props) {
    return (
        <div id="header">
            <div className="headerRow">
                <div></div>
                <div></div>
                <a href="https://www.panther-software.co.uk" className="pantherLogo" target="_blank"></a>
                {/* <a href="https://www.panther-software.co.uk" target="_blank">
                    <img src="../../docs/images/panther_logo.png" height="50px" alt="Powered By" />
                </a> */} 
            </div>
            <div className="headerRow">
                <h1 className="title">{props.title}</h1>
                <div className={`week ${props.week == '0' ? "not_show" : ""}`}>
                    <button> {"<"} </button>
                    <span>{props.week}</span>
                    <button> {">"} </button>
                </div>
                <button type="button" className="header_link">{props.action_button}</button>
            </div>
        </div>
    );
}