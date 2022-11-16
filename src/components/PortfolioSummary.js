import React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PortfolioSummary = ({ portfolioList }) => {
    let total_item = portfolioList.length;
    let total_value = 0;
    let total_stock = 0;

    portfolioList.map((item) => {
        total_value = total_value + item.value;
        total_stock = total_stock + item.amount;
    });

    let usd = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });

    return (
        <>
        <Grid item xs={9}>
            <Card>
                <Typography variant="subtitle2" >Total amount of stock items</Typography>
                <Typography variant="p" >{total_item}</Typography>
                <pre />
                <Typography variant="subtitle2" >Total value of stock</Typography>
                <Typography variant="p" >{ usd.format(parseFloat(total_value).toFixed(2)) }</Typography>
                <pre />
                <Typography variant="subtitle2" >Total amount of stock</Typography>
                <Typography variant="p" >{total_stock}</Typography>
                <pre />
            </Card>
        </Grid>
        </>
    );
}
export default PortfolioSummary;