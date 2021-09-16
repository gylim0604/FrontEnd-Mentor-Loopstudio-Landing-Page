import React from 'react';
import { Link } from '@chakra-ui/layout';
const NavLink = (props) => {
    return (
        <Link
            pos='relative'
            _hover={{
                _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-7.5px',
                    right: '25%',
                    left: '25%',
                    borderBottom: '2px solid white',
                },
            }}
        >
            {props.children}
        </Link>
    );
};

export default NavLink;
