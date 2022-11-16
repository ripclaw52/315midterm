import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import ClientView from "./ClientView";
import TitleBar from "../components/TitleBar";

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const HomeView = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    
    const getAllClientData = () => {
        axios
        .get("https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php")
        .then((response) => {
            /*console.log(response.data);*/
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        getAllClientData();
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value);
        //console.log(e.target.value);
    };

    if (data.length > 0) {
    return (
        <>
        {
        (value === '') ? (
        <>
            <TitleBar titleName={"Home - React Midterm Project"}/>
            <div className="HomeView">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="stretch"
                >
                <Box display="grid" item="true" sx={{ minWidth: 1000 }}>
                    <FormControl fullWidth margin="normal" size="string" variant="filled">
                        <InputLabel id="demo-simple-select-label">Choose a Client</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Choose a Client"
                            onChange={handleChange}
                        >
                            {data.map(item => <MenuItem key={item.id} value={item.guid}>{item.firstname} {item.lastname}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
                </Grid>
            </div>
            </>
         ) : (
        <>
        <ClientView guid={value} />
        </>
        )}
    </>
    );
    }
}
export default HomeView;