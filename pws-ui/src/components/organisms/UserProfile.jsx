import React, { useState } from "react";
import Address from "../atoms/Address";
import {
  Button,
  TextField,
  Card,
  Box,
  Grid,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

const UserProfile = () => {
  let name = "Kent Dodds";
  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 100,
        height: 100,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    setShow(!show);
  };

  const handleCancel = () => {
    setShow(!show);
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={8}>
        <Card>
          <CardContent>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Profile
              </Typography>
              {show ? (
                <IconButton sx={{ p: 0, mr: 1 }} onClick={handleClick}>
                  <EditIcon sx={{ color: "black" }} fontSize="small" />
                </IconButton>
              ) : (
                <IconButton sx={{ p: 0, mr: 1 }} onClick={handleClick}>
                  <CloseIcon sx={{ color: "black" }} fontSize="small" />
                </IconButton>
              )}
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: `${show ? "row" : "column"}`,
                marginTop: "2rem",
              }}
            >
              <Stack marginRight={2}>
                <Avatar {...stringAvatar(name)} />
              </Stack>
              {show ? (
                <Stack>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ marginBottom: "5px" }}
                  >
                    {name}
                  </Typography>
                  <Address
                    address={`Germany`}
                    phone={"(358) 981 981 981"}
                    email={"hello@perfectweather.com"}
                    color={"black"}
                  />
                </Stack>
              ) : (
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="KD@outlook.com"
                        name="email"
                        autoComplete="email"
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {" "}
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Country" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Phone" />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item sx={{ marginRight: "1rem" }}>
                      <Button
                        onClick={handleCancel}
                        type="reset"
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          mr: 2,
                          bgcolor: "black",
                          "&:hover": {
                            bgcolor: "error.main",
                          },
                        }}
                      >
                        cancel
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          bgcolor: "black",
                          "&:hover": {
                            bgcolor: stringToColor(name),
                          },
                        }}
                      >
                        Save changes
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
