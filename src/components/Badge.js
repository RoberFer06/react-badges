import React, { Component } from 'react'
import './styles/Badge.css'

import logoHeader from '../images/badge-header.svg'

export default class Badge extends Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoHeader} alt="Logo de la conferenicia" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" 
                        src={this.props.avatar}  alt="Logo gravatar" />
                    <br/>
                    <h1>
                        {this.props.name}
                    </h1>
                </div>
                <div className="Badge__section-info"> 
                    <h3>{this.props.profession}</h3>
                    <div>@{this.props.nick}</div>
                </div>
                <div className="Badge__footer">
                    #platzi
                </div>
            </div>
        )
    }
}