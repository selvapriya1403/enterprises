import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Admin from "./pages/admin";
import FacilityManager from "./pages/facilityManager";
import Advocate from "./pages/advocate";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="facilityManager" element={<FacilityManager />} />
          <Route path="advocate" element={<Advocate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
