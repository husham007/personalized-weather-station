import React from "react";

import {
  Typography,
  Stack,
  TextField,
  Button,
  Input,
  Grid,
} from "@mui/material";

const Subscribe = () => {
  return (
    <>
      <Grid>
        <TextField
          variant="outlined"
          label="Email"
          size="small"
          color="secondary"
          sx={{ bgcolor: "white", borderRadius: "4px" }}
        ></TextField>

        <Button
          variant="contained"
          sx={{
            color: "black",
            padding: "7.7px",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "secondary.main",
              color: "white",
            },
          }}
        >
          Subscribe
        </Button>
      </Grid>

      <Grid>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            marginTop: "3rem",
          }}
        >
          {" "}
          Copyright &copy; 2023, All Rights Reserved
        </Typography>
      </Grid>
    </>
  );
};

export default Subscribe;
