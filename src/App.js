import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import moviesData from "./utils/movies";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Grid } from "@material-ui/core";
import Movie from "./components/movie";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  likeButton: {
    color: "red"
  }
});

export default function App() {
  const [movies, setMovies] = React.useState(moviesData);

  const classes = useStyles();

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
        <Grid item>
          <Movie
            key={key}
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
