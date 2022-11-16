import React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ClientDetails = ({ clientList }) => {
    if (clientList.length > 0) {
    return (
        <>
        <Grid item xs={9}>
            <Card>
                <pre />
                <Typography variant="h5">{clientList[0].firstname} {clientList[0].lastname}</Typography>
                <pre />
                <Typography variant="h6">{clientList[0].city}, {clientList[0].country}</Typography>
                <pre />
                <Typography variant="caption">{clientList[0].email}</Typography>
                <pre />
            </Card>
        </Grid>
        </>
    );
    }
}
export default ClientDetails;