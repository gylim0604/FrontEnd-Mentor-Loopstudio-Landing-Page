import { Container, Grid, Heading, Link } from '@chakra-ui/layout';
import React from 'react';
import Card from './Card';

function Gallery() {
    return (
        <Container
            textAlign={{ base: 'center', md: 'unset' }}
            mt='7rem'
            pt='3rem'
            maxW={{
                md: 'container.md',
                lg: 'container.lg',
            }}
            pos={{ md: 'relative' }}
        >
            <Heading
                as='h2'
                mb='3rem'
                fontSize={{ base: '2rem', md: '2.5rem', lg: '3.5rem' }}
            >
                Our creations
            </Heading>

            <Grid gap='1.5rem' gridTemplateColumns={{ md: 'repeat(4,1fr)' }}>
                <Card
                    imgMobile='/images/mobile/image-deep-earth.jpg'
                    imgDesktop='/images/desktop/image-deep-earth.jpg'
                >
                    Deep <br /> earth
                </Card>
                <Card
                    imgMobile='/images/mobile/image-night-arcade.jpg'
                    imgDesktop='/images/desktop/image-night-arcade.jpg'
                >
                    Night <br /> arcade
                </Card>
                <Card
                    imgMobile='/images/mobile/image-soccer-team.jpg'
                    imgDesktop='/images/desktop/image-soccer-team.jpg'
                >
                    Soccer <br /> team VR
                </Card>
                <Card
                    imgMobile='/images/mobile/image-grid.jpg'
                    imgDesktop='/images/desktop/image-grid.jpg'
                >
                    The <br /> grid
                </Card>
                <Card
                    imgMobile='/images/mobile/image-from-above.jpg'
                    imgDesktop='/images/desktop/image-from-above.jpg'
                >
                    From up <br />
                    above VR
                </Card>
                <Card
                    imgMobile='/images/mobile/image-pocket-borealis.jpg'
                    imgDesktop='/images/desktop/image-pocket-borealis.jpg'
                >
                    Pocket <br /> borealis
                </Card>
                <Card
                    imgMobile='/images/mobile/image-curiosity.jpg'
                    imgDesktop='/images/desktop/image-curiosity.jpg'
                >
                    The <br /> curiosity
                </Card>
                <Card
                    imgMobile='/images/mobile/image-fisheye.jpg'
                    imgDesktop='/images/desktop/image-fisheye.jpg'
                >
                    Make it <br />
                    fisheye
                </Card>
            </Grid>

            <Link
                py='.75rem'
                px='3rem'
                my='2.5rem'
                display='inline-block'
                border='black 2px solid'
                textTransform='uppercase'
                letterSpacing='5px'
                zIndex='1'
                // desktop positioning
                pos={{ base: 'relative', md: 'absolute' }}
                top={{ md: '1rem' }}
                right={{ md: '1.25rem' }}
                // Hover & animation shit
                _hover={{
                    color: 'white',
                    _after: {
                        transform: 'scaleX(1)',
                        transformOrigin: 'left',
                    },
                }}
                _after={{
                    content: '""',
                    position: 'absolute',
                    inset: '0',
                    bg: 'black',
                    zIndex: '-1',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 200ms ease-in',
                }}
            >
                See all
            </Link>
        </Container>
    );
}

export default Gallery;
