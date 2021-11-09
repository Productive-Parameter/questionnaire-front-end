import React, { useEffect, useState } from 'react';
//import SendIcon from '@mui/icons-material/Send';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

//import { Button} from "@mui/material";
import Vastauslomake from './Vastauslomake';



export default function Questionnaires() {
    const [questionnaires, setQuestionnaires] = useState([]);

    useEffect(() => fetchData(), []);
    const url = 'https://kyselypalvelu.herokuapp.com/api/kyselyt'    

    // haetaan kaikki kyselyt
    const fetchData = () => {
        fetch(url) // testidata
        .then(response => response.json())
        .then(data => {
            
            console.log("KYSELYN 0 NIMI " + data[0].nimi)    
            setQuestionnaires(data)
            console.log(questionnaires)
        }
            )
        .catch(err=>console.log(err));  

    }

    // tyylittelyä Gridille
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
   
    return (
        <div>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
             {questionnaires.map(kysely => {
                return (
                    <Grid item xs={3}>

                    {/* item tekstikenttään kyselyn nimi  */}
                    <Item>{kysely.nimi}   
                    
                    {/* vastauslomakekomponentille lähetetään propseiksi kunkin kyselyn kysymyksen api  */}
                    <Vastauslomake kysely={kysely} />
                    
                    </Item>
                    </Grid>
                )    
             })}
            </Grid>
        </div>
    );
}