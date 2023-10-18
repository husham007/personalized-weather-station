import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, Button, Grid } from "@mui/material";

const SearchBar = ({ placeholder, onChange, handleSubmit, textQuery }) => {
  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={12} sm={10} md={10}>
          <TextField
            fullWidth
            value={textQuery}
            name="serachQuery"
            placeholder={placeholder}
            onChange={onChange}
            sx={{
              color: "primary.main",
              fontSize: "1rem",
              bgcolor: "white",
            }}
            size="small"
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{
                    mr: "10px",
                    color: "black",
                  }}
                />
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              color: "white",
              pt: "7.8px",
              pb: "7.8px",
              ml: {
                xs: 0,
                sm: "0.5rem",
              },
              mt: { xs: 2, sm: 0 },
              bgcolor: "black",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
