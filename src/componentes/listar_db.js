import React, { useEffect, useRef } from "react";
import ListarDbModel from "./models/listar-db.model";
import { useSelector, useDispatch } from "react-redux";
import { addAllShifts } from "../app/features/shifts-list";
import environment from "../environment/environment";

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
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client</th>
          <th>Candidate</th>
          <th>Day</th>
        </tr>
      </thead>
      <tbody>
        {
          shiftsRedux.map(el => (
            <tr key={el.id}>
              <td>{ el.id }</td>
              <td>{ el.client }</td>
              <td>{ el.candidate }</td>
              <td>{ env.days[el.day] }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
