import React, { useState, useEffect } from "react";
import axios from "axios";

const ClientView = ({ client }) => {
    const [data, setData] = useState('');
    const [portfolio, setPortfolio] = useState('');

    const getClientData = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php?user="+client)
        .then((response) => {
            console.log(response);
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const getClientPortfolioData = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?user="+client)
        .then((response) => {
            /*console.log(response);*/
            setPortfolio(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getClientData();
        getClientPortfolioData();
    },[]);

    return (
        <>
            <h3>{data.firstname} -- {portfolio.length}</h3>
        </>
    );
}
export default ClientView;