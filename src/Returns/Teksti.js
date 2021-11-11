import {TextField, Box } from "@mui/material";

export default function Teksti(props){
    return (
        <Box sx={{marginBottom: 2}}>
                <TextField
                required = {props.kysymys.pakollinen ===true}
                multiline
                label={props.kysymys.teksti}
                margin= 'dense'
                fullWidth
                inputProps = {{style:{color:'black'}}}
                onChange={e => props.muutaVastaus(e, props.kysymys.id)}
                InputLabelProps={{
                    // shrink: true
                }}/>
         </Box>)  
    
}