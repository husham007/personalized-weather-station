import React from "react";
import SignUp from "../molecules/SignUp";
import { Grid } from "@mui/material";
import signUpImg from "../../assets/images/Signup_illustration.svg";

const SignUpPage = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Grid container style={containerStyle}>
      <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        <img
          src={signUpImg}
          alt="sign in illustration"
          style={{ width: "60%", height: "50%" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <SignUp />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
