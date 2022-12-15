import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        // <Grid container direction='row' justifyContent='center' alignItems='center' className='container'>
        //     <Grid item xs={6} className='imagem2'></Grid>
        //     <Grid item xs={6} alignItems='center'>
        //         <Box paddingX={10}>
        //             <form onSubmit={onSubmit}>
        //                 <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>
        //                 <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
        //                 <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
        //                 <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' type='password' margin='normal' fullWidth />
        //                 <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarsenha' label='confirmar senha' variant='outlined' name='confirmarsenha' margin='normal' type='password' fullWidth />
        //                 <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />

        //                 <Box marginTop={2} textAlign='center'>
        //                     <Link to='/login' className='text-decorator-none'>
        //                         <Button variant='contained' color='secondary' className='btnCancelar'>
        //                             Cancelar
        //                         </Button>
        //                     </Link>
        //                     <Button type='submit' variant='contained' color='primary'>
        //                         Cadastrar
        //                     </Button>
        //                 </Box>
        //             </form>
        //         </Box>
        //     </Grid>

        // </Grid>
        <Box className='container'>
            <Box className='signup'>
                <Box className='contatoArea'>
                    <h2>Cadastre-se</h2>
                    <h3>E transforme sua qualidade de ensino</h3>
                    <form onSubmit={onSubmit}>
                        <div className='inputArea'>
                            <div className='circle'></div>
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        </div>
                        <div className='inputArea'>
                            <div className='circle'></div>
                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        </div>

                        <div className='inputArea'>
                            <div className='circle'></div>
                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' type='password' margin='normal' fullWidth />
                        </div>
                        <div className='inputArea'>
                            <div className='circle'></div>
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarsenha' label='confirmar senha' variant='outlined' name='confirmarsenha' margin='normal' type='password' fullWidth />
                        </div>
                        <div className='inputArea'>
                            <div className='circle'></div>
                            <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />
                        </div>
                        <Box marginTop={2} textAlign='center' className='cadastroControler'>
                            <Link to='/login' className='text-decorator-none'>
                                <div className='btnCancelar'>
                                    CANCELAR
                                </div>
                            </Link>
                            <Button type='submit' variant="contained" className='button'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
            <div className="fundoPreto">
                <img src="https://cdn.discordapp.com/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" />
            </div>
            <div className="imagemCadastro">
                <img src="https://errejotanoticias.com.br/wp-content/uploads/2021/08/dia-do-estudante.jpg" alt="" />
            </div>
        </Box>
    )
}

export default CadastroUsuario;