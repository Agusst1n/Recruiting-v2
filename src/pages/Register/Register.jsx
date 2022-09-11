import React from 'react'
import { useContext } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'

import styles from './Register.module.css'

const Register = () => {


  const {handleRegister,handleChange} = useContext(AuthenticationContext)

  return (
    <div className={styles.register_container}>
        <div className={styles.register_card}>
            <form className={styles.register_form} onSubmit={handleRegister}>
                <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                <input type="text" placeholder='Email' name='email' onChange={handleChange}/>
                <input type="text" placeholder='Password' name='password' onChange={handleChange}/>
                <input type="text" placeholder='Repeat password' name='password2' onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Register