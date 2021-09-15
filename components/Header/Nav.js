import {
    Container,
    Box,
    Img,
    IconButton,
    UnorderedList,
    ListItem,
    Link,
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
            pt='2.5rem'
            alignItems='center'
        >
            <Img src='/images/logo.svg' h='32px' />
            <IconButton
                icon={isOpen ? <Close /> : <Hamburger />}
                variant='ghost'
                onClick={onToggle}
                _hover={{}}
                _focus={{}}
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
            <Box d={{ base: 'none', lg: 'block' }} as='span'>
                About Careers Events Products Support
            </Box>
        </Container>
    );
}

export default Nav;
