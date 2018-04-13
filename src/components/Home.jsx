import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron,Grid} from 'react-bootstrap';
import './Home.css';
import Table from './Table';

export default class Home extends Component{
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Pet Weater App</h2>
                </Jumbotron>
                <div>
                    <p className="Table-header"> Pet List </p>
                    <Table/>
                </div>
            </Grid>
        )
    }
}