import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Genre = () => {
  const [movies, update_movies] = useState("null");
  const params = useParams();
  const [page, updatePage] = useState("1");
  const genre_dict = {
    Action: "28",
    Comedy: "35",
    Documentary: "99",
    Drama: "18",
    Horror: "27",
    Mystery: "9648",
    Romance: "10749",
    "Sci-Fi": "878",
    Thriller: "53",
    Fantasy: "14",
  };
  const pages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const pages_render = pages.map((tpage) => (
    <a href="#">
      <span
        className="page_no"
        style={{ backgroundColor: tpage === page ? "grey" : "" }}
        onClick={() => {
          updatePage(tpage);
          update_movies("null");
        }}
      >
        {tpage}
      </span>
    </a>
  ));
  const api_key = "be163b01adc0db7a7fe6e6ea319e1873";
  const base_url = "https://api.themoviedb.org/3/";
  const url =
    base_url +
    "discover/movie?api_key=" +
    api_key +
    "&with_genres=" +
    genre_dict[params.genre] +
    "&page=" +
    page;

  useEffect(() => {
    if (movies === "null") {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          update_movies(data);
          console.log(data);
        });
    }
  });

  var movies_render = "";
  if (movies !== "null") {
    movies_render = movies.results.map((item) => (
      <Grid item xs={4} sm={3} lg={2} className="now_playing_item">
        <Link to={"/movie/" + item.id}>
          <a href="#">
            <div className="now_playing_poster_container">
              <img
                src={"https://image.tmdb.org/t/p/w185" + item.poster_path}
                className="now_playing_poster"
              />
            </div>
            <span className="now_playing_movie_title">{item.title}</span>
          </a>
        </Link>
      </Grid>
    ));
  }
  return (
    <div>
      <Nav update_movies={update_movies} />
      <div className="see_all_title">{params.genre}</div>
      <br />
      <Box sx={{ flexGrow: 1 }} style={{ padding: 10 }}>
        <Grid container spacing={2}>
          {movies_render}
        </Grid>
      </Box>
      <div className="pages">{pages_render}</div>
      <Footer />
    </div>
  );
};

export default Genre;
