import React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Check(props){

    const {kysymys} = props;
    const vaihtoehdot = kysymys.vaihtoehdot;

    return(
        <Box sx={{marginBottom: 2}}>
        <FormLabel sx={{fontSize:'inherit',  color:'black'}}>{kysymys.teksti}</FormLabel>
        <FormGroup row>     
            {vaihtoehdot.map((vaihtoehto, i) => {
                return (<FormControlLabel key={vaihtoehto.id} onChange={e => props.muutaVastaus(e, kysymys.id)}  control={<Checkbox defaultChecked />} label={vaihtoehto.vaihtoehto} />)
            })}                      
        </FormGroup>
        </Box>) 
}