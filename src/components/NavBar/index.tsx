import React from 'react';
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/TokensReducer';
import { addToken } from '../../store/tokens/Actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const goLogout = () => {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <nav className='nav'>
            <Box className="logo" >
                <img src="https://cdn.discordapp.com/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logo" />
            </Box>
            <ul>
                <a href="" className="a"><li>Posts</li></a>
                <a href="" className="a"><li>Perfil</li></a>
                <a href="/sobre" className="a"><li>Sobre</li></a>
                <a href="/contato" className="a"><li>Contato</li></a>
                <a href="/" className="a" onClick={goLogout}><li>Logout</li></a>
            </ul>
            <input className='input' placeholder='pesquisar' />
        </nav>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;