import React from 'react'
import registerImage from '../../assets/images/register.svg'

import './Auth.scss'

const Register = () => {
  return (
    <div id="auth-container">
      <div id='auth-card'>
        <div className='card-shadow'>
          <div id='image-section'>
              <img src={registerImage} alt='Register' />
          </div>

          <div id='form-section'>
            <h2>Create an account</h2>
            <form>
              <div className='input-field mb-1'>
                <input placeholder='First name' />
              </div>

              <div className='input-field mb-1'>
                <input placeholder='Last name' />
              </div>

              <div className='input-field mb-1'>
                <input placeholder='Email' />
              </div>

              <div className='input-field mb-1'>
                <select>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='not'>I prefer not to say</option>
                </select>
              </div>

              <div className='input-field mb-2'>
                <input placeholder='Password' />
              </div>
              <div className='input-field mb-2'>
                <input placeholder='Repeat password' />
              </div>

              <button>REGISTER</button>
            </form>

            <p>Already have an account? <a href='/login'>Login</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register