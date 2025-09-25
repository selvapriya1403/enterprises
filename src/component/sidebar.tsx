// src/components/Sidebar.tsx
import React from "react";
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const drawerItems = [
    { text: "Admin", icon: <HomeIcon />, path: "/" },
    { text: "Facility Management", icon: <AccountCircleIcon />, path: "/profile" },
    { text: "Advocate", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          {drawerItems.map((item, index) => (
            <ListItem
              key={index}
              component="button"
              sx={{ width: "100%", textAlign: "left" }}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
