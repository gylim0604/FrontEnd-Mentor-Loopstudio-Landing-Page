import { Box } from '@chakra-ui/react';
import React from 'react';
import Hero from './Hero';
import Nav from './Nav';

function Header() {
    return (
        <Box
            bgImage={{
                base: 'url("/images/mobile/image-hero.jpg")',
                md: 'url("/images/desktop/image-hero.jpg")',
            }}
            h='100vh'
            bgRepeat='no-repeat'
            bgSize='cover'
        >
            <Nav />
            <Hero />
        </Box>
    );
}

export default Header;
