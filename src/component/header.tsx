import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/bg.jpg"; // your logo

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Admin", path: "/admin" },
    { text: "Facility Manager", path: "/facilityManager" },
    { text: "Advocate", path: "/Advocate" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo + Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="SKH Enterprises Logo"
            style={{ height: 40, marginRight: 8 }}
          />
          <Typography variant="h6" component="div">
            SKH Enterprises
          </Typography>
        </Box>

        {/* Center: Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Right: Book Appointment + Mobile Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Book Appointment button (desktop only) */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/book-appointment")}
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            Book Appointment
          </Button>

          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile dropdown menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.text} onClick={() => handleNavigate(item.path)}>
              {item.text}
            </MenuItem>
          ))}
          {/* Mobile Book Appointment option */}
          <MenuItem onClick={() => handleNavigate("/book-appointment")}>
            Book Appointment
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
