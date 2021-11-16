import React, { useState } from "react";

export default  async function GetData(props) {

    const { url } = props;

    const [data, setData] = useState([]);
    const [msg, setMsg] = useState('');
    
    try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    } catch (error) {
        setMsg('Something went wrong!');
    }

    if (msg.length > 0) {
        return msg;
    }

    return data;
}