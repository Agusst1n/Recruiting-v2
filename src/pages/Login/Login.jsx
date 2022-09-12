import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../../context/AuthenticationContext';

import styles from './Login.module.css'

import girlPc from '../../assets/3d.png'
import manPc from '../../assets/manPc.png'
import blob from '../../assets/blob.png'

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
    <div className={styles.login_title}>
      <h1>Bienvenid@ de nuevo!</h1>
    </div>
    <div className={styles.girlPc_image}>
      <img src={girlPc} alt="" width={200}/>
    </div>
    <div className={styles.login_blob}>
      <div className={styles.login_form}>
        <h3>Login</h3>
          <form className={styles.form} onSubmit={handleLogin}>
            <input type="text" placeholder='Enter your username' name='username' onChange={handleChange}/>
            <input type="text" placeholder='Enter your email' name='email' onChange={handleChange}/>
            <input type="text" placeholder='Enter your password' name='password' onChange={handleChange}/>
            <button type='submit' className={styles.button_enviar}>Login</button>
            <Link to={'/register'} className={styles.register_link}>Registrate</Link>
          </form>
      </div>
    </div>
    <div className={styles.manPc_image}>
      <img src={manPc} alt="" width={270}/>
    </div>
  </div>;
}

export default Login;