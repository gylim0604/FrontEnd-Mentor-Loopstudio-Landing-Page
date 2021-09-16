import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '1024px',
    lg: '1400px',
    xl: '2100px',
});
const Heading = {
    baseStyle: {
        textTransform: 'uppercase', // Normally, it is "semibold"
        fontWeight: '300',
    },
};
const Container = {
    baseStyle: {
        px: '1.25rem',
    },
};

const theme = extendTheme({
    breakpoints,
    components: {
        Container,
        Heading,
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontSize: '15px',
                fontWeight: '400',
                background: 'white',
                boxSizing: 'border-box',
                overflowX: 'hidden',
            },
        },
    },
    colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)',
    },
    fonts: {
        heading: 'Josefin Sans',
        body: 'Alata',
    },
    sizes: {
        container: {
            sm: '640px',
            md: '1000px',
            lg: '1400px',
            // xl: '1280px',
        },
    },
});

export default theme;
