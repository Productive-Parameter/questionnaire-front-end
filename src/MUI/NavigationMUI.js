import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    text: {
        color: '#FFFFFF',
    }
})

export default function NavigationMUI() {

    const classes = useStyle();

    return (
        <Box className={ classes.container }>
            <Typography className={ classes.text }>Hello world!</Typography>
        </Box>
    );
}