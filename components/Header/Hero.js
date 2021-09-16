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
            <Box pos='relative' top='-10%' border='2px white solid' w='100%'>
                <Heading
                    // One word per line
                    d='table-caption'
                    w='min-content'
                    color='white'
                    p='1.5rem'
                >
                    Immersive experiences that deliver
                </Heading>
            </Box>
        </Container>
    );
}

export default Hero;
