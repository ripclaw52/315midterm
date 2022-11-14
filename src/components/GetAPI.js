import React, { useState, useEffect } from "react";
import axios from "axios";

function GetAPI() {
    const [dataClients, setDataClients] = useState('');
    const [dataCompany, setDataCompany] = useState('');
    
    const getAllClientData = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php")
        .then((response) => {
            /*console.log(response.data);*/
            setDataClients(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getAllCompaniesData = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php")
        .then((response) => {
            /*console.log(response.data);*/
            setDataCompany(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        /*getAllClientData();*/
        getAllCompaniesData();
    }, []);


    const displayClientData = () => {
        return dataClients ? (
            dataClients.map((dataClients) => {
                return (
                    <div className='dataClients' key={dataClients.guid}>
                        <p>
                        {dataClients.id} &emsp;
                        {dataClients.guid} &emsp;
                        {dataClients.firstname} &emsp;
                        {dataClients.lastname} &emsp;
                        {dataClients.city} &emsp;
                        {dataClients.country} &emsp;
                        {dataClients.email}
                        </p>
                    </div>
                );
            })
        ) : (
            <h3>No data yet</h3>
        );
    }

    const displayCompanyData = () => {
        return dataCompany ? (
            dataCompany.map((dataCompany) => {
                return (
                    <div className='dataCompany' key={dataCompany.symbol}>
                        <p>
                            {dataCompany.symbol}
                            {dataCompany.name}
                            {dataCompany.sector}
                            {dataCompany.subindustry}
                            {dataCompany.address}
                            {dataCompany.latitude}
                            {dataCompany.longitude}
                            {dataCompany.website}
                            {dataCompany.exchange}
                            {dataCompany.description}
                            
                            {/*
                            {dataCompany.financials.years}
                            {dataCompany.financials.revenue}
                            {dataCompany.financials.earnings}
                            {dataCompany.financials.assets}
                            {dataCompany.financials.liabilities}
                            */}
                        </p>
                    </div>
                );
            })
        ) : (
            <h3>No data yet</h3>
        );
    }

    return (
        <>
            {displayClientData()}
            {displayCompanyData()}
        </>
    );
}
export default GetAPI;

const json = {
    "symbol": "A",
    "name": "Agilent Technologies Inc",
    "sector": "Health Care",
    "subindustry": "Health Care Equipment",
    "address": "Santa Clara, California",
    "latitude": 37.3249,
    "longitude": -121.999,
    "website": "http://www.agilent.com",
    "exchange": "New York Stock Exchange",
    "description": "Agilent Technologies Inc is engaged in life sciences, diagnostics and applied chemical markets. The company provides application focused solutions that include instruments, software, services and consumables for the entire laboratory workflow.",
    "financials": {
        "years": [
            2019,
            2018,
            2017
        ],
        "revenue": [
            5163000,
            4914000,
            4472000
        ],
        "earnings": [
            1071000,
            316000,
            684000
        ],
        "assets": [
            9452000,
            8541000,
            8426000
        ],
        "liabilities": [
            4704000,
            3974000,
            3595000
        ]
    }
}