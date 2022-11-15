import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function GetAPIClients() {
    const [dataClients, setDataClients] = useState('');
    useEffect(() => {
        const getClientData = () => {
            axios
            .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php")
            .then((response) => {
                /*console.log(response.data);*/
                setDataClients(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }}, []);
    return(
        dataClients
        );
}

export function GetAPICompanies() {
    const [dataCompany, setDataCompany] = useState('');
    
    const getCompanyData = () => {
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
        getCompanyData();
    }, []);
    console.log(dataCompany);
    return (
        <>
        {dataCompany}
        </>
        );
}