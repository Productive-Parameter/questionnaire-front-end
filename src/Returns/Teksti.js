import {TextField, Box } from "@mui/material";

export default function Teksti(props){

    const kysymys = props.kysymys;
    
    return (
        <Box sx={{marginBottom: 2}}>
                <TextField
                required = {kysymys.pakollinen ===true}
                multiline
                label={kysymys.teksti}
                margin= 'dense'
                fullWidth
                inputProps = {{style:{color:'black'}}}
                onChange={e => props.muutaVastaus(e, kysymys.id)}
                InputLabelProps={{
                    // shrink: true
                }}/>
         </Box>)  
    
}