import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ClientView from "./ClientView";

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

    return (
        <>
        {
            (value === '') ? (
            <div className="HomeView">
                <Box sx={{ maxWidth: 800 }}>
                    <FormControl fullWidth margin="normal" size="string" variant="filled">
                        <InputLabel id="demo-simple-select-label">Choose a Client</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Choose a Client"
                            onChange={handleChange}
                        >
                            {data.map(item => <MenuItem key={item.guid} value={item.guid}>{item.firstname} {item.lastname}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            ) : (
                <ClientView guid={value}/>
            )
        }
        </>
    );
}
export default HomeView;