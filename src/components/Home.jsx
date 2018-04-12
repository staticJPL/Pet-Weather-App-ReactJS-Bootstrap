import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css';
import Table from './Table';

var data = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'}
];


export default class Home extends Component{

    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Pet Weater App</h2>
                </Jumbotron>
                <div>
                    <p className="Table-header"> Pet List </p>
                    <Table data ={data}/>
                </div>
            </Grid>
        )
    }
}