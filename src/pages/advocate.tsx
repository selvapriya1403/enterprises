// src/pages/advocate.tsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const Advocate: React.FC = () => {
  return (
    <Box sx={{ padding: 4, maxWidth: 900, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Advocate Roles & Responsibilities
      </Typography>

      <Typography variant="body1" paragraph>
        Advocates are legal professionals who represent clients in legal matters, provide legal advice, and ensure ethical and professional standards are maintained in all dealings. Their role is crucial for defending clients’ rights and interests within the bounds of the law.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Key Responsibilities
      </Typography>

      {/* Client Representation */}
      <Typography variant="h6">Client Representation</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Represent clients in courts, tribunals, and other legal forums." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Argue cases on behalf of clients with diligence and legal expertise." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Legal Advice & Documentation */}
      <Typography variant="h6">Legal Advice & Documentation</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Provide legal opinions and guidance to clients." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Draft legal notices, agreements, contracts, and other documents." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Upholding Ethical Standards */}
      <Typography variant="h6">Upholding Ethical Standards</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Act with honesty, integrity, and maintain the highest ethical standards." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Confidentiality */}
      <Typography variant="h6">Confidentiality</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Keep all client information confidential and secure." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Do not disclose client information to third parties without consent." />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Client Loyalty */}
      <Typography variant="h6">Client Loyalty</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Defend clients’ interests with competence and diligence." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ensure actions are always within the bounds of the law." />
        </ListItem>
      </List>
    </Box>
  );
};

export default Advocate;
