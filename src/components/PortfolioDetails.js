import React from "react";
import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const PortfolioDetails = ({ list }) => {
    //console.log(list);

    const handleClick = (event, symbol) => {
        //console.log(symbol);
    }

    const displayTable = () => {
        return (
            <TableContainer component={Paper}>
                <Table >
                    <TableHead >
                        <TableRow
                            sx={{
                                borderBottom: 1.5,
                                borderColor: "darkgray",
                                backgroundColor: "lightgrey",
                            }}
                        >
                            <TableCell>Symbol</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Close</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Total Value</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {list.map((i) => (
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, i.symbol)}
                                key={i.symbol}
                                value={i.symbol}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="i">{i.symbol}</TableCell>
                                <TableCell align="right">{i.name}</TableCell>
                                <TableCell align="right">{ parseFloat(i.close).toFixed(2) }</TableCell>
                                <TableCell align="right">{i.amount}</TableCell>
                                <TableCell align="right">{ parseFloat(i.value).toFixed(2) }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    return (
        <>
        {displayTable()}
        </>
    );
}
export default PortfolioDetails;