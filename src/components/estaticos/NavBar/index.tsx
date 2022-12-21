import React from 'react';
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const goLogout = () => {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <nav className='nav'>
            <Box className="logo" >
                <img src="https://cdn.discordapp.com/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logo" />
            </Box>
            <ul>
                <Link to="/home" className="a"><li>Home</li></Link>
                <Link to="/posts" className="a"><li>Posts</li></Link>
                <Link to="/temas" className="a"><li>Temas</li></Link>
                <Link to="/sobre" className="a"><li>Sobre</li></Link>
                <Link to="/contato" className="a"><li>Contato</li></Link>
                <Link to="/" className="a" onClick={goLogout}><li>Logout</li></Link>
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