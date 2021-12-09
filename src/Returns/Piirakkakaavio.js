import React from "react";
import { PieChart, Pie, Cell } from 'recharts';

export default function Piirakkakaavio(props) {

    const { data, colors } = props;

    const customLabel = (entry) => {
        return `${entry.name}, ${entry.value} kpl, 
        ${(entry.percent * 100).toFixed(0)}%`;
    }

    return(
        <PieChart width={600} height={300}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={80} label={customLabel}
                labelLine={false} dataKey="value">
                {
                data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                }
                </Pie>
            </PieChart>
    )

}