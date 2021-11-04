import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Button, Dialog, TextField, DialogActions, DialogTitle } from "@mui/material";
import Box from '@mui/material/Box';

export default function Vastauslomake(props) {

    const [kysymykset, setKysymykset] = React.useState([])
    const [open, setOpen] = React.useState(false)

    // hakee oleellisen kyselyn kysymykset
    const haeKysymykset = () =>{
        fetch(props.params.href)
        .then(response => response.json())
        .then(data=> {
            console.log('fetch data alla:')
            console.log(data._embedded.kysymyses)
            setKysymykset(data._embedded.kysymyses)
        
        })
        .then(setOpen(true))
    }

    const suljeKysely = () =>{
        
        setOpen(false)
    }

    return (
        
        <Box>
            <Button endIcon={<SendIcon />} color='success' onClick={()=>haeKysymykset()}>Näytä kysymykset</Button>
            <Dialog open={open} onClose={suljeKysely}>
                <DialogTitle sx={{fontSize:'2rem', fontWeight: 'bold', color:'#0d0778'}}>{props.nimi}</DialogTitle>
                {kysymykset.map(kysymys => {  
                return(
                    <TextField
                    sx={{color:'black'}}
                    label={kysymys.teksti}
                    margin= 'dense'
                    fullWidth
                />
                ) 
            })}
            <DialogActions>
            <Button onClick={suljeKysely}>Sulje kysely</Button>
            </DialogActions>
            </Dialog>
        </Box>
    )
}