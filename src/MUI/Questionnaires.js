import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Button} from "@mui/material";
import Vastauslomake from './Vastauslomake';


export default function Questionnaires() {
    const [questionnaires, setQuestionnaires] = useState([]);

    useEffect(() => fetchData(), []);
    const url = 'http://localhost:8080/api/kyselies'    

    // haetaan kaikki kyselyt
    const fetchData = () => {
        fetch(url) // testidata
        .then(response => response.json())
        .then(data => {
            
            console.log("KYSELYN 0 NIMI " + data._embedded.kyselies[0].nimi)    
            console.log("KYSYMYS 0 TEKSTI " + data._embedded.kyselies[0].kysymys[0].teksti)
            setQuestionnaires(data._embedded.kyselies)
            console.log(questionnaires)
        }
            ) // vaihdetaan jotain tilalle oikeat jutut    

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
             {questionnaires.map(name => {
                return (
                    <Grid item xs={3}>

                    {/* item tekstikenttään tulee kyselyn nimi  */}
                    <Item>{name.nimi}   
                    
                    {/* vastauslomakekomponentille lähetetään parametreiksi/propseiksi kunkin kyselyn kysymyksen api  */}
                    <Vastauslomake params={(name._links.kysymykset)} nimi={name.nimi} />
                    
                    </Item>
                    </Grid>
                )    
             })}
            </Grid>
        </div>
    );
}