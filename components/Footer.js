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
import { Facebook, Instagram, Pintrest, Twitter } from './Icons';

function Footer() {
    return (
        <Box bg='black'>
            <Container
                color='white'
                mt={{ lg: '10rem' }}
                py={{ base: '4rem', md: '2rem' }}
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
                    <Img src='/images/logo.svg' h={{ md: '24px' }} />
                    <Stack
                        py={{ base: '2rem', md: '1rem' }}
                        direction={{ base: 'column', md: 'row' }}
                        textAlign='center'
                        spacing='1rem'
                        mx='0'
                    >
                        <Link>About</Link>
                        <Link>Careers</Link>
                        <Link>Events</Link>
                        <Link>Products</Link>
                        <Link>Support</Link>
                    </Stack>
                </Flex>
                <Flex
                    flexDir={{ base: 'column' }}
                    alignItems={{ base: ' center', md: 'end' }}
                >
                    <HStack spacing='1rem' mt={{ base: '1.5rem', md: '0' }}>
                        <Facebook />
                        <Twitter />
                        <Pintrest />
                        <Instagram />
                    </HStack>

                    <Text color='darkGray' py={{ base: '1rem', md: '1rem' }}>
                        © 2021 Loopstudios. All rights reserved.
                    </Text>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;
