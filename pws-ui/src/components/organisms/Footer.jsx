import React from "react";
import SocialMediaIcons from "../atoms/SocialMediaIcons";
import Info from "../atoms/Info";
import Subscribe from "../atoms/Subscribe";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ marginTop: "10rem" }}>
      <Grid
        container
        maxWidth="2xl"
        spacing={{ xs: 5, lg: 0 }}
        sx={{
          bgcolor: "black",
          minHeight: "10rem",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          padding: "0px 80px",
        }}
      >
        <Grid item marginTop={{ xs: 5, sm: 0 }} padding={{ sm: 0 }}>
          <Subscribe />
        </Grid>
        <Grid item>
          <Info />
        </Grid>
        <Grid item marginBottom={{ xs: 5, sm: 0 }}>
          <SocialMediaIcons />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
