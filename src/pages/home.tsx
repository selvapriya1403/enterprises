// src/pages/Home.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        background: 'linear-gradient(120deg, #9c2323 0%, #551515 40%, #111 100%)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed', // Ensures it covers the whole screen
        top: 0,
        left: 0,
        zIndex: -1, // Keeps it behind the header and content
      }}
    >
      <Typography variant="h4" gutterBottom>
        JS Harsha
      </Typography>
    </Box>
  );
};

// If your header/navbar is outside this file, move this Box to the highest component in your tree.

export default Home;
