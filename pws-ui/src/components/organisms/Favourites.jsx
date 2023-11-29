import React, { useState, useEffect } from "react";
import FavouriteCard from "../molecules/FavouriteCard";
import axiosClientWeather from "../../axiosClientWeather";
import axios from "axios";
import { Grid } from "@mui/material";
import useWeatherStore from "../../store/authStore/useWeatherStore";

const Favourites = () => {
  const { userFavourites, favouriteCities } = useWeatherStore();

  useEffect(() => {
    userFavourites();
  }, []);

  return (
    <>
      <Grid sx={{ marginBottom: "10rem" }}>
        {favouriteCities &&
          favouriteCities.map((favourite) => (
            <Grid key={favourite._id}>
              <FavouriteCard favourite={favourite} />;
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Favourites;
