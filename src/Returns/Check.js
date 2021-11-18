import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Check(props){

    const kysymys = props.kysymys;

    return(
        <Box sx={{marginBottom: 2}}>
        <FormLabel sx={{fontSize:'inherit',  color:'black'}}>{kysymys.teksti}</FormLabel>
        <FormGroup row>                           
            <FormControlLabel onChange={e => props.muutaVastaus(e, kysymys.id)}  control={<Checkbox defaultChecked />} label="Vaihtoehto 1 valmiiks valittu" />
            <FormControlLabel  onChange={e => props.muutaVastaus(e, kysymys.id)} control={<Checkbox />} label="Vaihtoehto 2" />
        </FormGroup>
        </Box>) 
}