import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Button, Dialog, TextField, DialogActions, DialogTitle } from "@mui/material";
import Box from '@mui/material/Box';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';


export default function Vastauslomake(props) {

    const [kysymykset, setKysymykset] = React.useState([])
    const [vastaus, setVastaukset] = React.useState([])
    const [open, setOpen] = React.useState(false)

   const vastaa = (vastaus) => {
    /*    console.log("POST")
        fetch("lisää kysymyksen endpoint tähän", {method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(vastaus)
        })
        .catch(err=>console.log(err));

        */ 
        setOpen(false)
    }

    const muutaVastaus = (e, kysymysid) => {
     setVastaukset({...vastaus, [kysymysid]: e.target.value})
     console.log(vastaus)
    }
    const suljeKysely = () =>{
        setOpen(false)
    }
    const haeEsimerkkikysymys = () =>{
        console.log(props.kysely.kysymykset)
        alert('Ei vielä käytössä')
    }
    const vastaaKysymyksiin = () =>{
        setKysymykset(props.kysely.kysymykset)
        setOpen(true)
    }

    // alempi idean vaiheella
    const kysymyksenTyyppi = (kysymys) =>{
        console.log(kysymys.tyyppi)
        switch (kysymys.tyyppi) {
            case 'radio':
                return ("")
                // palauttaa radion https://mui.com/components/radio-buttons/
            case 'teksti':
                // palauttaa tekstin https://mui.com/components/text-fields/
                return(
                    <TextField
                    required = {kysymys.pakollinen ===true}
                    label={kysymys.teksti}
                    margin= 'dense'
                    fullWidth
                    inputProps = {{style:{color:'black'}}}
                    onChange={e => muutaVastaus(e, kysymys.id)}
                    InputLabelProps={{
                        shrink: true,
                    }}/>) 
            case 'check':
                return ("")
                // monivalinta https://mui.com/components/checkboxes/
            case 'skaala':
                return ("")
                // skaala https://mui.com/components/slider/
            default:
                alert("jonkun kyselyn tyyppiä ei voitu tunnistaa, eikä sitä renderoity. Komponentti Vastauslomake")
                break;
        }
    }
    
    return (
        
        <Box sx={{
            '& .MuiTextField-root': { m: 1, width: '45ch' },
          }}>
            <Button endIcon={<FormatAlignJustifyIcon />}  onClick={()=>haeEsimerkkikysymys()} color='success'>Näytä kysymykset</Button>
            <Button endIcon={<SendIcon />} color='success' onClick={()=>vastaaKysymyksiin()}>Vastaa</Button>
            <Dialog open={open} onClose={suljeKysely}>
                <DialogTitle sx={{fontSize:'2rem', fontWeight: 'bold', color:'#0d0778'}}>{props.kysely.nimi}</DialogTitle>
                {kysymykset.map(kysymys => {
                    // tarkistetaan tyyppi tässä jos if tyylillä. switchin toimivuus vaikea, mutta tein siitä jo prototyyppi function ylemmäs
                    if (kysymys.tyyppi === 'teksti'){
                        return(
                            <TextField
                            required = {kysymys.pakollinen ===true}
                            label={kysymys.teksti}
                            margin= 'dense'
                            fullWidth
                            inputProps = {{style:{color:'black'}}}
                            onChange={e => muutaVastaus(e, kysymys.id)}
                            InputLabelProps={{
                                shrink: true,
                            }}/>)  
                    }if (kysymys.tyyppi === 'skaala'){
                        return(
                            <TextField
                            required = {kysymys.pakollinen ===true}
                            label={kysymys.teksti}
                            margin= 'dense'
                            fullWidth
                            inputProps = {{style:{color:'black'}}}
                            onChange={e => muutaVastaus(e, kysymys.id)}
                            InputLabelProps={{
                                shrink: true,
                            }}/>) 
                    }if (kysymys.tyyppi === 'check'){
                        return(
                            <TextField
                            required = {kysymys.pakollinen ===true}
                            label={kysymys.teksti}
                            margin= 'dense'
                            fullWidth
                            inputProps = {{style:{color:'black'}}}
                            onChange={e => muutaVastaus(e, kysymys.id)}
                            InputLabelProps={{
                                shrink: true,
                            }}/>) 
                    }if (kysymys.tyyppi === 'radio'){
                        return(
                            <TextField
                            required = {kysymys.pakollinen ===true}
                            label={kysymys.teksti}
                            margin= 'dense'
                            fullWidth
                            inputProps = {{style:{color:'black'}}}
                            onChange={e => muutaVastaus(e, kysymys.id)}
                            InputLabelProps={{
                                shrink: true,
                            }}/>) 
                    }else{ 
                    alert("jonkun kyselyn tyyppiä ei voitu tunnistaa, eikä sitä renderoity. Komponentti Vastauslomake")
                    }
            })}
            <DialogActions>
            <Button>Lähetä kysely</Button>
            <Button onClick={suljeKysely}>Sulje kysely</Button>
            </DialogActions>
            </Dialog>
        </Box>
    )
}