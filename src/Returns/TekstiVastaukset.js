import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Tilastot from '../Returns/Tilastot';
import { PieChart, BarChart, Pie, Bar, 
    Cell, LabelList, XAxis, YAxis, CartesianGrid, Label } from 'recharts';


export default function TekstiVastaukset(props) {
    const [kysely, setKysely] = React.useState(props)
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
                            return( vastaus.kysymys.id === kysymys.id ? <ListItem  key={vastaus.id}><ListItemText primary={vastaus.vastaus}/></ListItem > :null  ) 
                            
                            } )}
                            <Divider/>
                            
                            </ListSubheader>
                            
                        
                        </List>
                                         
                        )
                })} 
            </ListSubheader>
        </List>)
}