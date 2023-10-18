import React, { useState } from "react";
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
import ControlledRadioButtonsGroup from "../atoms/RadioGroup";

const Home = () => {
  const [textQuery, setTestQuery] = useState("");
  const [radioOption, setRadioOption] = useState("city");

  // console.log(textQuery);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      query: data.get("serachQuery"),
    });
    setTestQuery("");
  };

  const handleRadioOption = (event) => {
    setRadioOption(event.target.value);
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={8}>
        <ControlledRadioButtonsGroup
          handleRadioOption={handleRadioOption}
          radioOption={radioOption}
        />

        {radioOption === "city" ? (
          <SearchBar
            handleSubmit={handleSubmit}
            onChange={(e) => setTestQuery(e.target.value)}
            textQuery={textQuery}
            placeholder="Enter the city name"
          />
        ) : (
          <p>Image</p>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
