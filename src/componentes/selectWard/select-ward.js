import React, { useEffect } from "react";
import JustHeader from "../layout/just-header";
import './select-ward.css';
import { EnvironmentOutlined } from  '@ant-design/icons';
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

export default function SelectWard() {
  const shiftsRedux = useSelector(state => state.shifts.value);
  var arrWards = [];
  const navigate = useNavigate();

  arrWards = shiftsRedux.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue.sublocation))
      accumulator.push(currentValue.sublocation);

    return accumulator;
  }, []);

  if(arrWards.length == 1) {
    return (
      <Navigate to="/sign_candidate" />
    );
  } else {
    return (
      <JustHeader>
          <div style={{ textAlign: "center", paddingTop: "50px", height: "100vh" }}>
              <p><b>Booked Shifts</b></p>
              <div className="grid-container">
                {
                  arrWards.map(el => (
                    <button className="ward_button">
                      <EnvironmentOutlined /> { el }
                    </button>
                  ))
                }
                <div style={{ marginTop: "30px" }}>
                  <p>Back</p>
                </div>
              </div>
          </div>
      </JustHeader>
    );
  }
}