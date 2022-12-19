import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import books from '../../utils/books';

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
                <Box className='titulo-home'>
                    <h1>Bem-Vindo(a) à GENERATEDU</h1>
                    <h2>A Rede Social que Gera Educação</h2>
                </Box>
                <Box className='imagem-home'>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/265/384/original/cute-happy-3d-robot-png.png" alt="" />
                </Box>
            </Box>

                <Box className='conteudos-home'>
                    <Link to="/postagem" className='link-home-content'>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                height="230"
                                image="https://projetoacademico.com.br/wp-content/uploads/2021/08/escrevendo-notebook.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Postagens
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Compartilhe suas idéias e ensinamentos, tire duvidas e melhore sua didática vendo opniões de alunos e professores.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/postagem" className='link-home-content'>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                height="230"
                                image="./images/imagens/trabalhoEquipe.gif"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Sobre
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Venha conhecer mais sobre a Generatedu e conheça também a equipe que tornou tudo isso possivel.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                    <div className='quadrado'></div>
                    {/* Terá 3 cards com links para Posts, sobre e dicas */}
                </Box>
                <Box className='livros-home'>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/9d/2019/04/22/como-voce-vai-comemorar-o-dia-do-livro-1555959523311_v2_450x450.jpg" alt="" className='lendo-livro' />
                    </div>
                    <div className='livros-img'>
                        <h2 style={{ marginTop: '100px' }}>Livros</h2>
                        <h4>Livros que expandem o conhecimento</h4>
                        <div style={{ display: 'flex' }}>
                            {books.map((item, index) => (
                                <div className='livros'>
                                    <img src={item.img} alt="" />
                                    <div>{item.nome}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Livros recomendados */}
                </Box>
                <Box className='empresas-home'>
                    <h2>Empresas</h2>
                    {/* Terá cards com empresas parceiras */}
                </Box>
            </Box>
            )
}

            export default Apresentacao;