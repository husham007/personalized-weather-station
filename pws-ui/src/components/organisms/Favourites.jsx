import React, { useState, useEffect } from "react";
import FavouriteCard from "../molecules/FavouriteCard";
import { Grid } from "@mui/material";
import useWeatherStore from "../../store/authStore/useWeatherStore";

const Favourites = () => {
  const { userFavourites, favouriteCities } = useWeatherStore();

  useEffect(() => {
    userFavourites();
  }, []);

  return (
    <>
      <Grid
        sx={{
          marginBottom: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <Grid item xs={12} sm={8} md={8}>
          {favouriteCities &&
            favouriteCities.map((favourite) => (
              <Grid key={favourite._id}>
                <FavouriteCard favourite={favourite} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Favourites;
