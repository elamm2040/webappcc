import React from "react";
import './get-approval.css';
import JustHeader from "../layout/just-header";
import { LoginOutlined } from  '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function GetApproval() {
    const location = useLocation();
    const { subLoc } = location.state;

    return (
        <div style={{ textAlign: "center", paddingTop: "50px", paddingLeft: "30px", paddingRight: "30px", height: "100vh" }}>
            <LoginOutlined style={{ fontSize: "120px", color: "#48c572" }} />
            <h1 style={{ fontSize: "28px" }}>
                Please hand your device over to your authoriser to approve your shift(s)
            </h1>
            <Link to="/approve" className="ward_button" state={{ subLoc: subLoc }}>
                Proceed to approval
            </Link>
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