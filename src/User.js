import React from "react";

import './User.css';

function User({firstName, lastName}){
    return (
        <div className="user">
            <p>
                <span>First Name: </span>
                <span>{firstName}</span>
            </p>
            {
                lastName && (
            <p>
                <span>Last Name</span>
                <span>{lastName}</span>
            </p>
                )
            }
        </div>
    )
}

export default User