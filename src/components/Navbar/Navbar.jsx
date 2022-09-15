// import React from 'react'
// import { useContext } from 'react'
// import QuestionsContext from '../../context/QuestionsContext'
// import { FaAlignRight } from 'react-icons/fa';

// import styles from './Navbar.module.css'
// import AuthenticationContext from '../../context/AuthenticationContext';

// import icon from '../../assets/daft.jpg'


// const Navbar = () => {

//   const { username,handleClose } = useContext(AuthenticationContext);

//   const {toggle_navbar, navbarShow} = useContext(QuestionsContext)
//   return (
//     <div className={navbarShow ? styles.navbarON : styles.navbarOFF}>
//         <div className={styles.navbar_toggle} onClick={toggle_navbar}>
//             <FaAlignRight size={25}/>
//         </div>
//         <div className={styles.username_container}>
//             <div className={styles.username_icon}>
//                 <img src={icon} alt="" width={40}/>
//             </div>
//             <p className={styles.username}>{username}</p>
//         </div>
//         <div className={styles.navbar_closeSesion}>
//           <button onClick={handleClose}>Cerrar sesion</button>
//         </div>
//     </div>
//   )
// }

// export default Navbar