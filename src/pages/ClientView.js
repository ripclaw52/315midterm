import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioDetails from "../components/PortfolioDetails";
import StockCard from "../components/StockCard";
import TitleBar from "../components/TitleBar";

const ClientView = ({ guid }) => {
    let [client, setClient] = useState([]);
    let [portfolio, setPortfolio] = useState([]);

    let url_client = "";
    let url_portfolio = "";
    if (guid != null ? (
        url_client = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php?user="+guid,
        url_portfolio = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?user="+guid
        ) : (
        url_client = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php?id=1",
        url_portfolio = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?id=1"
        )
    );
    

    const getClientData = () => {
        axios
        .get(url_client)
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
        .get(url_portfolio)
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

    if ((client.length > 0) && (portfolio.length > 0)) {

    let clientName = JSON.parse(JSON.stringify(client));
    //console.log(clientName);
    let clientFullname = `${clientName[0].firstname} ${clientName[0].lastname}`;

    let copyPortfolio = JSON.parse(JSON.stringify(portfolio));
    copyPortfolio.sort(function(a, b){return b.value - a.value});
    let copiedPortfolio = copyPortfolio.slice(0, 3);
    //console.table(copiedPortfolio);
    //console.table(portfolio);

    return (
        <>
        <TitleBar titleName={clientFullname} />
        { copiedPortfolio.map(copyPort =>
            <StockCard key={copyPort.symbol} symbol={copyPort.symbol} name={copyPort.name} />
        ) }
        { <PortfolioDetails list={portfolio} /> }
        </>
    );
    }
}
export default ClientView;