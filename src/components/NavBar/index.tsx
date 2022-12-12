import React from 'react';
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './style.css';

const navigationLinks = [
    {name: 'Posts', href: ''},
    {name: 'Perfil', href: ''},
    {name: 'Sobre', href: '/sobre'},
    {name: 'Contato', href: '/contato'},
    {name: 'Login', href: '/login'}
]

function Navbar() {
    return (
        <>
            <AppBar position="fixed" className='static'>
                <Box className='header'>
                    <Box className="cursor" >
                        <img src="https://cdn.discordapp.com/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logo"/>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        {navigationLinks.map((item) => (
                            <Box mx={1} className="cursor cursor2">
                                <Typography color="inherit">
                                    <a href={item.href} className="a">{item.name}</a>
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <TextField className='input' placeholder='pesquisar'/>
                </Box>
            </AppBar>
        </>
    )
}

export default Navbar;