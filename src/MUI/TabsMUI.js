import React from "react";
import { Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    tab: {
        color: '#d3d3d3',
        '&:active': {
            color: '#FFFFFF',
        },
    }
});

export default function TabsMUI() {

    const classes = useStyles();

    return (
        <Tabs >
            <Tab className={ classes.tab } label='Etusivu' component={ Link } to='/' />
            <Tab className={ classes.tab } label='Kyselyt' component={ Link } to='/'/>
            <Tab className={ classes.tab } label='Raportointi' component={ Link } to='/'/>
        </Tabs>
    );
}