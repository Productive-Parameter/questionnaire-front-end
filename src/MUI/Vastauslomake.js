import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button, Dialog, DialogTitle, Box} from "@mui/material";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormControl from '@mui/material/FormControl';

import Teksti from '../Returns/Teksti';
import Skaala from '../Returns/Skaala';
import Check from '../Returns/Check';
import RadioValinta from '../Returns/RadioValinta';

export default function Vastauslomake(props) {

    const [kysymykset, setKysymykset] = useState([])
    const [vastaukset, setVastaukset] = useState([])
    const [kysely, setKysely] = useState(props.kysely)
    const [open, setOpen] = useState(false)

   const vastaa = (props) => {
        console.log("POST")
        console.log(props)

        const postOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json',
                        'Content-Type': 'application/json' },
            body: JSON.stringify(props)
        };
        fetch("https://kyselypalvelu.herokuapp.com/api/vastaukset", postOptions )
        .catch(err=>console.log(err))
    }

    const iterVastaukset = () => {
        
        console.log(kysely.vastaukset)
        console.log(vastaukset)
        setKysely(
            kysely.vastaukset = vastaukset
        )
        console.log(kysely);
        vastaa(kysely) 
        setOpen(false)                 
    }

    const muutaVastaus = (e, kysymysid) => {
        setVastaukset({...vastaukset, [kysymysid]: e.target.value})
        console.log(vastaukset)
       }

    const suljeKysely = () =>{
        setOpen(false)
    }

    const haeEsimerkkikysymys = () =>{
        console.log(props.kysely)
        alert('Ei vielä käytössä')        
    }

    const vastaaKysymyksiin = () =>{
        setKysymykset(props.kysely.kysymykset)
        setOpen(true)
    }
    
    return (
        <Box>
            <Button endIcon={<FormatAlignJustifyIcon color="info" />}   onClick={()=>haeEsimerkkikysymys()} color="info">Näytä kysymykset</Button>
            <Button endIcon={<SendIcon />} color='success' onClick={()=>vastaaKysymyksiin()}>Vastaa</Button>

            <Dialog open={open} onClose={suljeKysely} maxWidth="lg" >
                <DialogTitle sx={{fontSize:'2rem', fontWeight: 'bold', color:'#0d0778'}}>{props.kysely.nimi}</DialogTitle>
                <FormControl component="fieldset" sx={{marginLeft: 2, marginRight: 2}}>
                {kysymykset.map((kysymys,i) => {
                    switch (kysymys.tyyppi){
                        case 'teksti': 
                            return( <Teksti key={i} kysymys={kysymys} muutaVastaus={muutaVastaus}/> )
                        case 'skaala':
                            return(<Skaala key={i} kysymys={kysymys} muutaVastaus={muutaVastaus}/>)
                        case 'check':
                            return(<Check key={i} kysymys={kysymys} muutaVastaus={muutaVastaus}/>)
                        case 'radio':
                            return(<RadioValinta  key={i} kysymys={kysymys} muutaVastaus={muutaVastaus}/>)
                        default:
                            console.log(`Jonkun kysymyksen tyyppiä ei voitu lukea `)
                            break;
                    }})}
            <Box sx={{ '& button': { m: 1 }, justifyContent: 'center' } }>
            <Button variant="contained" color="success" onClick={iterVastaukset} sx={{marginBottom: 0.4}} >Lähetä kysely</Button>
            <Button variant="contained" color="info"  onClick={suljeKysely} sx={{marginBottom: 1.5}} >Sulje kysely</Button>
            </Box >
            </FormControl>
            </Dialog>
        </Box> )}