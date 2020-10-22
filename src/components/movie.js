import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "15px"
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

export default function Movie(props) {
  const classes = useStyles();
  const { movie, handleAction, handleDelete, id } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Movie
        </Typography>
        <Typography variant="h5" component="h2">
          {movie.name}
        </Typography>
        <Rating
          name="read-only"
          value={movie.rating}
          readOnly
          precision={0.1}
        />
        <Typography variant="body2" component="p">
          Cast:{" "}
          {movie.actors.map((actor, index) => (
            <span key={index}>
              {actor}
              {index !== movie.actors.length - 1 ? ", " : ". "}
            </span>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justify="space-evenly">
          {movie.like ? (
            <FavoriteIcon
              className={classes.likeButton}
              onClick={() => handleAction("like", id)}
            />
          ) : (
            <FavoriteBorderIcon
              className={classes.likeButton}
              onClick={() => handleAction("like", id)}
            />
          )}
          <Button size="small" onClick={() => handleAction("watchlist", id)}>
            {movie.watchlist ? "Remove from watchlist" : "Add to watchlist"}
          </Button>
          <Button size="small" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
