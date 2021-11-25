import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';

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
                <List
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    
                  }}
                  subheader={<ListSubheader sx={{ fontSize: 20, fontWeight: 'bold' }}>{kysely.nimi}</ListSubheader>}
                >
                
                    <ListSubheader>
                        {kysely.kysymykset.map((kysymys,i) => {
                            return(
                                <List>
                                    <ListItem  key={kysymys.id}>{kysymys.teksti}</ListItem > <Divider/>
                                    <ListSubheader> 
                                    {kysely.vastaukset.map((vastaus,i) => {
                                    return( vastaus.kysymys.id === kysymys.id ? <ListItem  key={vastaus.id}><ListItemText primary={vastaus.vastaus}/></ListItem >:null ) 
                                    } )}
                                    
                                    </ListSubheader>    
                                </List>)
                        })} 
                    </ListSubheader>
                </List>)
            })}

        </div>
        
          )
        }
    
