import React from "react";
import SignIn from "../molecules/SignIn";
import { Grid } from "@mui/material";
import loginIllustration from "../../assets/images/Login_illustration.svg";
import styled from "@emotion/styled";

// const GridContainer = styled.Grid`
//   display: "flex";
//   alignitems: "center";
//   justifycontent: "center";
// `;

const LoginPage = () => {
  const containerStyle = {
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

export default LoginPage;