import { Container, Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Hero() {
    return (
        <Container d='flex' position='relative' h='100%'>
            <Heading
                position='absolute'
                bottom='50%'
                // left and right to be relative to container padding
                left='1.25rem'
                right='1.25rem'
                // One word per line
                d='table-caption'
                color='white'
                p='1.5rem'
                border='2px white solid'
            >
                Immersive experiences that deliver
            </Heading>
        </Container>
    );
}

export default Hero;
