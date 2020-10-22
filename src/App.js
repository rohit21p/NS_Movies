import React from "react";
import "./styles.css";
import moviesData from "./utils/movies";
import { Grid } from "@material-ui/core";
import Movie from "./components/movie";

export default function App() {
  const [movies, setMovies] = React.useState(moviesData);

  const handleAction = (action, key) => {
    setMovies((state) => ({
      ...state,
      [key]: {
        ...state[key],
        [action]: !state[key][action]
      }
    }));
  };

  const handleDelete = (key) => {
    setMovies((movies) => {
      let new_movies = { ...movies };
      delete new_movies[key];
      return new_movies;
    });
  };

  return (
    <Grid container>
      {Object.keys(movies).map((key) => (
        <Grid item key={key}>
          <Movie
            id={key}
            movie={movies[key]}
            handleDelete={handleDelete}
            handleAction={handleAction}
          />
        </Grid>
      ))}
    </Grid>
  );
}
