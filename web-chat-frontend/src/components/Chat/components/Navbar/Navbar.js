import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from "../../../../store/actions/auth";
import './Navbar.scss'
import Modal from "../../../Modal/Modal";

const Navbar = () => {
    const user = useSelector(state => state.authReducer.user)
    const [showProfileOptions, setShowProfileOptions]=useState('')
    const [showProfileModal, setShowProfileModal]=useState('')
    const dispatch = useDispatch()

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
                        <p onClick={() => setShowProfileModal(true)}>Update profile</p>
                        <p onClick={ () => dispatch(logout()) }>Logout</p>
                    </div>
                }

                {
                    showProfileModal &&
                    <Modal click={() => setShowProfileModal(false)}>
                        <Fragment key='header'>
                            Modal Header
                        </Fragment>

                        <Fragment key='body'>
                            Modal Body
                        </Fragment>
                        
                        <Fragment key='footer'>
                            Modal Footer
                        </Fragment>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default Navbar