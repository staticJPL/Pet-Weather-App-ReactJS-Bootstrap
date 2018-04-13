import React, { Component } from 'react';
import { button } from 'react-bootstrap';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
class Table extends Component {

    constructor(props){
        super(props);
        this.state = {
            petData:[],
        };
    }

    componentWillMount(){
        // Got this Get request finally working, needed to setup Heroku this took hours to figure out, never knew this even existed
        fetch('http://localhost:8000/pets')
            .then(results=>{
                return results.json();
            }).then(data=>{

                this.setState({petData:data.response});
                //console.log(this.state.petData.length);
        })

    }

    CreateTable(){

        function buttonFormatter(cell, row){
            return (<button type="button" class="btn btn-primary" >View</button>);
        }

        return(
            <BootstrapTable data={this.state.petData} hover={true}>
                <TableHeaderColumn dataField="pet_lookup_id" isKey={true} dataAlign="center" >PetID</TableHeaderColumn>
                <TableHeaderColumn dataField="name"> Pet Name</TableHeaderColumn>
                <TableHeaderColumn dataField="type">Type</TableHeaderColumn>
                <TableHeaderColumn dataField="breed">Breed</TableHeaderColumn>
            </BootstrapTable>);
    }

    render() {

        return (this.CreateTable());
    }
}

export default Table;