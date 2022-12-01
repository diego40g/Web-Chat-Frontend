import React, { useState } from 'react'
import registerImage from '../../assets/images/register.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { register } from '../../store/actions/auth';
import './Auth.scss'

const Register = ( {history }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [email, setEmail]=useState('')
  const [gender, setGender]=useState('male')
  const [password, setPassword]=useState('')
  const [rePassword, setRePassword]=useState('')

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

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(register({ firstName, lastName, email, gender, password }, history))
    navigate('/chat')
  }

  return (
    <div id="auth-container">
      <div id='auth-card'>
        <div className='card-shadow'>
          <div id='image-section'>
              <img src={registerImage} alt='Register' />
          </div>

          <div id='form-section'>
            <h2>Create an account</h2>
            <form onSubmit={submitForm}>
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

              <button>REGISTER</button>
            </form>

            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register