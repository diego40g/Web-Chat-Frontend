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

    const [firstName, setFirstName]=useState(user.firstName)
    const [lastName, setLastName]=useState(user.lastName)
    const [email, setEmail]=useState(user.email)
    const [gender, setGender]=useState(user.gender)
    const [password, setPassword]=useState('')
    const [rePassword, setRePassword]=useState('')
    const [avatar, setAvatar]=useState('')

    const submitForm = (e) => {
        e.preventDefault()

        const form = { firstName, lastName, email, gender, password, avatar}

        const formData = new FormData()

        for(const key in form){
            formData.append(key, form[key])
        }

        // dispatch
        
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRePassword = (e) => {
        setRePassword(e.target.value)
    }
    const handleAvatar = (e) => {
        setAvatar(e.target.files[0])
    }

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
                            <h3 className="m-0">Update profile</h3>
                        </Fragment>

                        <Fragment key='body'>
                            <form>
                                <div className='input-field mb-1'>
                                    <input 
                                    onChange={handleFirstName}
                                    value={firstName}
                                    required='required'
                                    type='text'
                                    placeholder='First name' />
                                </div>

                                <div className='input-field mb-1'>
                                    <input 
                                    onChange={handleLastName}
                                    value={lastName}
                                    required='required'
                                    type='text'
                                    placeholder='Last name' />
                                </div>

                                <div className='input-field mb-1'>
                                    <input 
                                    onChange={handleEmail}
                                    value={email}
                                    required='required'
                                    type='email'
                                    placeholder='Email' />
                                </div>

                                <div className='input-field mb-1'>
                                    <select
                                    onChange={handleGender}
                                    value={gender}
                                    required='required'
                                    >
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='not'>I prefer not to say</option>
                                    </select>
                                </div>

                                <div className='input-field mb-2'>
                                    <input 
                                    onChange={handlePassword}
                                    value={password}
                                    required='required'
                                    type='password'
                                    placeholder='Password' />
                                </div>
                                <div className='input-field mb-2'>
                                    <input 
                                    onChange={handleRePassword}
                                    value={rePassword}
                                    required='required'
                                    type='password'
                                    placeholder='Repeat password' />
                                </div>
                                <div className='input-field mb-2'>
                                    <input 
                                    onChange={handleAvatar}
                                    type='file'/>
                                </div>
                            </form>
                        </Fragment>
                        
                        <Fragment key='footer'>
                            <button className="btn-success">UPDATE</button>
                        </Fragment>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default Navbar