import React, {useEffect, useState} from "react";
import Palkkikaavio from "./Palkkikaavio";
import Piirakkakaavio from "./Piirakkakaavio";

export default function Tilastot() {
    const [colors, setColors] = useState([]);
    
    /* hidastaa animaatioita, joten ehkä kymmenen värin tms. 
    vakiopaletti olisi parempi ratkaisu? Nämä joko raportointisivu ladattaessa
    tai kaaviokomponenttien itsensä sisällä, jos tehdään randomilla. */
    useEffect(() => {
        let i = 0;
        while (i < 10) {
            const color = Math.floor(Math.random()*16777215).toString(16);
            const colorString = `#${color}`;
            i++;
            setColors(colors => [...colors, colorString
            ])
        }
    }, []);

    /* testidata, jokainen solu tarvitsee nimen(tms. labelin) ja arvon,
    tätä vastaava data propsina kysymyksistä */
    const data = [
            { name: 'Ei kiinnosta', value: 2 },
            { name: 'Ei kiinnosta paljoa', value: 3 },
            { name: 'Kiinnostaa', value: 4 },
            { name: 'Kiinnostaa paljon', value: 5 },
          ];

    /* customoidaan käytettyyn palettiin, jos käytetään vakituista.
    Kymmenen riittää varmaankin vaihtoehdoiksi, 20 ainakin. Joko raportointi-
    sivulla ja propsina kaaviokomponenteille, tai niiden itsensä sisällä */
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    

    // mappaukset tarvitaan vain jos halutaan eri värit, datan mappaa automaattisesti
    return(
        <div style={{paddingLeft: 10}}>
            <Piirakkakaavio data={data} colors={colors} />
            <br/>
            <Palkkikaavio data={data} colors={colors} />
        </div>
    )
}