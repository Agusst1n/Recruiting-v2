import React from 'react';
import './App.css';
import Container from './components/Container/Container';

// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
// import { AuthenticationProvider } from './context/AuthenticationContext'

function App() {
  return (
    <div className="App">

      <Container/>
      {/* <BrowserRouter>
        <AuthenticationProvider>
          <Routes>
            <Route path='/home' element={<Container/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Login/>}/>
          </Routes>
        </AuthenticationProvider>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
