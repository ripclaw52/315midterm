import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import './App.css';
import SwitchViews from "./SwitchViews";

import ClientView from "./pages/ClientView";
import CompanyView from "./pages/CompanyView";
import HomeView from "./pages/HomeView";

import Button from "@mui/material/Button";

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
      <Button className="button" onClick={() => SetView("home")} >Home</Button>
      <Button className="button" onClick={() => SetView("client")}>Client</Button>
      <Button className="button" onClick={() => SetView("company")}>Company</Button>
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
