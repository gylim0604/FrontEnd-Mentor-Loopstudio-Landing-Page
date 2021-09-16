import { Container, Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Hero() {
    return (
        <Container
            d='flex'
            position='relative'
            h='100%'
            alignItems='center'
            maxW={{
                md: 'container.md',
                lg: 'container.lg',
            }}
        >
            <Box
                pos='relative'
                top='-10%'
                border='2px white solid'
                w={{ base: '100%', md: '50%' }}
            >
                <Heading
                    // One word per line
                    d='table-caption'
                    w={{ base: 'min-content', md: '100%' }}
                    color='white'
                    p='1.5rem'
                    fontSize={{ md: '3rem' }}
                >
                    Immersive experiences that deliver
                </Heading>
            </Box>
        </Container>
    );
}

export default Hero;
