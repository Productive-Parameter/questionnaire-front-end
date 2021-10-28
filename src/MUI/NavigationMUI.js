import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import TabsMUI from "./TabsMUI";

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
        <Grid container spacing={12} className={ classes.nav } >
            <Grid item xs={2} >
            </Grid>
            <Grid item xs={7} > 
                <TabsMUI />
            </Grid>
            <Grid item xs={3} >
            </Grid>
        </Grid>
    );
}