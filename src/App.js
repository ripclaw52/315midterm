import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import { GetAPIClients, GetAPICompanies } from "./GetAPI.js";

import ClientView from "./pages/ClientView";
import CompanyView from "./pages/CompanyView";
import HomeView from "./pages/HomeView";

const App = () => {

  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <HomeView />;
      case 2:
        return <ClientView guid={null} />;
      case 3:
        return <CompanyView guid={null} />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="button-toolbar">
      <h3>{active}</h3>
      <button className="button" onClick={() => SetView(1)}>Home</button>
      <button className="button" onClick={() => SetView(2)}>Client</button>
      <button className="button" onClick={() => SetView(3)}>Company</button>
      {ActiveView()}
  </div>
  );
}

export default App;
