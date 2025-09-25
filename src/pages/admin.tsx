// src/pages/admin.tsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const Admin: React.FC = () => {
  return (
    <Box sx={{ padding: 4, maxWidth: 900, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Admin Roles & Responsibilities
      </Typography>

      <Typography variant="body1" paragraph>
        Admin roles and responsibilities include managing communication (phone, email, mail), scheduling meetings and appointments, organizing documents and files, maintaining office supplies and equipment, handling basic financial tasks like invoicing, and serving as a point of contact for visitors and external parties. These duties ensure smooth daily operations, efficient workflow, and a well-supported office environment, though the specific tasks can vary significantly depending on the organization's size and industry.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Key Responsibilities
      </Typography>

      {/* Communication Management */}
      <Typography variant="h6">Communication Management</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Answering and directing phone calls." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Managing incoming and outgoing emails and correspondence." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Acting as the first point of contact for visitors and clients." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Scheduling and Coordination */}
      <Typography variant="h6">Scheduling and Coordination</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Managing diaries, scheduling meetings, and booking rooms." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Arranging travel and accommodation." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Planning and coordinating office events and conferences." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Record Keeping and Documentation */}
      <Typography variant="h6">Record Keeping and Documentation</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Organizing and storing documents in both physical and digital forms." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Maintaining databases and updating records." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Filing, archiving, and maintaining an efficient filing system." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Office Operations and Logistics */}
      <Typography variant="h6">Office Operations and Logistics</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Ordering, stocking, and maintaining office supplies." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ensuring office equipment is in good working order." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Liaising with suppliers and contractors." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Administrative Support */}
      <Typography variant="h6">Administrative Support</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Preparing and editing various documents, reports, and presentations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Taking minutes at meetings." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Providing support to different departments, such as finance and HR." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Financial Support */}
      <Typography variant="h6">Financial Support</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Processing invoices and managing expense reports." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Assisting with budgeting and tracking office expenses." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Example Tasks */}
      <Typography variant="h5" gutterBottom>
        Example Tasks
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Answering the reception phone and directing calls to the correct department." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Scheduling a team meeting and arranging for a meeting room and refreshments." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Filing incoming invoices and ordering new printer ink." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Creating a monthly report from data collected by various team members." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Arranging travel for an executive and preparing a detailed itinerary." />
        </ListItem>
      </List>
    </Box>
  );
};

export default Admin;
