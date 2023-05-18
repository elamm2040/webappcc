import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Card from "../layout/main-card";
import Button from "../layout/main-button";
import { Input } from "antd";
import AddShiftService from "./add-shift.service";
import { addShift } from "../../app/features/shifts-list";
import { useNavigate } from "react-router-dom";

export default function Add_shift() {
    const shiftsRedux = useSelector(state => state.shifts.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [shiftForm, setShiftForm] = useState({
        client: '',
        location: '',
        sublocation: '',
        startTime: '',
        finishTime: '',
        break: '',
        day: 0
    });

    function saveAddShift() {
        const object = AddShiftService(shiftForm);
        dispatch(addShift(object));
        navigate("/");
    }

    return (
        <>
            <Header title="Shifts" week="0" action_button="Logout"></Header>
            <section className="timesheetDays">
                <Card className="addCard"  bordered={false}>
                    <table className="fields">
                        <tbody>
                            <tr>
                                <td colSpan={2}><b>Where did you work?</b></td>
                            </tr>
                            <tr>
                                <td>Client</td>
                                <td>
                                    <Input className="addShiftInput" 
                                           name="client" 
                                           onChange={e => {shiftForm.client = e.target.value; setShiftForm(shiftForm)}} />
                                </td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>
                                    <Input className="addShiftInput" 
                                           name="location" 
                                           onChange={e => {shiftForm.location = e.target.value}} />
                                </td>
                            </tr>
                            <tr>
                                <td>Sublocation</td>
                                <td>
                                    <Input className="addShiftInput"
                                           name="sublocation" 
                                           onChange={e => {shiftForm.sublocation = e.target.value}} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
                <Card className="addCard"  bordered={false}>
                    <table className="fields">
                        <tbody>
                            <tr>
                                <td colSpan={3}><b>What shift did you do?</b></td>
                            </tr>
                            <tr>
                                <td>Specialism</td>
                                <td colSpan={2}>
                                    <Input className="addShiftInput" />
                                </td>
                            </tr>
                            <tr>
                                <td>Booking Ref</td>
                                <td colSpan={2}>
                                    <Input className="addShiftInput" />
                                </td>
                            </tr>
                            <tr>
                                <td>Start Time</td>
                                <td>
                                    <Input className="addShiftHours" 
                                           defaultValue={"12:00"} 
                                           name="startTime" 
                                           onChange={e => {shiftForm.startTime = e.target.value}} />
                                </td>
                                <td>
                                    <button className="counterButton"><b>-</b></button>
                                    <button className="counterButton"><b>+</b></button>
                                </td>
                            </tr>
                            <tr>
                                <td>End Time</td>
                                <td>
                                    <Input className="addShiftHours" 
                                           name="finishTime" 
                                           defaultValue={"12:00"} 
                                           onChange={e => {shiftForm.finishTime = e.target.value}} />
                                    </td>
                                <td>
                                    <button className="counterButton"><b>-</b></button>
                                    <button className="counterButton"><b>+</b></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Break Time</td>
                                <td>
                                    <Input className="addShiftHours" 
                                           defaultValue={"0 mins"}
                                           name="break" 
                                           onChange={e => {shiftForm.break = e.target.value}} />
                                    </td>
                                <td>
                                    <button className="counterButton"><b>-</b></button>
                                    <button className="counterButton"><b>+</b></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Days</td>
                                <td colSpan={2}>
                                    <table className="days">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Button className="dayButton" 
                                                            text ='Mon 3th' 
                                                            color='grey'
                                                            onChange={e => {shiftForm.day = 1}}>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className="dayButton"
                                                            text='Tue 4th' 
                                                            color='grey'
                                                            onChange={e => {shiftForm.day = 2}}>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className="dayButton" 
                                                            text='Wed 5th' 
                                                            color='grey'
                                                            onChange={e => {shiftForm.day = 3}}>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className="dayButton" 
                                                            text='Thu 6th' 
                                                            color='grey'
                                                            onChange={e => {shiftForm.day = 4}}>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className="dayButton" 
                                                            text='Fri 7th' 
                                                            color='grey'
                                                            onChange={e => {shiftForm.day = 5}}>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className="dayButton" 
                                                            text='Sat 8th' 
                                                            color='grey'
                                                            onChange={e => {shiftForm.day = 6}}>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className="dayButton" 
                                                            text='Sun 9th' 
                                                            color='grey'
                                                            onChange={e => {shiftForm.day = 7}}>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </section>
            <Footer button_text="Save" show='0' function={saveAddShift}></Footer>
        </>
    );
}