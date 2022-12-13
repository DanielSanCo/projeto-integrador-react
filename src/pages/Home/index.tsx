import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

const Apresentacao = () => {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
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