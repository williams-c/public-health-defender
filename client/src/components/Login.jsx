// App.jsx
import React, { useState } from 'react';

const SignUp = () => {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    const validatePassword = (password) => {
      const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      const test = reg.test(password);
      return test;
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!validatePassword(password)) {
        alert('Please enter a valid password')
        return
      }

      // handle form submit, api request
      updateUsername('')
      updatePassword('')
    }

    return (
      <div>

        <div className='login-box'>

          <form className='login-form'>
            <p>Sign Up</p>
            <input onChange={(e) => {updateUsername(e.target.value)}} className='login-form-element' type="text" placeholder="Username" value={username}></input><br/>
            <input onChange={(e) => {updatePassword(e.target.value)}} className='login-form-element' type="password" placeholder="Password" value={password}></input><br/>
            <input onClick={(e) => {handleSubmit(e)}} className='login-form-element' type="submit"></input>
          </form>

        </div>

      </div>
    );
}

export default SignUp;