import React from "react";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const CompanyDetails = ({ companyDetails }) => {
    //console.log(companyDetails);
    return (
        <>
        <Card className="CompanyDetails" variant="outlined" >
            <Typography variant='h5' >Company Details</Typography>
            <ul>
                <li>{companyDetails.sector}</li>
                <li>{companyDetails.subindustry}</li>
            </ul>
            <a href={companyDetails.website}>{companyDetails.website}</a>
            <p>{companyDetails.address}</p>
            <p>{companyDetails.latitude} {companyDetails.longitude}</p>
            <p>{companyDetails.exchange}</p>
            <p>{companyDetails.description}</p>
        </Card>
        </>
    );
}
export default CompanyDetails;