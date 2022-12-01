import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.scss'

const Navbar = () => {
    const user = useSelector(state => state.authReducer.user)
    return(
        <div id="navbar" className="card-shadow">
            <h2>dipaz - Chat</h2>
            <div id="profile-menu">
                <img src={user.avatar} alt="Avatar"/>
                <p>{user.firstName} {user.lastName}</p>
                <FontAwesomeIcon icon='caret-down' className="fa-icon"/>
            </div>
        </div>
    )
}

export default Navbar