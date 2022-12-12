import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';

const Apresentacao = () => {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    return (
        <Box className='container'>
            <Box className='hHome'>
                <h1>Bem-Vindo(a) à GENERATEDU</h1>
                <h2>A Rede Social que Gera Educação</h2>
            </Box>
        </Box>
    )
}

export default Apresentacao;