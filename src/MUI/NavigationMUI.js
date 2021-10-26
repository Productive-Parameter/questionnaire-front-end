import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
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

    const handleChange = () => {

    }

    return (
        <Box className={ classes.container }>
            <Tabs onChange={handleChange}>
                <Tab label="Etusivu" />
                <Tab label="Kyselyt" />
                <Tab label="Raportit" />
            </Tabs>
        </Box>
    );
}