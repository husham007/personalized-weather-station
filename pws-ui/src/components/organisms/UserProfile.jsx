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
import useAuthStore from "../../store/authStore/useAuthStore.js";

const UserProfile = () => {
  const { username, email } = useAuthStore();

  function stringToColor(string) {
    if (string) {
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
  }

  function stringAvatar(name) {
    if (typeof name === "string" && name.length >= 2) {
      return {
        sx: {
          bgcolor: stringToColor(name),
          width: 100,
          height: 100,
        },
        children: `${name[0]}${name[1]}`,
      };
    }
  }

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

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
        marginBottom: "10rem",
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
                <Avatar {...stringAvatar(username)} />
              </Stack>
              {show ? (
                <Stack>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ marginBottom: "5px" }}
                  >
                    {username}
                  </Typography>
                  <Address
                    address={`Germany`}
                    phone={"(358) 981 981 981"}
                    email={email}
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
                        label={email}
                        name="email"
                        autoComplete="email"
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {" "}
                      <TextField
                        autoComplete="given-name"
                        name={username}
                        required
                        fullWidth
                        id="username"
                        label={username}
                        autoFocus
                        disabled
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Country" disabled />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Phone" disabled />
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
                        disabled
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
                        disabled
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
