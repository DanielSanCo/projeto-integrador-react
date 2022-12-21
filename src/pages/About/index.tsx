import React, { useState, useEffect } from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';
import { Collections } from '@mui/icons-material';
import { integrantes } from '../../utils/integrantes';

const About = () => {

    return (
        <Box className='container-About' data-aos="fade-up">
            <Box className='our-mission'>
                <Box>
                    <Typography variant='h4'>Nossa Missão</Typography>
                    <Box>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sequi aperiam. Dolorum libero, quam nostrum, repudiandae minus numquam voluptatibus illo eveniet in ea nam saepe quibusdam exercitationem voluptas facere ratione!</Box>
                </Box>
                <Box>
                    <img src="./images/imagens/ensino.jpg" alt="" />
                </Box>
            </Box>
            <Box className='our-mission'>
                <Box>
                    <img src="./images/imagens/projetoMake.jpg" alt="" />
                </Box>
                <Box>
                    <Typography variant='h4'>Nossa História</Typography>
                    <Box>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sequi aperiam. Dolorum libero, quam nostrum, repudiandae minus numquam voluptatibus illo eveniet in ea nam saepe quibusdam exercitationem voluptas facere ratione!</Box>
                </Box>
            </Box>
            <Box className='integrantes'>
                <Box className='integranteaTitulo'><h2>Integrantes</h2></Box>
                {integrantes.map((item, index) => (
                    <>
                        {
                            item.id % 2 == 0 ?
                                <Box className='eachIntegrante'>
                                    <Box>
                                        <img src={item.img} alt="" />
                                    </Box>
                                    <Box className='eachIntegranteInfo'>
                                        <Box>{item.name}</Box>
                                        <Box>{item.descricao}</Box>
                                        <Box className='memberCurriculo'>
                                            curriculo
                                        </Box>
                                    </Box>
                                </Box>
                                :
                                <Box className='eachIntegrante'>

                                    <Box className='eachIntegranteInfo'>
                                        <Box>{item.name}</Box>
                                        <Box>{item.descricao}</Box>
                                        <Box className='memberCurriculo'>
                                            curriculo
                                        </Box>
                                    </Box>

                                    <Box>
                                        <img src={item.img} alt="" />
                                    </Box>
                                </Box>
                        }
                    </>
                ))}
            </Box>
            <script src="bower_components/aos/dist/aos.js"></script>
        </Box>
    )
}

export default About;