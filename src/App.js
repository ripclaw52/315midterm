import React from "react";
import './App.css';
import ResponsiveSideBar from "./components/ResponsiveSideBar";
import { Route, Routes } from 'react-router';

import ClientView from "./pages/ClientView";
import CompanyView from "./pages/CompanyView";
import HomeView from "./pages/HomeView";


const App = () => {
  return (
    <>
      <ResponsiveSideBar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/ClientView' element={<ClientView guid={"f1aed79f-a6b0-46ed-99ae-785b5c4ca991"} />} />
        <Route path='/CompanyView' element={<CompanyView symbol={"ADP"} />} />
      </Routes>
    </>
  );
}

export default App;
