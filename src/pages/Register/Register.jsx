import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationContext from '../../context/AuthenticationContext';

import styles from './Register.module.css';

import recruiting from '../../assets/recruiting.png';

const Register = () => {
  const { handleRegister, handleChange, passwordLength } = useContext(
    AuthenticationContext
  );

  return (
    <div className={styles.register_container}>
      <div className={styles.register_title}>
        <h1>Bienvenidos al reclutamiento moderno</h1>
      </div>
      <div className={styles.register_card}>
        <h3>Register</h3>
        <form className={styles.register_form} onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Repeat password"
            name="password2"
            onChange={handleChange}
          />
          <button type="submit" className={styles.button_enviar}>
            Enviar
          </button>
          <div className={styles.login_link_container}>
            <p>Ya tenes cuenta?</p>
            <Link to={'/'} className={styles.login_link}>
              Login
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.register_info}>
        <h2>
          Grabate respondiendo las preguntas y un reclutador vera tus respuestas
        </h2>
      </div>
      {passwordLength && (
            <div className={styles.password_warning}>
              <p>La contrasenia debe ser mayor o igual a 6 caracteres</p>
            </div>
          )}
    </div>
  );
};

export default Register;
