import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
export default function RadioValinta(props) {


    const { kysymys }= props;
    return(
        <FormControl component="fieldset">
        <FormLabel sx={{fontSize:'inherit',  color:'black'}}>{kysymys.teksti} </FormLabel>
        
        <RadioGroup row  onChange={e => props.muutaVastaus(e, kysymys.id)}  >
        {kysymys.monivalintavaihtoehdot.map((vaihtoehto, i) => {
            return (
            <FormControlLabel key = {i}  value={vaihtoehto.monivalintavaihtoehto} control={<Radio />} label={vaihtoehto.monivalintavaihtoehto} />
            )
            })}
           
        </RadioGroup>
        </FormControl>
        
        ) 
}