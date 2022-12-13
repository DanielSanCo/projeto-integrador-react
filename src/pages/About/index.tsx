import React, { useState } from 'react';
import './About.css';
import { Box } from '@mui/material';
import { Collections } from '@mui/icons-material';
import { integrantes } from '../../utils/integrantes';

const About = () => {

    return (
        <Box className='container'>
            {integrantes.map((item, index) => (
                <>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                </>
            ))}
        </Box>
    )
}

export default About;