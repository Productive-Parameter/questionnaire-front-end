import React from "react";
import { BarChart, Bar, 
    Cell, LabelList, XAxis, YAxis, CartesianGrid, Label} from 'recharts';

export default function Palkkikaavio(props) {
    const { data, colors } = props;

    return (
        <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis dataKey="value">
        <Label value="vastausmäärä (kpl)" position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
        </YAxis>
        <Bar dataKey="value" label>
        {
        data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} strokeWidth={index === 2 ? 4 : 1}/>
        ))
        }
        <LabelList dataKey="value" position="top" />
        </Bar>
        </BarChart>
    )
}