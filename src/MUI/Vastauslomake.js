import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button, Dialog, DialogTitle, Box} from "@mui/material";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import Teksti from '../Returns/Teksti';
import Skaala from '../Returns/Skaala';
import Check from '../Returns/Check';
import RadioValinta from '../Returns/RadioValinta';
import Vastauksetdialogi from '../Returns/Vastauksetdialogi';

export default function Vastauslomake(props) {

    const [kysymykset, setKysymykset] = useState([])
    const [vastaukset, setVastaukset] = useState([])
    const [kysely, setKysely] = useState(props.kysely)
    const [open, setOpen] = useState(false)
    const [kyselyToWork, setKyselyToWork] = useState([])

    // post pyyntö 
   const vastaa = (kysely) => {
        console.log("POST")
        console.log(kysely)
        
        const postOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json',
                        'Content-Type': 'application/json' },
            body: JSON.stringify(kysely)
        };
        fetch("https://kyselypalvelu.herokuapp.com/api/vastaukset", postOptions )
        .catch(err=>console.log(err))

        // resetoidaan statet, muuten jää vanhoja vastauksia muistiin
        setVastaukset([])
        setKysely(kysely)
    }

    // muutetaan vastaukset objekti arrayksi ja asetetaan se kyselylle
    const lisaaVastaukset = () => {
        const vastausTaulukko = Object.entries(vastaukset).map(([id, vastaus]) => ({id,vastaus}));
        setKysely(kysely.vastaukset =  vastausTaulukko)
        vastaa(kysely) 
        setOpen(false)                 
    }

    // vastauksen muutokset (joka näppäiniskulla)
    const muutaVastaus = (e, kysymysid) => {
        console.log(vastaukset)
        setVastaukset({...vastaukset, [kysymysid]: e.target.value})
    }

    const suljeKysely = () =>{
        setOpen(false)
    }

    
    // näytetään kyselyn kysymykset
    const vastaaKysymyksiin = () =>{
        console.log(kysely.kysymykset)
        setKysymykset(kysely.kysymykset)
        setOpen(true)
    }

    // turha toistaseks
    const naytaTilastot = () =>{
        setKyselyToWork(kysely)
        return ( <Vastauksetdialogi kysely={kyselyToWork}/> )
    }
    
    return (
        <Box>
            <Button endIcon={<FormatAlignJustifyIcon color="info" />}   component={ Link } to='/raportointi' color="info"> Näytä vastaukset</Button>
            <Button endIcon={<SendIcon />} color='success' onClick={()=>vastaaKysymyksiin()}>Vastaa</Button>

            <Dialog open={open} onClose={suljeKysely} maxWidth="lg" >
                <DialogTitle sx={{fontSize:'2rem', fontWeight: 'bold', color:'#0d0778'}}>{kysely.nimi}</DialogTitle>
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
            <Button variant="contained" color="success" onClick={lisaaVastaukset} sx={{marginBottom: 0.4}} >Lähetä kysely</Button>
            <Button variant="contained" color="info"  onClick={suljeKysely} sx={{marginBottom: 1.5}} >Sulje kysely</Button>
            </Box >
            </FormControl>
            </Dialog>
        </Box> )}  