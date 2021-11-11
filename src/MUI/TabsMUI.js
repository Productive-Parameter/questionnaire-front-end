import React from "react";
import { Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';



export default function TabsMUI() {

const useStyles = makeStyles({
    tab: {
        color: '#d3d3d3',
        '&:active': {
            color: '#FFFFFF',
        },
        
    }
});

const [tab, setTab] = React.useState('one');

const tabChange = (event, value) =>{
    setTab(value)
}

const classes = useStyles();

    return (
        <Tabs value = {tab} onChange={tabChange}>
            <Tab className={ classes.tab } value='one' label='Etusivu' component={ Link } to='/' />
            <Tab className={ classes.tab } value='two' label='Kyselyt' component={ Link } to='/kyselyt'/>
            <Tab className={ classes.tab } value='three' label='Raportointi' component={ Link } to='/raportointi'/>
        </Tabs>
    );
}