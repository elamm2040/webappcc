import React, { useEffect, useRef } from "react";
import ListarDbModel from "../models/listar-db.model";
import { useSelector, useDispatch } from "react-redux";
import { addShift } from "../../app/features/shifts-list";
import {  Row, Card, Form, Input, Button } from 'antd';
import { Route, Routes, Link } from 'react-router-dom';
import environment from "../../environment/environment";
import '../listar_db.css';
import './add-shift.css';

export default function Add_shift() {

    let data = Array();

    function Save_Shift() {
        const shouldLog = useRef(true);
        const shiftsRedux = useSelector(state => state.shifts.value);
        const dispatch = useDispatch();
        const env = environment;
    
        useEffect(() => {
            if(shouldLog.current) {
            shouldLog.current = false;
    
            fetch(env.apiURL + 'db.php')
            .then(res => res.json())
            .then(data => {
                const json = ListarDbModel(data);
                dispatch(addShift(json));
            });
            }
        }, [dispatch, shiftsRedux, env]);
    }

    return (
        <section>
            <Row gutter={16}>
                <Card className="addCard"  bordered={false}>
                    <table className="fields">
                        <tr>
                            <td colSpan={2}><b>Where did you work?</b></td>
                        </tr>
                        <tr>
                            <td nowrap>Client</td>
                            <td><Input className="addShiftInput" /></td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td><Input className="addShiftInput"  /></td>
                        </tr>
                        <tr>
                            <td>Sublocation</td>
                            <td><Input className="addShiftInput"  /></td>
                        </tr>
                    </table>
                </Card>
                <Card className="addCard"  bordered={false}>
                    <table className="fields">
                        <tr>
                            <td colSpan={3}><b>What shift did you do?</b></td>
                        </tr>
                        <tr>
                            <td>Specialism</td>
                            <td colSpan={2}><Input className="addShiftInput"  /></td>
                        </tr>
                        <tr>
                            <td>Booking Ref</td>
                            <td colSpan={2}><Input className="addShiftInput"  /></td>
                        </tr>
                        <tr>
                            <td>Start Time</td>
                            <td><Input className="addShiftHours" defaultValue={"12:00"} /></td>
                            <td><button className="counterButton"><b>-</b></button>
                                <button className="counterButton"><b>+</b></button>
                            </td>
                        </tr>
                        <tr>
                            <td>End Time</td>
                            <td><Input className="addShiftHours"  defaultValue={"12:00"} /></td>
                            <td><button className="counterButton"><b>-</b></button>
                                <button className="counterButton"><b>+</b></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Break Time</td>
                            <td><Input className="addShiftHours" defaultValue={"0 mins"} /></td>
                            <td><button className="counterButton"><b>-</b></button>
                                <button className="counterButton"><b>+</b></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Days</td>
                            <td colSpan={2}>
                                <table className="days">
                                    <tr>
                                        <td><Button className="dayButton">Mon 3th</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Button className="dayButton">Tue 4th</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Button className="dayButton">Wed 5th</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Button className="dayButton">Thu 6th</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Button className="dayButton">Fri 7th</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Button className="dayButton">Sat 8th</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Button className="dayButton">Sun 9th</Button></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                </Card>
            </Row>
            <br></br>
            <Link to="/" className="list">
                <button className="save_button" onClick={Save_Shift()}> Save </button>  
            </Link>
            
        </section>
    );
}