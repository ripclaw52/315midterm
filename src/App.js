import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import './App.css';
import SwitchViews from "./SwitchViews";

import ClientView from "./pages/ClientView";
import CompanyView from "./pages/CompanyView";
import HomeView from "./pages/HomeView";

const App = () => {
  const [activeView, setActiveView] = useState("home");
  const [active, setActive] = useState(1);
  const SetView = (active) => {
    setActiveView(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <HomeView />;
      case 2:
        return <ClientView guid={null} />;
      case 3:
        return <CompanyView symbol={null} />;
      default:
        return <HomeView />;
    }
  };

  return (
    <>
    <div>
      <button className="button" onClick={() => SetView("home")}>Home</button>
      <button className="button" onClick={() => SetView("client")}>Client</button>
      <button className="button" onClick={() => SetView("company")}>Company</button>
    </div>
    <SwitchViews active={activeView}>
      <HomeView name="home" />
      <ClientView name="client" />
      <CompanyView name="company" />
    </SwitchViews>
    </>
    /*
    <div className="button-toolbar" aria-orientation="vertical">
      <h3>{active}</h3>
      <button className="button" onClick={() => SetView(1)}>Home</button>
      <button className="button" onClick={() => SetView(2)}>Client</button>
      <button className="button" onClick={() => SetView(3)}>Company</button>
      {ActiveView()}
    </div>
    */
  );
}

export default App;
