import React from "react";
import ContactForm from "../molecules/ContactForm";
import MapCard from "../molecules/MapCard";
import { Grid } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{
          marginTop: "5rem",
          marginBottom: "10rem",
        }}
      >
        <Grid item xs={12} md={6}>
          <MapCard />
        </Grid>
        <Grid item xs={12} md={6} marginTop={{ xs: 7, sm: 7, md: 0 }}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
