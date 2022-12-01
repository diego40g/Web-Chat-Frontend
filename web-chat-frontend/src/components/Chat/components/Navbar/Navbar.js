import React from "react";
import { useSelector } from "react-redux";
import './Navbar.scss'

const Navbar = () => {
    const user = useSelector(state => state.authReducer.user)
    return(
        <div id="navbar" className="card-shadow">
            <h2>dipaz - Chat</h2>
            <div id="profile-menu">
                <img src={user.avata} alt="Avatar"/>
                <p></p>
            </div>
        </div>
    )
}

export default Navbar