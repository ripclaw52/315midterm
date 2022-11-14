import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import PlotlyGraph from "./PlotlyGraph";
import CompanyDetails from "./CompanyDetails";
import { bgcolor } from "@mui/system";

const CompanyView = ({ symbol }) => {
    const [companyHistory, setCompanyHistory] = useState([]);
    const [companyState, setCompanyState] = useState('');

    const getCompanyHistory = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol="+symbol)
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
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php?symbol="+symbol)
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