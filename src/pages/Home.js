import React, { Component } from 'react'
import logo from '../images/badge-header.svg'
import './styles/Home.css'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={logo} alt=""></img>
                    <Link to="/badges" className="btn btn-primary"> Comenzar</Link>
                    
                    </div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}
