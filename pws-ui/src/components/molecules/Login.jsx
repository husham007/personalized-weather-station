import React from "react";
import SignIn from "./SignIn";
import { Grid } from "@mui/material";
import loginIllustration from "../../assets/images/Login_illustration.svg";

const Login = () => {
  const containerStyle = {
    // backgroundColor: "lightblue",
    // height: "200vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Grid container style={containerStyle}>
      <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        <img
          src={loginIllustration}
          alt="sign in illustration"
          style={{ width: "60%", height: "50%" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <SignIn />
      </Grid>
    </Grid>
  );
};

export default Login;
