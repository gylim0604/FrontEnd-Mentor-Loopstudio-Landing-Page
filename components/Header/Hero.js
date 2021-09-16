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
                w={{ base: '100%', md: '50%', lg: '60%' }}
            >
                <Heading
                    // One word per line
                    d='table-caption'
                    w={{ base: 'min-content', md: '100%' }}
                    color='white'
                    p={{ base: '1.5rem', md: '2rem' }}
                    fontSize={{ base: '2.5rem', md: '3rem', lg: '5.5rem' }}
                >
                    Immersive experiences that deliver
                </Heading>
            </Box>
        </Container>
    );
}

export default Hero;
