import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';

function Card({ imgMobile, imgDesktop, title }) {
    return (
        <Box
            position='relative'
            h='120px'
            bgImg={{ base: `url(${imgMobile})`, lg: `url(${imgDesktop})` }}
            bgSize={{ base: '100%' }}
            bgPosition={{ base: 'center' }}
            bgRepeat='no-repeat'
            _after={{
                bg: 'rgba(0,0,0,.4)',
                content: '""',
                position: 'absolute',
                inset: '0',
                zIndex: '1',
            }}
        >
            <Heading
                as='h3'
                color='white'
                position='absolute'
                bottom='1rem'
                left='1rem'
                fontSize='1.5rem'
                zIndex='2'
            >
                {title}
            </Heading>
        </Box>
    );
}

export default Card;
