import React from "react";
import './layout.css';

export default function General(props) {
    return (
        <>
            <header className="empAppHeader"></header>
            {props.children}
            <section className="fixedFooter">
                <button className="send_button"> Send for Approval </button>
                <div className="mobileSection"></div>
            </section>
        </>
    );
}