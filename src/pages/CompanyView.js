import React, { useState, useEffect } from "react";

import "../App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

import axios from "axios";

import PlotlyGraph from "../components/PlotlyGraph"
import CompanyDetails from "../components/CompanyDetails";
import CompanyFinancials from "../components/CompanyFinancials";
import TitleBar from "../components/TitleBar";

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
        getCompanyState();
        getCompanyHistory();
    }, []);

    if ((companyState.length > 0) && (companyHistory.length > 0)) {

    let finance = JSON.parse(JSON.stringify(companyState));
    //console.log(finance[0].financials.years);

    return (
        <>
        
        <TitleBar titleName={companyState[0].name} />
        <div className="CompanyView">
            <Grid container rowSpacing={6} columnSpacing={3}>
                <Grid item xs={4}>
                    <CompanyDetails companyDetails={finance[0]} />
                </Grid>
                <Grid item xs={8}>
                    <Card className="CompanyCard" variant="outlined" >
                        <CardContent>
                            <PlotlyGraph history={companyHistory} type={"high+low"} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br></br>

            <Grid container rowSpacing={6} columnSpacing={3}>
                <Grid item xs={4}>
                    <CompanyFinancials financials={finance[0].financials}/>
                </Grid>
                <Grid item xs={8}>
                    <Card className="CompanyCard" variant="outlined" >
                        <CardContent>
                            <PlotlyGraph history={companyHistory} type={"volume"} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
        </>
        );
    }
}

export default CompanyView;