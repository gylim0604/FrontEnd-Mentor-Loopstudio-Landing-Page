import { Container, Grid, Heading, Link } from '@chakra-ui/layout';
import React from 'react';
import Card from './Card';

function Gallery() {
    return (
        <Container textAlign='center'>
            <Heading>Our creations</Heading>
            <Grid gap='2rem'>
                <Card
                    title='Deep earth'
                    imgMobile='/images/mobile/image-deep-earth.jpg'
                    imgDesktop='/images/desktop/image-deep-earth.jpg'
                />
                <Card
                    title='Night arcade'
                    imgMobile='/images/mobile/image-night-arcade.jpg'
                    imgDesktop='/images/desktop/image-night-arcade.jpg'
                />
                <Card
                    title='Soccer team VR'
                    imgMobile='/images/mobile/image-soccer-team.jpg'
                    imgDesktop='/images/desktop/image-soccer-team.jpg'
                />
                <Card
                    title='The grid'
                    imgMobile='/images/mobile/image-grid.jpg'
                    imgDesktop='/images/desktop/image-grid.jpg'
                />
                <Card
                    title='From up above VR'
                    imgMobile='/images/mobile/image-from-above.jpg'
                    imgDesktop='/images/desktop/image-from-above.jpg'
                />
                <Card
                    title='Pocket borealis'
                    imgMobile='/images/mobile/image-pocket-borealis.jpg'
                    imgDesktop='/images/desktop/image-pocket-borealis.jpg'
                />
                <Card
                    title='The curiosity'
                    imgMobile='/images/mobile/image-curiosity.jpg'
                    imgDesktop='/images/desktop/image-curiosity.jpg'
                />
                <Card
                    title='Make it fisheye'
                    imgMobile='/images/mobile/image-fisheye.jpg'
                    imgDesktop='/images/desktop/image-fisheye.jpg'
                />
            </Grid>

            <Link
                py='.75rem'
                px='3rem'
                my='1rem'
                display='inline-block'
                border='black 2px solid'
                textTransform='uppercase'
                fontFamily='Josefin Sans'
                fontWeight='bold'
                letterSpacing='2px'
            >
                See all
            </Link>
        </Container>
    );
}

export default Gallery;
