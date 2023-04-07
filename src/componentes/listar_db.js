import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadData() {
    //carga los datos de la bd en formato json, usar API
    fetch('http://localhost/BackEnd/db.php')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
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
}

export default List;
