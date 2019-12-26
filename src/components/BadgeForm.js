import React, { Component } from 'react'

export default class BadgeForm extends Component {

    state = {}

    

    handleClick = e=> {
        e.preventDefault();
        console.log("it was clicked"    )
    }
    
    
    handelSubmid = e=> {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>First Name</h2>
                <form onSubmit={this.handelSubmid}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={this.props.formValue.firstName} />
                    </div>

                    <div className="form-group">
                        <label >Last Name</label>
                        <input
                            value={this.props.formValue.lastLame}
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="lastLame" />
                    </div>
                    <div className="form-group">
                        <label >E-mail</label>
                        <input
                            value={this.props.formValue.email}
                            onChange={this.props.onChange}
                            type="email"
                            className="form-control"
                            name="email" />
                    </div>

                    <div className="form-group">
                        <label >Job Title</label>
                        <input
                            value={this.props.formValue.jobJitle}
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="jobJitle" />
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input
                            value={this.props.formValue.twitter}
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="twitter" />
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}
