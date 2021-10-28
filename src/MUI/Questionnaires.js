import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function Questionnaires() {
    const [questionnaires, setQuestionnaires] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('apiosoite')
        .then(response => response.json())
        .then(data => setQuestionnaires(data.jotain)) // vaihdetaan jotain tilalle oikeat jutut
    }

    const columns = [
        {
            headerName: "Nimi?",
            field: "questionnaire?"
        },
        {
            headerName: "Päiväys?",
            field: "date?"
        }
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