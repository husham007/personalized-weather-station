import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { Typography, Stack, Box, IconButton, Grid } from "@mui/material";

const Address = () => {
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
          <LocationOnIcon sx={{ color: "white" }} fontSize="small" />
        </IconButton>
        <Typography
          sx={{
            color: "white",
          }}
          variant="caption"
        >
          WeatherStation Oy <br />
          Helsinki
        </Typography>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Grid>
          <IconButton sx={{ p: 0, mr: 1 }}>
            <PhoneIcon sx={{ color: "white" }} fontSize="small" />
          </IconButton>
          <Typography
            sx={{
              color: "white",
            }}
            variant="caption"
          >
            (358) 981 981 981
          </Typography>
        </Grid>

        <Grid>
          <IconButton sx={{ p: 0, mr: 1 }}>
            <EmailIcon sx={{ color: "white" }} fontSize="small" />
          </IconButton>
          <Typography
            sx={{
              color: "white",
            }}
            variant="caption"
          >
            hello@perfectweather.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Address;
