import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


export default function Questionnaires() {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [gridApi, setGridApi] = React.useState(null);

    
    useEffect(() => fetchData(), []);
    

    const fetchData = () => {
        fetch('https://kyselypalvelu.herokuapp.com/api/kyselies') // testidata
        .then(response => response.json())
        .then(data => {
            
            console.log("KYSELYN NIMI " + data._embedded.kyselies[0].nimi)    
            console.log("KYSYMYS 0:N TEKSTI " + data._embedded.kyselies[0].kysymys[0].teksti)
            setQuestionnaires(data._embedded.kyselies)}
            ) // vaihdetaan jotain tilalle oikeat jutut    

    }
    
    // valuegetter, palauttaa kolumnien kysymykset 
    function kysymysGetter(params){
        const kysymykset =[params.data.kysymys]
        let loopdata =''
        let i = 0;
        while   ( i < kysymykset[0].length){
            loopdata +="Kysymys "+ (i+1)+  ": "+  kysymykset[0][i].teksti + " |||||| "
            i++
        }
        return loopdata
    }
    // asetuksia
    const gridOptions ={
        sortable: true, filter: true,  animateRows: true, resizable: true, wrapText: true, autoHeight: true, cellStyle: {'border-color': 'black', 'border': '2'}
        }
    // on grid load lataa aggrid api, jossa jotain ominaisuuksia 
    const onGridReady = (params) => {
            setGridApi(params.api);
          };
    //skaalaa gridin ladatessa, pois käytöstä atm
    const onFirstDataRendered = () => {
            gridApi.sizeColumnsToFit();
          };

    // fieldit on testidataa, muutetaan myöhemmin oikeaksi
    const columns = [
        {headerName: 'Nimi',headerClass:'header', field: 'nimi', width: 250},
        {headerName: 'Kysymykset',headerClass:'header',  valueGetter:kysymysGetter, width: 1000}
    ]
   

    return (
        <div className="ag-theme-material" style={{height: 600, margin: 'auto'}}>
            <AgGridReact
                columnDefs={columns}
                defaultColDef={gridOptions}
                rowData={questionnaires}
                onGridReady={onGridReady}
                onFirstDataRendered = {onFirstDataRendered}
            
                >
                
            </AgGridReact>
        </div>
    );
}