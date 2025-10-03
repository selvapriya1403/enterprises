import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact: React.FC = () => {
  return (
    <Box sx={{ p: 4, mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "stretch", // Stretch children to equal height
        }}
      >
        {/* Left: Contact Info */}
        <Paper sx={{ p: 3, flex: 1 }} elevation={3}>
          {/* Phone */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">Call Us</Typography>
          </Box>
          <Button
            variant="text"
            color="primary"
            onClick={() => (window.location.href = "tel:+919876543210")}
          >
            +91 90876 26311
          </Button>

          {/* Email */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 3, mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">Email</Typography>
          </Box>
          <Button
            variant="text"
            color="primary"
            onClick={() => (window.location.href = "mailto:info@skh.com")}
          >
            skhchemical3@gmail.com
          </Button>

          {/* Address */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 3, mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">Address</Typography>
          </Box>
          <Typography>
            SKH Enterprises,<br />
            Plot No 46 4th Cross Street<br />
            Chromepet Chennai 600044
          </Typography>
        </Paper>

        {/* Right: Google Map - equal height with left side */}
        <Paper
          sx={{
            flex: 2,
            height: "100%", // Stretch to match left Paper
            overflow: "hidden",
          }}
          elevation={3}
        >
          <iframe
            title="SKH Enterprises Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.123456789!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1234567890ab%3A0x123456789abcdef!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
