import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import logo from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'

export default class BadgeNew extends Component {

    state = {
        form : {
            firstName : '',
            lastLame : '',
            email : '',
            jobJitle : '',
            twitter : ''
        }
    }

    handelChange= e=> {
        this.setState({
            form : {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    
    render() {
        return (
            <React.Fragment>
               <div className="BadgeNew__hero">
                   <img className="BadgeNew__hero-logo" src={logo} alt=""></img>

               </div>
               <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge 
                                    avatar="https://s.gravatar.com/avatar/235361fb82fc9fe245063cf8d9e9b506" 
                                    name={this.state.form.firstName}
                                    profession={this.state.form.jobJitle}
                                    email={this.state.form.email}
                                    nick={this.state.form.twitter}
                                />
                            </div>
                            <div className="col-6">
                               <BadgeForm onChange={this.handelChange} formValue={this.state.form} />
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
