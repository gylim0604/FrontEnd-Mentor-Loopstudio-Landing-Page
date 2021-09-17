import React from 'react';
import { Link } from '@chakra-ui/layout';
const NavLink = (props) => {
    return (
        <Link
            pos='relative'
            _hover={{
                _after: {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                    transitionDelay: '0ms',
                },
            }}
            _after={{
                content: '""',
                position: 'absolute',
                bottom: '-7.5px',
                right: '25%',
                left: '25%',
                borderBottom: '2px solid white',
                transform: 'scaleX(0)',
                transformOrigin: 'right',
                transition: 'transform 200ms ease-in-out',
                transitionDelay: '200ms',
            }}
        >
            {props.children}
        </Link>
    );
};

export default NavLink;
