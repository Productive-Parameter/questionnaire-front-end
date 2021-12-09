import React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';

export default function Check(props){

    const { kysymys, muutaVastaus } = props;

    return(
        <Box sx={{marginBottom: 2}}>
        <FormLabel sx={{fontSize:'inherit',  color:'black'}}>{kysymys.teksti}</FormLabel>
        
        <FormGroup row > 
        <FormControl
        
        required
        >
            {kysymys.monivalintavaihtoehdot.map((vaihtoehto, i) => {
                return (
                    <FormControlLabel key={i}  control={<Checkbox  onChange={e => muutaVastaus(e, kysymys.id)}  />} label={vaihtoehto.monivalintavaihtoehto} />
                )                                                                                                                                                                                                                                   
            })}
        </FormControl>                
        </FormGroup>
        </Box>) 
}