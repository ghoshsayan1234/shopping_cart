import React from 'react';
import './css/LoginSignup.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit (e) {
    e.preventDefault();
    setName('');
    setMail('');
    setPassword('');
    toast.success('your signup is completed.')
  }

  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input type="email" placeholder='Email Address' value={mail} onChange={(e)=>{setMail(e.target.value)}} />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <button type='submit' >Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
    </form>
  )
}

export default LoginSignup;
