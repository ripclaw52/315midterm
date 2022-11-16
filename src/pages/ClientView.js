import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

import ClientDetails from "../components/ClientDetails";
import CompanyView from "./CompanyView";
import PortfolioSummary from "../components/PortfolioSummary";
import TitleBar from "../components/TitleBar";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const ClientView = ({ guid }) => {
    const [client, setClient] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [value, setValue] = useState('');

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

    const handleClick = (event, symbol) => {
        setValue(symbol);
    };

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

    const displayStockCard = (name, symbol) => {
        return (
        <Grid item="true" xs={2} sm={3} md={4}>
            <Card
                sx={{ maxWidth: 400 }}
                id={symbol}
                value={symbol}
                key={symbol}
                onClick={(event) => handleClick(event, symbol)}
                >
                <CardActionArea>
                    <CardContent>
                        <Typography
                            variant="h3"
                            align="center"
                        >
                            {symbol}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                        >
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        )
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
                        {portfolio.map((i) => (
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, i.symbol)}
                                key={i.symbol}
                                value={i.symbol}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{i.symbol}</TableCell>
                                <TableCell align="right">{i.name}</TableCell>
                                <TableCell align="right">{ parseFloat(i.close).toFixed(2) }</TableCell>
                                <TableCell align="right">{i.amount}</TableCell>
                                <TableCell align="right">{ parseFloat(i.value).toFixed(2) }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <>
        {
        (value === '') ? (
        <>
        <TitleBar titleName={clientFullname} />
        <Box >
            <div className="ClientView">
            <Grid container rowSpacing={6}>
                <Grid item="true" xs={4}>
                    <ClientDetails clientList={clientName}/>
                </Grid>
                <Grid container direction="row" justifyContent="space-evenly" item="true" xs={8}>
                    { copiedPortfolio.map(i =>
                        displayStockCard(i.name, i.symbol)
                    ) }
                </Grid>
            </Grid>
            <br></br>
            <br></br>

            <Grid container rowSpacing={6}>
                <Grid item="true" xs={4}>
                    <PortfolioSummary portfolioList={copyPortfolio}/>
                </Grid>
                <Grid item="true" xs={8}>
                    { displayTable() }
                </Grid>
            </Grid>
            </div>
        </Box>
        </>
        ) : (
        <>
        <CompanyView symbol={value} />
        </>
        )
        }
        </>
    );
    }
}
export default ClientView;