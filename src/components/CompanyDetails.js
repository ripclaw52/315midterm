import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/*
const __company ={
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
*/


const CompanyDetails = ({ companyState }) => {
    const finances = JSON.parse(JSON.stringify(companyState.financials));
    //console.log(finances);

    return (
        <>
        <Card className="CompanyDetails" variant="outlined" >
            <Typography variant='h5' >Company Details</Typography>
            <ul>
                <li>{companyState.sector}</li>
                <li>{companyState.subindustry}</li>
            </ul>
            <a href={companyState.website}>{companyState.website}</a>
            <p>{companyState.address}</p>
            <p>{companyState.latitude} {companyState.longitude}</p>
            <p>{companyState.exchange}</p>
            <p>{companyState.description}</p>
        </Card>

        <Card className="CompanyFinancials" variant="outlined" >
            <Typography variant='h5' >Financials</Typography>
            <div>
            </div>
        </Card>
        </>
    );
}
export default CompanyDetails;