import React from "react";
import { PieChart, BarChart, Pie, Bar, 
    Cell, LabelList, XAxis, YAxis, CartesianGrid, Label} from 'recharts';

export default function Tilastot() {

    // testidata, jokainen solu tarvitsee nimen(tms. labelin) ja arvon
    const data = [
            { name: 'Ei kiinnosta', value: 2 },
            { name: 'Ei kiinnosta paljoa', value: 3 },
            { name: 'Kiinnostaa', value: 4 },
            { name: 'Kiinnostaa paljon', value: 5 },
          ];

    // customoi käytettyyn palettiin
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const customLabel = (entry) => {
        return `${entry.name}, ${entry.value} kpl, 
        ${(entry.percent * 100).toFixed(0)}%`;
    }

    // säädä väripalautus
    const randomColor = () => {
        const color = Math.floor(Math.random()*16777215).toString(16);
    }
    

    // mappaukset tarvitaan vain jos halutaan eri värit, ainakin barchartissa
    return(
        <div style={{paddingLeft: 10}}>
            <PieChart width={600} height={300}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={80} label={customLabel}
                labelLine={false} dataKey="value">
                {
                data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                    ))
                }
                </Pie>
            </PieChart>
            <br/>
            <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis dataKey="value">
            <Label value="vastausmäärä (kpl)" position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Bar dataKey="value" label>
            {
            data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} strokeWidth={index === 2 ? 4 : 1}/>
            ))
            }
            <LabelList dataKey="value" position="top" />
            </Bar>
            </BarChart>
        </div>
    )
}