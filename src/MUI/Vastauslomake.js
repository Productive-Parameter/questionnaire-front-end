import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Button, Dialog, TextField, DialogActions, DialogTitle } from "@mui/material";
import Box from '@mui/material/Box';

export default function Vastauslomake(props) {

    const [kysymykset, setKysymykset] = React.useState([])
    const [vastaukset, setVastaukset] = React.useState([])
    const [open, setOpen] = React.useState(false)

    // hakee oleellisen kyselyn kysymykset
    const haeKysymykset = () =>{
        fetch(`https://kyselypalvelu.herokuapp.com/api/kyselyt/${props.id}`)
        .then(response => response.json())
        .then(data=> {
            console.log('fetch data alla:')
            console.log(data.kysymykset)
            setKysymykset(data.kysymykset)
        
        })
        .then(setOpen(true))
    }

    /* alla pohjaa yksittäiselle vastaamismetodille. Vastaustaulukko läpi vastaa-funktiota kutsuen?

    Eli tarvitaan vastausentity, joka on sidoksissa kysymykseen.
    { "kysymys" : 1,
      "vastaus" : "vastausteksti"
    }
    { "kysymys" : 2,
      "vastaus" : "toinen vastausteksti"}

      jne.

      ja nää tiedot haetaan sitten kyselykohtaisesti, jotta voidaan listata kaikki vastaukset
      yhteen kysymykseen jne.

    */

   /* const vastaa = (vastaus) => {
        console.log("POST")
        fetch("lisää kysymyksen endpoint tähän", {method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(vastaus)
        })
        .catch(err=>console.log(err));

        setOpen(false)
    } */

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
                    label={kysymys.teksti}
                    margin= 'dense'
                    fullWidth
                    inputProps = {{style:{color:'black'}}}
                />
                ) 
            })}
            <DialogActions>
            <Button>Lähetä kysely</Button>
            <Button onClick={suljeKysely}>Sulje kysely</Button>
            </DialogActions>
            </Dialog>
        </Box>
    )
}