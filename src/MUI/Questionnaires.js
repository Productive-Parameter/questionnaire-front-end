import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function Questionnaires() {
    const [questionnaires, setQuestionnaires] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://kyselypalvelu.herokuapp.com/api/kyselies/1') // testidata
        .then(response => response.json())
        .then(data => setQuestionnaires(data.nimi))
        .then(data => console.log(data))
    }

    // fieldit on testidataa, muutetaan myöhemmin oikeaksi
    const columns = [
        {headerName: "Nimi", field: "kyselies.nimi"},
        // {headerName: "Kysymys 1", field: ""},
        // {headerName: "Kysymys 2", field: "description"},
        // {headerName: "Kysymys 3", field: "enclosure.type"}
    ]

    return (
        <div className="ag-theme-material" style={{height: 600, margin: 'auto'}}>
            <AgGridReact
                columnDefs={columns}
                rowData={questionnaires}>
            </AgGridReact>
        </div>
    );
}