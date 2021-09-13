import { Container, Box, Img, IconButton } from '@chakra-ui/react';
import React from 'react';
import { Close, Hamburger } from '../Icons';
import { useState } from 'react';

function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <Container d='flex' justifyContent='space-between'>
            <Img src='/images/logo.svg' />
            <Box as='span'>
                <IconButton
                    icon={open ? <Close /> : <Hamburger />}
                    variant='ghost'
                    onClick={() => setOpen(!open)}
                    _hover={{}}
                    _focus={{}}
                />
            </Box>
            <Box d={{ base: 'none', lg: 'block' }} as='span'>
                About Careers Events Products Support
            </Box>
        </Container>
    );
}

export default Nav;
