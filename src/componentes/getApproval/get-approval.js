import React from "react";
import './get-approval.css';
import JustHeader from "../layout/just-header";
import { LoginOutlined } from  '@ant-design/icons';

export default function GetApproval() {

    return (
        <div style={{ textAlign: "center", paddingTop: "50px", paddingLeft: "30px", paddingRight: "30px", height: "100vh" }}>
            <LoginOutlined style={{ fontSize: "120px", color: "#48c572" }} />
            <h1 style={{ fontSize: "28px" }}>
                Please hand your device over to your authoriser to approve your shift(s)
            </h1>
            <button className="ward_button">
                Proceed to approval
            </button>
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: "28px" }}>
                Or alternatively...
            </h1>
            <p>
                If no authoriser is available
            </p>
            <button className="ward_button">
                Send for approval via email
            </button>
        </div>
    );
}