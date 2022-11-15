import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import PlotlyGraph from "../components/PlotlyGraph"
import CompanyDetails from "../components/CompanyDetails";
import { bgcolor } from "@mui/system";

const CompanyView = ({ symbol }) => {
    const [companyHistory, setCompanyHistory] = useState([]);
    const [companyState, setCompanyState] = useState('');

    let url_company_history = "";
    let url_company_state = "";
    if (symbol != null ? (
        url_company_history = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol="+symbol,
        url_company_state = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php?symbol="+symbol
    ) : (
        url_company_history = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=ORCL",
        url_company_state= "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php?symbol=ORCL"
    ));

    const getCompanyHistory = () => {
        axios
        .get(url_company_history)
        .then((response) => {
            /*console.log(response.data);*/
            setCompanyHistory(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const getCompanyState = () => {
        axios
        .get(url_company_state)
        .then((response) => {
            /*console.log(response.data);*/
            setCompanyState(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getCompanyHistory();
        getCompanyState();
    }, []);

    if (companyHistory.length >= 1) {
    return (
        <>
            <CompanyDetails companyState={companyState[0]}/>

            <Card className="CompanyCard" variant="outlined" sx={{ minHeight: 400, minWidth: 800, bgcolor: "lightblue"}}>
                <CardContent>
                    <PlotlyGraph history={companyHistory} type={"high+low"} />
                </CardContent>
            </Card>
            <Card className="CompanyCard" variant="outlined" sx={{ minHeight: 400, minWidth: 800, bgcolor: "lightblue" }}>
                <CardContent>
                    <PlotlyGraph history={companyHistory} type={"volume"} />
                </CardContent>
            </Card>
        </>
        );
    }
}

export default CompanyView;