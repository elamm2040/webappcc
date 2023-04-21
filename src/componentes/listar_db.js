import React, { useEffect, useRef } from "react";
import ListarDbModel from "./models/listar-db.model";
import { useSelector, useDispatch } from "react-redux";
import { addAllShifts } from "../app/features/shifts-list";
import environment from "../environment/environment";
import {  Button, Card, Col, Row, Steps } from 'antd';
import { ContainerOutlined } from  '@ant-design/icons';
import { format } from 'date-fns';
import { Route, Routes, Link } from 'react-router-dom';
import Add from "./add_shift";

import './listar_db.css';

export default function List() {
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
        dispatch(addAllShifts(json));
      });
    }
  }, [dispatch, shiftsRedux, env]);

  return (
    <section className="timesheetDays">
      <Link to="/add_shift" className="add">
        <button className="add_button"> + Add Shift </button>  
      </Link>
      
      <br></br>
      <Row gutter={16}>
        { 
          shiftsRedux.map(el => (
            <Col span={8} className="col">
                <Card className="card"  bordered={false}>
                  <h3> { env.days[el.day] } { format(new Date(el.date), 'do MMMM') } </h3>
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
            </Col>
          ))
        }
      </Row>
    </section>
  );
}
