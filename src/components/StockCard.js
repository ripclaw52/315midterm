import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const StockCard = ({ symbol, name }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
    );
}

export default StockCard;