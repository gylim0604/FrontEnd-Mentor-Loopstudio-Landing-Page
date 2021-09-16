import { Img } from '@chakra-ui/image';
import { Container, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';

function AboutUs() {
    return (
        <Container
            d='flex'
            flexDir='column'
            textAlign='center'
            pt='3.5rem'
            maxW={{
                md: 'container.md',
                lg: 'container.lg',
            }}
            pos='relative'
            mt={{ lg: '7rem' }}
        >
            <Box as='picture'>
                <Box
                    as='source'
                    media='(min-width: 1024px)'
                    srcSet='/images/desktop/image-interactive.jpg'
                />
                <Img
                    my={{ base: '2.5rem', md: '0' }}
                    src='/images/mobile/image-interactive.jpg'
                    alt='man wearing VR headset'
                    w={{ base: '100%' }}
                    h={{ base: 'auto' }}
                    maxW={{ md: '731px', lg: '70%' }}
                />
            </Box>

            <Box
                // paddings
                px={{ base: '1.25rem', md: '0' }}
                pl={{ md: '5rem', lg: '7rem' }}
                pt={{ md: '5rem', lg: '7rem' }}
                // positioning when non mobile
                pos={{ md: 'absolute' }}
                bg={{ md: 'white' }}
                maxW={{ md: '550px', lg: '45%' }}
                bottom='0'
                right='1.25rem'
                // border='1px solid black'
                textAlign={{ md: 'left' }}
            >
                <Heading
                    fontSize={{ base: '2rem', md: '2.5rem', lg: '3.5rem' }}
                    lineHeight={{ base: '2rem', md: '2.9rem', lg: '3.5rem' }}
                    mb={{ md: '1rem', lg: '2rem' }}
                >
                    The leader in interactive VR
                </Heading>
                <Text
                    color='darkGray'
                    lineHeight={{
                        base: '1.75rem',
                        md: '1.5rem',
                        lg: '1.75rem',
                    }}
                >
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </Text>
            </Box>
        </Container>
    );
}

export default AboutUs;
