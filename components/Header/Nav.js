import {
    Container,
    Box,
    Img,
    IconButton,
    UnorderedList,
    ListItem,
    Link,
    HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Close, Hamburger } from '../Icons';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';

function Nav() {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    return (
        <Container
            d='flex'
            justifyContent='space-between'
            position='relative'
            zIndex='2000'
            pt={{ base: '2.5rem', lg: '5rem' }}
            alignItems='center'
            maxW={{
                md: 'container.md',
                lg: 'container.lg',
            }}
        >
            <Img src='/images/logo.svg' h='32px' />
            <IconButton
                icon={isOpen ? <Close /> : <Hamburger />}
                variant='ghost'
                onClick={onToggle}
                _hover={{}}
                _focus={{}}
                d={{ md: 'none' }}
            />
            <Modal isOpen={isOpen} onClose={onClose} size='full'>
                <ModalOverlay />
                <ModalContent bg='black' color='white'>
                    <ModalBody d='flex' alignItems='center' px='0'>
                        <Container>
                            <UnorderedList
                                textTransform='uppercase'
                                listStyleType='none'
                                spacing='2rem'
                                fontFamily='Josefin Sans'
                                fontSize='1.75rem'
                                m='0'
                                // fontWeight='300'
                            >
                                <ListItem>
                                    <Link>About</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Careers</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Events</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Products</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Support</Link>
                                </ListItem>
                            </UnorderedList>
                        </Container>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Box d={{ base: 'none', md: 'block' }} as='span'>
                <HStack m='0' color='white' spacing='2rem' fontWeight='400'>
                    <Link>About</Link>

                    <Link>Careers</Link>

                    <Link>Events</Link>

                    <Link>Products</Link>

                    <Link>Support</Link>
                </HStack>
            </Box>
        </Container>
    );
}

export default Nav;
