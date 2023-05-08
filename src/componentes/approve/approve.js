import React from "react";
import './approve.css';
import JustHeader from "../layout/just-header";
import { useSelector, useDispatch } from "react-redux";
import { ContainerOutlined, CheckCircleOutlined } from  '@ant-design/icons';
import environment from "../../environment/environment";
import { format } from 'date-fns';
import { Checkbox, Input, Card, Steps } from 'antd';

export default function Approve() {
    const shiftsRedux = useSelector(state => state.shifts.value);
    const dispatch = useDispatch();
    const env = environment;

    return (
        <JustHeader>
            <p style={{ textAlign: "left" }}>       
                Approve { shiftsRedux[0]['candidate'] }'s Shifts
            </p>
            <h2 style={{ textAlign: "left", fontSize: "22px" }}>       
                Current Ward
            </h2>
            <div className="row" style={{ paddingTop: "20px" }}>
                {
                    shiftsRedux.map(el => (
                        <div key={el.id} className="col">
                            <Card className={el.approved == 1 ? 'timesheetCard approved' : 'timesheetCard'}  bordered={false} style={{ textAlign: "left" }}>
                                <h3> { env.days[el.day] } { format(new Date(el.date), 'do MMMM') } 
                                
                                <CheckCircleOutlined className={el.approved == 1 ?'check':'not_approved'} /><span className={el.approved == 1 ?'confirm_label':'not_approved'}> Approved</span> 
                                
                                
                                </h3>
                                <p className="duration"> { (((el.finishTime - el.startTime - el.break)).toString()).slice(0,1) } hours </p>
                                <p> { el.location } </p> 
                                <p> { el.sublocation } </p>
                                
                                <Steps className="steps"
                                    progressDot
                                    size="small"
                                    items={[
                                    {
                                        title: 'Start Time',
                                        status: 'finish',
                                        description:  el.startTime.slice(0,2) + ':' + el.startTime.slice(2,4) 
                                    },
                                    {
                                        title: 'Finish Time',
                                        status: 'finish',
                                        description: el.finishTime.slice(0,2) + ':' + el.finishTime.slice(2,4)
                                    },
                                    ]}
                                />

                                <p className="expenses"> <ContainerOutlined /> 0 Expenses </p>
                                    
                                <button className="button" type="primary"> View Shift </button>
                            </Card>
                        </div>
                    ))
                }
            </div>
            <div className="row" style={{ textAlign: "left" }}>
                <div className="col">

                </div>
                <div className="col" style={{ minWidth: "650px" }}>
                    <h2>
                        Approved Signatory Declaration
                    </h2>
                    <div>
                        AUTHORISER TEST testing Auth signatory declaration Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <p>
                        <Checkbox>I agree to the above</Checkbox>
                    </p>
                    <table className="fields">
                        <tr>
                            <td><Input className="addShiftInput" placeholder="Signatory Name" /></td>
                        </tr>
                        <tr>
                            <td><Input className="addShiftInput" placeholder="Psition" /></td>
                        </tr>
                        <tr>
                            <td><Input className="addShiftInput" placeholder="Email" /></td>
                        </tr>
                    </table>
                </div>
                <div className="col">

                </div>
            </div>
        </JustHeader>
    );
}