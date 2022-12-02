import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Apresentacao from './pages/Apresentacao';
import About from './pages/About';
import Login from './pages/login/Login';
import Navbar from './components/NavBar';
import CadastroUsuario from './pages/CadastroUsuario';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/' element={<Apresentacao />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/contato' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;