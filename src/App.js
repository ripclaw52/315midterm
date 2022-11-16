import React from "react";
import { useState } from "react";

import './App.css';
import SwitchViews from "./SwitchViews";

import ClientView from "./pages/ClientView";
import CompanyView from "./pages/CompanyView";
import HomeView from "./pages/HomeView";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const App = () => {
  const [client, setClient] = useState(null);
  const [company, setCompany] = useState(null);
  const [activeView, setActiveView] = useState("home");

  const SetView = (active) => {
    if (active === "home") { SetClient(null); }
    if (active === "client") { SetCompany(null); }
    setActiveView(active);
  };

  const SetClient = (temp) => {
    setClient(temp);
  };
  const SetCompany = (temp) => {
    setCompany(temp);
  };

  return (
    <>
    <div className="sidebar" >
      <Box sx={{ flexGrow: 1}}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid>
          <Button className="button" onClick={() => SetView("home")} >Home</Button>
        </Grid>
        <Grid>
          <Button className="button" onClick={() => SetView("client")}>Client</Button>
        </Grid>
        <Grid>
          <Button className="button" onClick={() => SetView("company")}>Company</Button>
        </Grid>
      </Grid>
      </Box>
    </div>

    <SwitchViews active={activeView}>
      <HomeView name="home" />
      <ClientView name="client" guid={client} />
      <CompanyView name="company" symbol={company} />
    </SwitchViews>
    </>
  );
}

export default App;
