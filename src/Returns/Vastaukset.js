import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Button, Dialog, DialogTitle, Box, appBarClasses} from "@mui/material";


export default function Vastaukset(){
    
    const url = 'https://kyselypalvelu.herokuapp.com/api/kyselyt'    
    const [kyselyt, setKyselyt] = React.useState([]);

    const fetchData = () => {
        fetch(url) // testidata
        .then(response => response.json())
        .then(data => {
            setKyselyt(data)
        }
            )
        .catch(err=>console.log(err));  
    }

    React.useEffect(() => {
        fetchData()
        }
     ,[])
    

    
    console.log(kyselyt)

    return (
        <div >
            {kyselyt.map((kysely, i) => {
                return (
                <div>
                <h2 key={kysely.id}> {kysely.nimi} </h2>
                    <ul>
                        {kysely.kysymykset.map((kysymys,i) => {
                            return(
                                <div>
                                    <li key={kysymys.id}>{kysymys.teksti}</li>
                                    <ul> 
                                    {kysely.vastaukset.map((vastaus,i) => {
                                    return( vastaus.kysymys.id === kysymys.id ? <li key={vastaus.id}> {vastaus.vastaus}</li>:null ) 
                                    } )}
                                    
                                    </ul>    
                                </div>)
                        })} 
                    </ul>
                </div>)
            })}

        </div>
        
          )
        }
    
