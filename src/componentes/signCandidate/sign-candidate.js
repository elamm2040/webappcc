import React from "react";
import './sign-candidate.css';
import JustHeader from "../layout/just-header";
import { useSelector, useDispatch } from "react-redux";
import {  Steps } from 'antd';
import Card from "../layout/main-card";
import { ContainerOutlined, CheckCircleOutlined } from  '@ant-design/icons';
import environment from "../../environment/environment";
import { format } from 'date-fns';
import { Checkbox } from 'antd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addSignCandidateValue, addSignCandidateOnLineValue } from "../../app/features/sign-candidate.slice";
import ConnectionService from "../services/connection.service";

export default function SignCandidate() {
    const shiftsRedux = useSelector(state => state.shifts.value);
    const dispatch = useDispatch();
    const env = environment;
    const location = useLocation();
    const { subLoc } = location.state;

    function saveWard(ward) {
        dispatch(addSignCandidateValue(ward));
        dispatch(addSignCandidateOnLineValue(ConnectionService()));
    }

    return (
        <JustHeader>
            <div style={{ textAlign: "left", width: "100%" }}>
                <p>I declare that the following shift information is correct:</p>
                <br />
                <br />
                <h2>Active Ward</h2>
            </div>
            <br />
            <br />
            <section className="timesheetDays">
                {
                    shiftsRedux.map(el => {
                        if(!subLoc) {
                            return <div key={el.id} style={{ textAlign: "left !important" }}>
                                <Card approved='approved' bordered={false} style={{ opacity: 1, marginLeft: 'auto', 
marginRight: 0 }}>
                                    <h3> { env.days[el.day] } { format(new Date(el.date), 'do MMMM') } </h3>
                                    <p className="duration"> { (((el.finishTime - el.startTime - el.break)).toString()).slice(0,1) } hours </p>
                                    <p> { el.location } </p> 
                                    <p> Start Time { el.startTime } </p>
                                    <p> End Time { el.finishTime } </p>
                                    <p> Break Time { el.break } mins </p>
                                </Card>
                            </div>;
                        } else if(el.sublocation == subLoc) {
                            return <div key={el.id} style={{ textAlign: "left !important" }}>
                                <Card approved='approved'  bordered={false} style={{ opacity: 1, marginLeft: 'auto',
marginRight: 0 }}>
                                    <h3> { env.days[el.day] } { format(new Date(el.date), 'do MMMM') }  </h3>
                                    <p className="duration"> { (((el.finishTime - el.startTime - el.break)).toString()).slice(0,1) } hours </p>
                                    <p> { el.location } </p> 
                                    <p> Start Time { el.startTime } </p>
                                    <p> End Time { el.finishTime } </p>
                                    <p> Break Time { el.break } mins </p>
                                </Card>
                            </div>;
                        }
                    })
                }
            </section>
            <div className="row" style={{ textAlign: "left" }}>
                <div className="col">

                </div>
                <div className="col" style={{ minWidth: "650px" }}>
                    <h2 style={{ fontSize: "16px" }}>Declaration</h2>
                    <p style={{ fontSize: "12px" }}>EMPLOYEE TEST Testing Employee declaration Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>
                        <Checkbox>I agree to the above</Checkbox>
                    </p>
                    <div style={{ textAlign: "center" }}>
                        <Link to="/get_approval" className="ward_button" state={{ subLoc: subLoc }} onClick={() => saveWard(subLoc)}>
                            Confirm
                        </Link>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p>Back</p>
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </JustHeader>
    );
}