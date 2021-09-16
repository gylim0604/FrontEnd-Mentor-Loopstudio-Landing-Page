import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';

// function Card({ imgMobile, imgDesktop, title }) {

function Card(props) {
    let { imgMobile, imgDesktop } = props;
    return (
        <Box
            position='relative'
            bgImg={{ base: `url(${imgMobile})`, md: `url(${imgDesktop})` }}
            bgSize={{ base: '100%', md: '100%' }}
            bgPosition={{ base: 'center' }}
            bgRepeat='no-repeat'
            color='white'
            // some magical wait to maintain aspect ration
            // 450/256 = 1/757
            h={{ base: '120px', md: '0' }}
            pt={{ md: '175.7%' }}
            overflow={{ md: 'hidden' }}
            // mask thingy
            _after={{
                bg: 'rgba(0,0,0,.4)',
                content: '""',
                position: 'absolute',
                inset: '0',
                zIndex: '1',
            }}
            _hover={{
                cursor: 'pointer',
                _after: {
                    bg: 'rgba(255,255,255,.7)',
                    content: '""',
                    position: 'absolute',
                    inset: '0',
                    zIndex: '1',
                },
                color: 'black',
            }}
        >
            <Heading
                as='h3'
                position='absolute'
                bottom={{ base: '1rem', md: '1.5rem', lg: '2.5rem' }}
                left={{ base: '1rem', md: '1.5rem', lg: '2.5rem' }}
                fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2.5rem' }}
                zIndex='2'
                textAlign='left'
            >
                {props.children}
            </Heading>
        </Box>
    );
}

export default Card;
