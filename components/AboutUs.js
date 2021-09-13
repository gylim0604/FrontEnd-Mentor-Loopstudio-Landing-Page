import { Img } from '@chakra-ui/image';
import { Container, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';

function AboutUs() {
    return (
        <Container d='flex' flexDir='column' textAlign='center' py='2rem'>
            <Img
                my='2rem'
                src='/images/mobile/image-interactive.jpg'
                alt='man wearing VR headset'
            />
            <Box px='1.25rem'>
                <Heading>The leader in interactive VR</Heading>
                <Text color='darkGray' lineHeight='1.75rem'>
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
