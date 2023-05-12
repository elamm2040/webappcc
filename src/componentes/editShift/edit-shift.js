import React, { useEffect, useRef } from "react";
import ListarDbModel from "../models/listar-db.model";
import { useSelector, useDispatch } from "react-redux";
import { addShift } from "../../app/features/shifts-list";
import {  Row, Input } from 'antd';
import { Route, Routes, Link } from 'react-router-dom';
import environment from "../../environment/environment";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Card from "../layout/main-card";
import Button from "../layout/main-button";
import '../listar_db.css';
import '../addShift/add-shift.css';

export default function Edit_shift() {

    let data = Array();

    return (
        <div>
            <Header title="Edit hours, breaks & details" week='0' action_button="Cancel"></Header>
            <section className="timesheetDays">
                <Card className="addCard"  bordered={false}>
                    <table className="fields" style={{marginTop: '5px'}}>
                        <tr>
                            <td colSpan={3}><b>Shift Times</b></td>
                        </tr>
                        <tr>
                            <td>Start Time</td>
                            <td><Input className="addShiftHours" defaultValue={"12:00"} /></td>
                            <td className="counterButtons"><button className="counterButton"><b>-</b></button>
                                <button className="counterButton"><b>+</b></button>
                            </td>
                        </tr>
                        <tr>
                            <td>End Time</td>
                            <td><Input className="addShiftHours"  defaultValue={"12:00"} /></td>
                            <td className="counterButtons"><button className="counterButton"><b>-</b></button>
                                <button className="counterButton"><b>+</b></button>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Break</b></td>
                        </tr>
                        <tr>
                            <td>Break Time</td>
                            <td><Input className="addShiftHours" defaultValue={"0 mins"} /></td>
                            <td className="counterButtons"><button className="counterButton"><b>-</b></button>
                                <button className="counterButton"><b>+</b></button>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Details</b></td>
                        </tr>
                        <tr>
                        <td>Book REF</td>
                            <td><Input className="addShiftInput" style={{maxWidth: '132px'}}  /></td>
                        </tr>
                    </table>
                    
                </Card>
                <br></br>               
            </section>
            <Footer button_text="Save" show='0'></Footer>
        </div>
    );
}