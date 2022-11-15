import React from "react";
import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";


const CompanyFinancials = ({ financials }) => {
    let usd = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });

    let newFinancials = [];
    for (let i=0; i<3; i++) {
        newFinancials[i] = {
            "years": financials.years[i],
            "revenue": usd.format(financials.revenue[i]),
            "earnings": usd.format(financials.earnings[i]),
            "financials": usd.format(financials.earnings[i]),
            "assets": usd.format(financials.assets[i]),
            "liabilities": usd.format(financials.liabilities[i]),
        }
    }

    //console.log(financials);
    return (
        <>
        <Card className="CompanyFinancials" variant="outlined" >
            <Typography variant='h5' >Financials</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Years</TableCell>
                            <TableCell align="right">Revenue</TableCell>
                            <TableCell align="right">Earnings</TableCell>
                            <TableCell align="right">Assets</TableCell>
                            <TableCell align="right">Liabilities</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { newFinancials.map((item) => (
                        <TableRow key={item.years}>
                            <TableCell>{item.years}</TableCell>
                            <TableCell align="right">{item.revenue}</TableCell>
                            <TableCell align="right">{item.earnings}</TableCell>
                            <TableCell align="right">{item.assets}</TableCell>
                            <TableCell align="right">{item.liabilities}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
        </>
    );
}
export default CompanyFinancials;

/*
            <ul>
                <li>{financials.years}</li>
                <li>{financials.revenue}</li>
                <li>{financials.earnings}</li>
                <li>{financials.assets}</li>
                <li>{financials.liabilities}</li>
            </ul>
*/