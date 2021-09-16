import { Img } from '@chakra-ui/image';
import {
    Box,
    Container,
    Flex,
    Text,
    HStack,
    Stack,
    Link,
} from '@chakra-ui/layout';
import React from 'react';
import { Facebook, Instagram, Pintrest, Twitter, Instagram2 } from './Icons';
import NavLink from './NavLink';

function Footer() {
    return (
        <Box bg='black'>
            <Container
                color='white'
                mt={{ lg: '10rem' }}
                py={{ base: '4rem', md: '3rem' }}
                maxW={{
                    md: 'container.md',
                    lg: 'container.lg',
                }}
                d='flex'
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent={{ md: 'space-between' }}
            >
                <Flex
                    flexDir={{ base: 'column' }}
                    alignItems={{ base: ' center', md: 'baseline' }}
                >
                    <Img src='/images/logo.svg' h={{ md: '29px' }} />
                    <Stack
                        p={{ base: '2rem', md: '0' }}
                        pt={{ md: '1rem' }}
                        direction={{ base: 'column', md: 'row' }}
                        textAlign='center'
                        spacing='1rem'
                        mx='0'
                    >
                        <NavLink>About</NavLink>
                        <NavLink>Careers</NavLink>
                        <NavLink>Events</NavLink>
                        <NavLink>Products</NavLink>
                        <NavLink>Support</NavLink>
                    </Stack>
                </Flex>
                <Flex
                    flexDir={{ base: 'column' }}
                    alignItems={{ base: ' center', md: 'end' }}
                >
                    <HStack
                        spacing='1rem'
                        mt={{ base: '1.5rem', md: '0' }}
                        mb={{ base: '.75rem', md: '0' }}
                    >
                        <Facebook />
                        <Twitter />
                        <Pintrest />
                        <Instagram />
                    </HStack>

                    <Text
                        color='darkGray'
                        py={{ base: '1rem', md: '0' }}
                        pt={{ md: '1rem' }}
                    >
                        © 2021 Loopstudios. All rights reserved.
                    </Text>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;
