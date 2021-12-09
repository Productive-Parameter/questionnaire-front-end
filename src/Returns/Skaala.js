import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function Skaala(props){
    
    const {kysymys} = props;
    console.log(kysymys)

    

    const marks = []
    {kysymys.monivalintavaihtoehdot.forEach((vaihtoehto, i) => {
        marks.push({'value': i+1, label: vaihtoehto.monivalintavaihtoehto})
    })}
    console.log(marks)
    
    return(
        <Box sx={{marginBottom: 2}}>
            <Typography sx={{fontSize:'inherit',  color:'black'}}>{kysymys.teksti}</Typography>
            <Slider
            sx={{ marginRight: 5, maxWidth: 600, marginLeft: 2}}
            onChange={e => props.muutaVastaus(e, kysymys.id)}
            size="small"
            step={1}
            min={1}
            marks={marks}                                                                          
            max={kysymys.monivalintavaihtoehdot.length}            
    /></Box>) 
}