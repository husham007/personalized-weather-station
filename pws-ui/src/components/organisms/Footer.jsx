import React from "react";
import SocialMediaIcons from "../atoms/SocialMediaIcons";
import Info from "../atoms/Info";
import Subscribe from "../atoms/Subscribe";
import { Container, Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: "black", bottom: "0" }}
      maxWidth="xl"
      justifyContent="center"
    >
      <Grid item>
        <Info />
      </Grid>
      <Grid item>
        <SocialMediaIcons />
      </Grid>
      <Grid item>
        <Subscribe />
      </Grid>
    </Grid>
  );
};

export default Footer;