import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const SeeAll = () => {
  const [movies, update_movies] = useState("null");
  const params = useParams();

  const category_dict = {
    now_playing: "Now Playing",
    popular: "Popular",
    top_rated: "Top Rated",
  };

  const api_key = "be163b01adc0db7a7fe6e6ea319e1873";
  const base_url = "https://api.themoviedb.org/3/";

  useEffect(() => {
    if (movies === "null") {
      const url = base_url + "movie/" + params.category + "?api_key=" + api_key;
      fetch(url)
        .then((data) => data.json())
        .then((data) => update_movies(data));
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
      <Nav />
      <div className="see_all_title">{category_dict[params.category]}</div>
      <Box sx={{ flexGrow: 1 }} style={{ padding: 10 }}>
        <Grid container spacing={2}>
          {movies_render}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default SeeAll;
