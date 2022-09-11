import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../../context/AuthenticationContext';

import styles from './Login.module.css'

function Login() {

  let navigate = useNavigate()

  const {handleChange,handleLogin} = useContext(AuthenticationContext)

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('user'))){
      navigate('/home')
      return
    }
  },[])


  return <div className={styles.login_container}>
    <div className={styles.login_form}>
        <form className={styles.form} onSubmit={handleLogin}>
          <input type="text" placeholder='Enter your username' name='username' onChange={handleChange}/>
          <input type="text" placeholder='Enter your email' name='email' onChange={handleChange}/>
          <input type="text" placeholder='Enter your password' name='password' onChange={handleChange}/>
          <button type='submit'>Login</button>
          <Link to={'/register'} className={styles.register_link}>Registrate</Link>
        </form>
    </div>
  </div>;
}

export default Login;