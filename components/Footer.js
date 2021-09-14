import { Img } from '@chakra-ui/image';
import {
    Box,
    Container,
    Flex,
    ListItem,
    UnorderedList,
    Text,
    HStack,
} from '@chakra-ui/layout';
import React from 'react';
import { Facebook, Instagram, Pintrest, Twitter } from './Icons';

function Footer() {
    return (
        <Box bg='black'>
            <Container color='white' py='4rem'>
                <Flex
                    flexDir={{ base: 'column' }}
                    alignItems={{ base: ' center' }}
                >
                    <Img src='/images/logo.svg' />
                    <UnorderedList
                        py='2rem'
                        listStyleType='none'
                        textAlign='center'
                        spacing='1rem'
                        mx='0'
                    >
                        <ListItem>About</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>Events</ListItem>
                        <ListItem>Products</ListItem>
                        <ListItem>Support</ListItem>
                    </UnorderedList>
                </Flex>
                <Flex
                    flexDir={{ base: 'column' }}
                    alignItems={{ base: ' center' }}
                >
                    <HStack py='1rem' spacing='1rem'>
                        <Facebook />
                        <Twitter />
                        <Pintrest />
                        <Instagram />
                    </HStack>

                    <Text color='darkGray'>
                        © 2021 Loopstudios. All rights reserved.
                    </Text>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;
