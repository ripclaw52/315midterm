import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axios from "axios";

import PlotlyGraph from "../components/PlotlyGraph"
import CompanyDetails from "../components/CompanyDetails";
import CompanyFinancials from "../components/CompanyFinancials";

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

    let finance = JSON.parse(JSON.stringify(companyState));
    //console.log(finance[0].financials.years);

    if (companyHistory.length >= 1) {
    return (
        <>
            <CompanyDetails companyDetails={finance[0]} />
            <CompanyFinancials financials={finance[0].financials}/>

            <Card className="CompanyCard" variant="outlined" >
                <CardContent>
                    <PlotlyGraph history={companyHistory} type={"high+low"} />
                </CardContent>
            </Card>
            <Card className="CompanyCard" variant="outlined" >
                <CardContent>
                    <PlotlyGraph history={companyHistory} type={"volume"} />
                </CardContent>
            </Card>
        </>
        );
    }
}

export default CompanyView;