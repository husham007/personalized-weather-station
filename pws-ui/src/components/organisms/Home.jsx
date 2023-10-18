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
  CssBaseline,
} from "@mui/material";
import hero from "../../assets/images/hero.jpg";
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
    <>
      <CssBaseline />
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "15rem",
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Grid
        container
        sx={{
          marginTop: "1rem",
          marginBottom: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
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
            <p>MAP</p>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
