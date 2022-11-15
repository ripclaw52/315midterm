import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioDetails from "../components/PortfolioDetails";
import StockCard from "../components/StockCard";

const ClientView = ({ guid }) => {
    let [client, setClient] = useState([]);
    let [portfolio, setPortfolio] = useState([]);

    const getClientData = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php?user="+guid)
        .then((response) => {
            //console.log(response.data);
            setClient(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getPortfolioData = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?user="+guid)
        .then((response) => {
            //console.log(response.data);
            setPortfolio(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getClientData();
        getPortfolioData();
    }, []);

    //console.log(`clientview_c: ${client}`);
    //console.log(`clientview_p ${portfolio}`);

    let copiedPortfolio = JSON.parse(JSON.stringify(portfolio));
    copiedPortfolio.sort(function(a, b){return b.value - a.value});
    //console.table(copiedPortfolio);
    //console.table(portfolio);

    return (
        <>
            <StockCard />
        {
            <PortfolioDetails list={portfolio} />
        }
        </>
    );
}
export default ClientView;