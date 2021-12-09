import React from "react";
import { PieChart, BarChart, Pie, Bar, 
    Cell, LabelList, XAxis, YAxis, CartesianGrid, Label } from 'recharts';

export default function Tilastot(props) {


    console.log(props)
    const [kyselyt, setKyselyt] = React.useState(props)
    // testidata, jokainen solu tarvitsee nimen(tms. labelin) ja arvon
    const data = [
            { name: 'Ei kiinnosta', value: 2 },
            { name: 'Ei kiinnosta paljoa', value: 3 },
            { name: 'Kiinnostaa', value: 4 },
            { name: 'Kiinnostaa paljon', value: 5 },
          ];

          // tässä ei rumat värit 
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const colors = [];

    for(let i=0; i<data.length; i++){
        colors.push('#'+Math.floor(Math.random()*16777215 ).toString(16));
    }

    const customLabel = (entry) => {
        return `${entry.name}, ${entry.value} kpl, 
        ${(entry.percent * 100).toFixed(0)}%`;
    }
     
        
    const renderCustomBarLabel = ({ payload, x, y, width, height, value}) => {
        let sum = 0
        data.forEach((total, index) => {
            sum = sum + total.value
        })
        
        // prosentuaalinen määrä
        // {`${(value/sum*100).toFixed(0)}`}% 
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}  </text>;
      }; 

    

    // mappaukset tarvitaan vain jos halutaan eri värit, ainakin barchartissa
    return(
        <div style={{paddingLeft: 10, paddingTop: 10}}>
            <PieChart width={400} height={200}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={80} label={customLabel}
                labelLine={false} dataKey="value">
                {
                data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                }
                </Pie>
            </PieChart>
            <br/>
            <BarChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis dataKey="value">
            <Label value="vastausmäärä (kpl)" position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Bar dataKey="value" label label={renderCustomBarLabel}>
            {
            data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} strokeWidth={index === 2 ? 4 : 1}/>
            ))
            }
            <LabelList dataKey="value" position="top" />
            </Bar>
            </BarChart>
            </div>
    )
}
