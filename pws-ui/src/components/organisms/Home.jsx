import React from "react";
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
import SearchBar from "../molecules/Searchbar";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SearchBar searchBarWidth="720px" />
    </Grid>
  );
};

export default Home;
