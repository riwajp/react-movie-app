import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Search = () => {
  const params = useParams();
  const [movies, updateMovies] = useState("null");

  const api_key = "be163b01adc0db7a7fe6e6ea319e1873";
  const base_url = "https://api.themoviedb.org/3/";
  const url =
    base_url + "search/movie" + "?api_key=" + api_key + "&query=" + params.tag;

  console.log(url);

  useEffect(() => {
    if (movies === "null") {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          updateMovies(data);
        });
    }
  });

  var results_render = "";

  if (movies !== "null") {
    results_render = movies.results.map((item) => (
      <Grid item xs={3} sm={2} lg={2} className="now_playing_item">
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
      <Nav updateMovies={updateMovies} />
      <div className="see_all_title">Results for : "{params.tag}"</div>
      <Box sx={{ flexGrow: 1 }} style={{ padding: 10 }}>
        <Grid container spacing={2}>
          {results_render}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};
export default Search;
