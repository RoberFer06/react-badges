import React, { Component } from 'react'
import './styles/BadgesList.css'

export default class BadgeList extends Component {
    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled ">
                    {this.props.data.map(
                        (badge) => {
                            return (
                                <li key={badge.id}>
                                    <div className="BadgesListItem">
                                        <img
                                            src={badge.avatarUrl}
                                            className="BadgesListItem__avatar"
                                            alt="logo" />
                                        <div>
                                            <strong>
                                                {badge.firstName} 
                                            </strong>
                                            <br />@{badge.twitter}
                                            <br />
                                            {badge.jobTitle}
                                        </div>

                                    </div>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }
}
