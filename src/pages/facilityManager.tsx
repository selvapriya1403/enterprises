import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const FacilityManagement: React.FC = () => {
  return (
    <Box sx={{ padding: 4, maxWidth: 900, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Facility Management Roles & Responsibilities
      </Typography>

      <Typography variant="body1" paragraph>
        Facility Management ensures that the organization’s physical environment, infrastructure, and support services operate efficiently and safely. Facility managers handle everything from maintaining office buildings and equipment to coordinating vendors and ensuring compliance with safety regulations.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Key Responsibilities
      </Typography>

      {/* Office & Building Management */}
      <Typography variant="h6">Office & Building Management</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Ensure that office facilities are clean, safe, and well-maintained." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Oversee maintenance, repairs, and renovations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Monitor building systems like HVAC, electrical, and plumbing." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Vendor & Supplier Coordination */}
      <Typography variant="h6">Vendor & Supplier Coordination</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Manage contracts and relationships with vendors and service providers." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Coordinate cleaning, security, and maintenance services." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ensure timely procurement of office supplies and equipment." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Safety & Compliance */}
      <Typography variant="h6">Safety & Compliance</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Ensure compliance with health, safety, and environmental regulations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Conduct regular safety audits and risk assessments." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Develop emergency procedures and evacuation plans." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Space & Resource Management */}
      <Typography variant="h6">Space & Resource Management</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Manage office layouts, seating arrangements, and workspace allocation." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Optimize use of resources and facilities to increase efficiency." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Track asset inventory and equipment usage." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Example Tasks */}
      <Typography variant="h5" gutterBottom>
        Example Tasks
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Coordinating building maintenance and repairs." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Managing vendor contracts and office supply procurement." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ensuring compliance with health and safety regulations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Overseeing space planning and resource allocation." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Monitoring facility budgets and expenses." />
        </ListItem>
      </List>
    </Box>
  );
};

export default FacilityManagement;
