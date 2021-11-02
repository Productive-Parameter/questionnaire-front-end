import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function Questionnaires() {
    const [questionnaires, setQuestionnaires] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https:%2F%2Ffeeds.publicradio.org%2Fpublic_feeds%2Fsong-of-the-day%2Frss%2Frss') // testidata
        .then(response => response.json())
        .then(data => setQuestionnaires(data.items)) // vaihdetaan jotain tilalle oikeat jutut
    }

    // fieldit on testidataa, muutetaan myöhemmin oikeaksi
    const columns = [
        {headerName: "Nimi", field: "title"},
        {headerName: "Kysymys 1", field: "author"},
        {headerName: "Kysymys 2", field: "description"},
        {headerName: "Kysymys 3", field: "enclosure.type"}
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