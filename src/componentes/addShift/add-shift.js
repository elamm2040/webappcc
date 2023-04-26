import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Row, Card, Form, Input } from 'antd';
import List from "../listar_db";
import { Route, Routes, Link } from 'react-router-dom';

import '../listar_db.css';
import './add-shift.css';

export default function AddShift() {

  return (
    <section>
        <Row gutter={16}>
            <Card className="card"  bordered={false}>
                <Form className="form">
                    <Form.Item
                        label="Client"
                        name="client"
                        rules={[
                            {
                                message: 'client',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[
                            {
                                message: 'cllocationient',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Sublocation"
                        name="sublocation"
                        rules={[
                            {
                                message: 'sublocation',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Card>
            <Card className="card"  bordered={false}>
                <Form className="form">
                    <Form.Item
                        label="Start time"
                        name="start_time"
                        rules={[
                            {
                                message: 'start time',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>  
                    <Form.Item
                        label="Finish time"
                        name="finish_time"
                        rules={[
                            {
                                message: 'finish time',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Break"
                        name="break"
                        rules={[
                            {
                                message: 'break',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>  
                </Form>
            </Card>
        </Row>
        <br></br>
        <Link to="/" className="list">
            <button className="save_button"> Save </button>  
        </Link>
        
    </section>
  );
}