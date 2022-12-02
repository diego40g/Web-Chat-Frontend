import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.scss'

const Navbar = () => {
    const user = useSelector(state => state.authReducer.user)
    const [showProfileOptions, setShowProfileOptions]=useState('')

    return(
        <div id="navbar" className="card-shadow">
            <h2>dipaz - Chat</h2>
            <div onClick={() => setShowProfileOptions(!showProfileOptions)} id="profile-menu">
                <img src={user.avatar} alt="Avatar"/>
                <p>{user.firstName} {user.lastName}</p>
                <FontAwesomeIcon icon='caret-down' className="fa-icon"/>

                {
                    showProfileOptions &&
                    <div id="profile-options">
                        <p>Update profile</p>
                        <p>Logout</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar