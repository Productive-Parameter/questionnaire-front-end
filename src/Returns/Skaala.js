import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function Skaala(props){
    return(
        <Box sx={{marginBottom: 2}}>
            <Typography sx={{fontSize:'inherit',  color:'black'}}>{props.kysymys.teksti}</Typography>
            <Slider
            sx={{ marginRight: 2, maxWidth: 600}}
            onChange={e => props.muutaVastaus(e, props.kysymys.id)}
            size="small"
            step={1}
            min={1}
            max={5}
    /></Box>) 
}