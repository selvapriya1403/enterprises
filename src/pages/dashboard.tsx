import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../component/header";

interface DashboardProps {
  onLogout: () => void; // receive logout function from parent (App)
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header onLogout={onLogout} />
      <Box component="main" sx={{ p: 3, mt: 8, flexGrow: 1 }}>
        <Outlet /> {/* nested routes render here */}
      </Box>
    </Box>
  );
};

export default Dashboard;
