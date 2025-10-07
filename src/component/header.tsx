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
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/bg.jpg";

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [avatarAnchor, setAvatarAnchor] = useState<null | HTMLElement>(null);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Admin", path: "/admin" },
    { text: "Facility Manager", path: "/facilityManager" },
    // { text: "Advocate", path: "/advocate" },
    { text: "Contact", path: "/contact" }
  ];

  // Mobile hamburger menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  // Avatar dropdown menu (desktop only)
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => setAvatarAnchor(event.currentTarget);
  const handleAvatarClose = () => setAvatarAnchor(null);

  const handleLogout = () => {
    onLogout();
    navigate("/login");
    handleAvatarClose();
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo + Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 8 }} />
          <Typography variant="h6">SKH Enterprises</Typography>
        </Box>

        {/* Desktop menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button key={item.text} color="inherit" onClick={() => navigate(item.path)}>
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Right side: Desktop Avatar + Book Appointment, Mobile Hamburger */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Book Appointment button - desktop only */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/book-appointment")}
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            Book Appointment
          </Button>

          {/* Avatar - desktop only */}
          <IconButton
            onClick={handleAvatarClick}
            sx={{ display: { xs: "none", md: "inline-flex" }, p: 0, ml: 1 }}
          >
            <Avatar alt="User" src="" />
          </IconButton>

          {/* Mobile hamburger menu */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Avatar dropdown (desktop) */}
        <Menu anchorEl={avatarAnchor} open={Boolean(avatarAnchor)} onClose={handleAvatarClose}>
          <MenuItem onClick={() => { navigate("/profile"); handleAvatarClose(); }}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

        {/* Mobile hamburger dropdown */}
        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.text}
              onClick={() => {
                navigate(item.path);
                handleMenuClose();
              }}
            >
              {item.text}
            </MenuItem>
          ))}
          <MenuItem
            onClick={() => {
              navigate("/book-appointment");
              handleMenuClose();
            }}
          >
            Book Appointment
          </MenuItem>
          <MenuItem
            onClick={() => {
              onLogout();
              navigate("/login");
              handleMenuClose();
            }}
          >
            Logout
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/profile");
              handleMenuClose();
            }}
          >
            Profile
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
