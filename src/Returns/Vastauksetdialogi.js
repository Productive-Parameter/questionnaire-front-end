import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, Box} from "@mui/material";
import FormControl from '@mui/material/FormControl';


export default function Vastausdialogi(kysely){

    const [open, setOpen] = useState(false)
    const suljeKysely = () =>{
        setOpen(false)
    }
    return (
        
        <Box>
            <Dialog open={open} onClose={suljeKysely} maxWidth="lg" >
                <DialogTitle sx={{fontSize:'2rem', fontWeight: 'bold', color:'#0d0778'}}>{kysely.nimi}</DialogTitle>
                <FormControl component="fieldset" sx={{marginLeft: 2, marginRight: 2}}>
            
            <Box sx={{ '& button': { m: 1 }, justifyContent: 'center' } }>
           
            <Button variant="contained" color="info"  onClick={suljeKysely} sx={{marginBottom: 1.5}} >Sulje kysely</Button>
            </Box >
            </FormControl>
            </Dialog>
        </Box> 
    )

}