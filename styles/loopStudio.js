import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '1400px',
    lg: '1400px',
    xl: '2100px',
});
const Heading = {
    baseStyle: {
        textTransform: 'uppercase', // Normally, it is "semibold"
    },
};
const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontSize: '15px',
                fontWeight: '300',
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
    components: {
        Heading,
    },
});

export default theme;
