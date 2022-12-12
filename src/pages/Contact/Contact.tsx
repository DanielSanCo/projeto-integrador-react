import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './Contact.css';

const Contact = () => {
    return (
        <Box className='container'>
            <Box className='contact'>
                <Box className='logoArea'>
                    <img src="https://media.discordapp.net/attachments/1022847836406165517/1049075991521275924/b-removebg-preview.png" alt="" />
                </Box>
                <Box className='contatoArea'>
                    <h2>Contate-nos</h2>
                    <form>
                        <input id='nome' placeholder='Nome' name='nome' />
                        <input id='usuario' name='usuario' placeholder='E-mail' />
                        <textarea id='assunto' name='assunto' placeholder='Assunto' />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant="contained" className='button'>
                                Enviar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact;