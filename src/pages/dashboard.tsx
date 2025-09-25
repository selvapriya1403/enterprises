import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// import bgImage from "../assets/bg1.jpg";
import Header from "../component/header";

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        // backgroundImage: `url(${bgImage})`, // use imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Box component="main" sx={{ p: 3, mt: 8, flexGrow: 1 }}>
        <Outlet /> {/* nested pages render here */}
      </Box>
    </Box>
  );
};

export default Dashboard;
