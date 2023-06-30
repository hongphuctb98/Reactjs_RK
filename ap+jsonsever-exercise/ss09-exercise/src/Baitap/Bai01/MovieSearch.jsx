import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Container, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";

function MovieSearch() {
  const [movieList, setMovieList] = useState([]);

  const [inputText, setInputText] = useState("");

  const handleSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=97f1bd616b51e07825e04a855aaeed30&query=${inputText}`
      )
      .then((res) => setMovieList(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <TextField
        id="outlined-input"
        label="text"
        type="movie"
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {movieList.map((movie) => (
              <Grid item xs={8} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300px"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default MovieSearch;
