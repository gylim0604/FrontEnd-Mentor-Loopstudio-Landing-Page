import { Icon, Box } from '@chakra-ui/react';
import React from 'react';

export function Hamburger() {
    return (
        <Box
            as='svg'
            width='24px'
            height='16px'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g fill='#FFF' fillRule='evenodd'>
                <path d='M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z' />
            </g>
        </Box>
    );
}

export function Close() {
    return (
        <Box
            as='svg'
            width='20px'
            height='20px'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z'
                fill='#FFF'
                fillRule='evenodd'
            />
        </Box>
    );
}
