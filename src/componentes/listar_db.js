import React, { useEffect, useRef, useState } from "react";
import ListarDbModel from "./models/listar-db.model";

export default function List() {
  const shouldLog = useRef(true);
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    if(shouldLog.current) {
      shouldLog.current = false;

      fetch('http://localhost/BackEnd/db.php')
      .then(res => res.json())
      .then(data => {
        const json = ListarDbModel(data);
        json.forEach(element => {
          setShifts(shifts.push(element));
        });
        console.log(shifts);
      });
    }
  }, [shifts]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client</th>
          <th>Candidate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
