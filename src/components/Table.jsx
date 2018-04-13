import React, { Component } from 'react';
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
            return '<Button type="submit">View</Button>';
        }

        return(
            <BootstrapTable data={this.state.petData} hover={true}>
                <TableHeaderColumn dataField="pet_lookup_id" isKey={true} dataAlign="center" >PetID</TableHeaderColumn>
                <TableHeaderColumn dataField="name"> Pet Name</TableHeaderColumn>
                <TableHeaderColumn dataField="type">Type</TableHeaderColumn>
                <TableHeaderColumn dataField="breed">Breed</TableHeaderColumn>
                <TableHeaderColumn dataField="button" dataFormat={buttonFormatter}></TableHeaderColumn>
        </BootstrapTable>);
    }

    render() {

        return (this.CreateTable());
    }
}

export default Table;