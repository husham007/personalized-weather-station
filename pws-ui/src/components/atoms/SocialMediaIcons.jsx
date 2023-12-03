import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMediaIcons = () => {
  return (
    <Grid>
      <Typography
        variant="h6"
        noWrap
        sx={{
          color: "white",
        }}
      >
        Follow us
      </Typography>

      <IconButton sx={{ p: 0, mr: 1 }} disabled>
        <LinkedInIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>

      <IconButton sx={{ p: 0, mr: 1 }} disabled>
        <GitHubIcon sx={{ color: "white", padding: "0px" }} fontSize="large" />
      </IconButton>

      <IconButton sx={{ p: 0, mr: 1 }} disabled>
        <InstagramIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>

      <IconButton sx={{ p: 0, mr: 1 }} disabled>
        <TwitterIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>

      <IconButton sx={{ p: 0, mr: 1 }} disabled>
        <FacebookIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
    </Grid>
  );
};

export default SocialMediaIcons;
