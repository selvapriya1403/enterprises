// src/components/MainContent.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

const MainContent: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 8,
        minHeight: "100vh",
        background: "linear-gradient(120deg, #9c2323 0%, #551515 40%, #111 100%)",
        color: "#fff" // Makes text visible on dark background
      }}
    >
      <Typography variant="h4" gutterBottom>
        JS Harsha
      </Typography>
    </Box>
  );
};

export default MainContent;
