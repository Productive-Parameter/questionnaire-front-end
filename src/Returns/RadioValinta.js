import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function RadioValinta(props) {

    const kysymys = props.kysymys;
    
    return(
        <Box sx={{marginBottom: 2}}>
        <FormLabel sx={{fontSize:'inherit',  color:'black'}}>{kysymys.teksti} </FormLabel>
        <RadioGroup row  >
            <FormControlLabel onChange={e => props.muutaVastaus(e, kysymys.id)} value="1" control={<Radio />} required = {kysymys.pakollinen ===true} label="Vaihtoehto1" />
            <FormControlLabel onChange={e => props.muutaVastaus(e, kysymys.id)} value="2" control={<Radio />} label="Vaihtoehto2" />
        </RadioGroup>
        </Box>
        ) 
}