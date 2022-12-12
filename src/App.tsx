import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Login from './pages/login/Login';
import Navbar from './components/NavBar';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;