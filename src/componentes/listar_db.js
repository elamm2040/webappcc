import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    loadData(){
        //carga los datos de la bd en formato json, usar API
    }

    componentDidMount(){
        this.loadData();
    }

    render() {
        return (<table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Candidate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td ></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>);
    }
}

export default List;