import React, { Component } from 'react'
import logo from '../images/badge-header.svg'
import './styles/Badges.css'
import BadgeList from '../components/BadgeList'
import { Link } from 'react-router-dom'

import api from '../api'

export default class Badges extends Component {

    

    constructor(props) {
        super(props)
        console.log('1. constructor')
        this.state = {
            loading : true,
            data: undefined,
            error : null
        }
    }

    componentDidMount() {
        this.fechData();
    }

    fechData = async () => {
        this.setState({
            loading : true,
            error: null
        })
        try {
            const data = await api.badges.list();
            this.setState({loading : false , data : data})
        }catch (error) {
            this.setState({loading : false, error : error})
        }

    }

    render() {
        console.log('2. render')

        if (this.state.loading === true) {
            return 'Loading'
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={logo} alt=""></img>
                        </div>

                    </div>
                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">nuevo</Link>
                        </div>
                        <div className="Badges__list">
                            <div className="Badges__container">
                               <BadgeList data= {this.state.data} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
