import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Footer = () => {
    return (
        <footer>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="#">
                    MONIQQ
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}

export default Footer
