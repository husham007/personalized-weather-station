import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { Typography, IconButton, Grid } from "@mui/material";

const Address = ({ address, phone, email, color }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <IconButton sx={{ p: 0, mr: 1 }}>
          <LocationOnIcon sx={{ color: color }} fontSize="small" />
        </IconButton>
        <Typography
          sx={{
            color: color,
          }}
          variant="caption"
        >
          {address}
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginTop: "0.5rem",
        }}
      >
        <Grid>
          <IconButton sx={{ p: 0, mr: 1 }}>
            <PhoneIcon sx={{ color: color }} fontSize="small" />
          </IconButton>
          <Typography
            sx={{
              color: color,
            }}
            variant="caption"
          >
            {phone}
          </Typography>
        </Grid>

        <Grid>
          <IconButton sx={{ p: 0, mr: 1 }}>
            <EmailIcon sx={{ color: color }} fontSize="small" />
          </IconButton>
          <Typography
            sx={{
              color: color,
            }}
            variant="caption"
          >
            {email}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Address;
