import React from "react";
import SocialMediaIcons from "../atoms/SocialMediaIcons";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{ bgcolor: "black", position: "fixed", bottom: "0" }}
      maxWidth="xl"
    >
      <SocialMediaIcons color="error" />
      {/* <Typography
        variant="h6"
        noWrap
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "white",
          textDecoration: "none",
        }}
      >
        HOME
      </Typography> */}
    </Container>
  );
};

export default Footer;
