import React, { useEffect, useRef } from "react";
import ListarDbModel from "./models/listar-db.model";
import { useSelector, useDispatch } from "react-redux";
import { addAllShifts } from "../app/features/shifts-list";
import environment from "../environment/environment";
import { Steps } from 'antd';
import { ContainerOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from  '@ant-design/icons';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ConnectionService from "./services/connection.service";

import './listar_db.css';
import Header from "./layout/header";
import Footer from "./layout/footer";
import Card from "./layout/main-card";
import Button from "./layout/main-button";

export default function List() {
  const shouldLog = useRef(true);
  const shiftsRedux = useSelector(state => state.shifts.value);
  const onLineRedux = useSelector(state => state.onLine.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const env = environment;

  useEffect(() => {
    if(shouldLog.current) {
      shouldLog.current = false;
      
      if(ConnectionService()) {
        fetch(env.apiURL + 'db.php')
        .then(res => res.json())
        .then(data => {
          const json = ListarDbModel(data);
          if(shiftsRedux.length === 0)
            dispatch(addAllShifts(json));
        });
      }
    }
  }, [dispatch, shiftsRedux, env]);

  const currentShifts = shiftsRedux.filter(el => el.upcomingShift == 0);
  const futureShifts = shiftsRedux.filter(el => el.upcomingShift == 1);

  function sendForApproval() {
    navigate("/select_ward");
  }

  return (
    <>
      <Header title="Shifts" week="This Week" action_button="Logout"></Header>
      <section className="timesheetDays" style={{marginTop: '60px', marginBottom: '0px' }}>
        <Link to="./add_shift" className="add">
          <Button text='+ Add Shift' color='blue'> </Button>  
        </Link>
      </section>
      <br></br>
      <section className="timesheetDays">
        { 
          currentShifts.map(el => (
              <Card approved={el.approved == 1 ? 'approved' : ''} offline={el.offline == 1 ? 'offline' : ''}  bordered={false}>
                <h3> { env.days[el.day] } { format(new Date(el.date), 'do MMMM') } </h3>
                <div style={ 
                    el.approved == 0 ? {display:'none'} 
                    : {display:'inline block', width: 'fit-content', marginTop: '-32px', marginLeft: '65%'}}>
                  <CheckCircleOutlined style={{width:'14%', float: 'left'}} />
                  <h3 style={{width:'86%', float: 'right', paddingLeft: '10px'}}> Approved</h3>
                </div>
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
                    
                <div className="buttonRow">
                  <Link to="./edit_shift" className="edit">
                    <Button className="button" type="primary" text='View Shift' color='blue'> </Button>
                  </Link>
                </div>
                <div className="offlineAlert">
                  <ExclamationCircleOutlined />
                  <span class="tooltiptext">This shift is on offline mode</span>
                </div>
                
              </Card>
          ))
        }
      </section> 
      <section className="timesheetDays">
        <h2>Upcoming Shifts</h2>
      </section>
      <section className="timesheetDays"> 
        {futureShifts.length > 0 ?  
            futureShifts.map(el => (
              <Card className="timesheetCard"  bordered={false}>
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
                    
                <div className="buttonRow">
                  <Link to="./edit_shift" className="edit">
                    <Button className="button" type="primary" text="View Shift" color='blue'> </Button>
                  </Link>
                </div>
              </Card>
            ))
        
          :<div></div>
        }
        
      </section>
      <Footer button_text="Send for Approval" show='1' function={sendForApproval}></Footer>
    </>
  );
}
