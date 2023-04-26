import React from "react";
import JustHeader from "../layout/just-header";
import './select-ward.css';
import { EnvironmentOutlined } from  '@ant-design/icons';

export default function SelectWard() {

  return (
    <JustHeader>
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
            <p><b>Booked Shifts</b></p>
            <div className="grid-container">
              <button className="ward_button">
                <EnvironmentOutlined /> Send for Approval
              </button>
              <button className="ward_button">
                <EnvironmentOutlined /> Send for Approval
              </button>
              <div style={{ marginTop: "30px" }}>
                <p>Back</p>
              </div>
            </div>
        </div>
    </JustHeader>
  );
}