import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import TabsMUI from "./TabsMUI";

const useStyle = makeStyles({
    container: {
        display: 'flex',
        position: 'fixed',
        width: '110vw',
        height: '150px',
        justifyContent: 'center',
    },
})

export default function NavigationMUI() {

    const classes = useStyle();

    return (
        <Grid container spacing={12} className={ classes.container } >
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={10} > 
                <TabsMUI />
            </Grid>
            <Grid item xs={1} >
            </Grid>
        </Grid>
    );
}