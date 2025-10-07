// src/pages/Home.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Photo1 from "../assets/banner1.jpg"; // Replace with actual path
import Photo2 from "../assets/banner2.jpg";
import Photo3 from "../assets/banner3.jpg";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background:
          "linear-gradient(120deg, #9c2323 0%, #551515 40%, #111 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column", // vertical layout (text top, photos bottom)
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        JS Harsha.,BE.,MBA.,LLB.,
        <br />
        Managing Director at SKH Enterprises
      </Typography>

      {/* Photo Row */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={Photo1}
          alt="Photo 1"
          sx={{
            width: 250,
            height: 200,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            objectFit: "cover",
          }}
        />
        <Box
          component="img"
          src={Photo2}
          alt="Photo 2"
          sx={{
            width: 250,
            height: 200,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            objectFit: "cover",
          }}
        />
        {/* <Box
          component="img"
          src={Photo3}
          alt="Photo 3"
          sx={{
            width: 250,
            height: 200,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            objectFit: "cover",
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default Home;
