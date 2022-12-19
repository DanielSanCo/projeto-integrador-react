import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { addToken } from '../../store/tokens/Actions';
import './Login.css';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`auth/logar`, userLogin, setToken )
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } catch(error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        }
    }

    return (
        <Grid className='container'>
            <Box className='loginArea'>
                <form onSubmit={onSubmit}>
                    <img src="https://media.discordapp.net/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logoLogin" />
                    <h3>GENERATEDU</h3>
                    <h4>Entre na estrada do conhecimento</h4>
                    <h2>Login</h2>

                    <input type='text' id='usuario' className='input' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder='E-mail' name='usuario' />

                    <input id='senha' className='input' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder='Senha' name='senha' type='password' />

                    <Box className="entrarArea">
                        <Button className='button' type='submit'>
                            Entrar
                        </Button>
                        <Box>
                            <a href="/cadastrousuario">Cadastre-se!</a>
                        </Box>
                    </Box>
                </form>
            </Box>
            <Box className='fundoImg1'>
                <Box className='fundo-back'></Box>
                <img src="./images/imagem-login.jpg" alt="" />
            </Box>

        </Grid>
    );
}

export default Login;