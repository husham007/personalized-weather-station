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
          disabled
          variant="outlined"
          label="Email"
          size="small"
          color="error"
          sx={{ bgcolor: "white", borderRadius: "4px", color: "white" }}
        />

        <Button
          variant="contained"
          disabled
          sx={{
            background: "white",
            color: "black",
            padding: "7.7px",
            "&:disabled": {
              background: "grey",
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
          Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
        </Typography>
      </Grid>
    </>
  );
};

export default Subscribe;
