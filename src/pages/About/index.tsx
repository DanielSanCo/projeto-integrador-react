import React, { useState } from 'react';
import './About.css';
import { Box } from '@mui/material';
import { Collections } from '@mui/icons-material';
import { integrantes } from '../../utils/integrantes';

const About = () => {

    return (
        <div className='container-About'>
            <div className='our-mission'>
                <div>
                    <h2>Nossa Missão</h2>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sequi aperiam. Dolorum libero, quam nostrum, repudiandae minus numquam voluptatibus illo eveniet in ea nam saepe quibusdam exercitationem voluptas facere ratione!</div>
                </div>
                <div>
                    <img src="./images/imagens/ensino.jpg" alt="" />
                </div>
            </div>
            <div className='our-mission'>
                <div>
                    <img src="./images/imagens/projetoMake.jpg" alt="" />
                </div>
                <div>
                    <h2>Nossa História</h2>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sequi aperiam. Dolorum libero, quam nostrum, repudiandae minus numquam voluptatibus illo eveniet in ea nam saepe quibusdam exercitationem voluptas facere ratione!</div>
                </div>
            </div>
            <div className='integrantes'>
                <div className='integranteaTitulo'><h2>Integrantes</h2></div>
                {integrantes.map((item, index) => (
                    <>
                        {
                            item.id % 2 == 0 ?
                            <div className='eachIntegrante'>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='eachIntegranteInfo'>
                                    <div>{item.name}</div>
                                    <div>{item.descricao}</div>
                                    <div className='memberCurriculo'>
                                        curriculo
                                    </div>
                                </div>
                            </div>
                :
                        <div className='eachIntegrante'>
                            
                            <div className='eachIntegranteInfo'>
                                <div>{item.name}</div>
                                <div>{item.descricao}</div>
                                <div className='memberCurriculo'>
                                    curriculo
                                </div>
                            </div>

                            <div>
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                }
                    </>
                ))}
            </div>
            {/* {integrantes.map((item, index) => (
                <>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                </>
            ))} */}
        </div>
    )
}

export default About;