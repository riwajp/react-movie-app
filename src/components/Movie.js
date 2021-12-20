import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Movie = (props) => {
  const params = useParams();
  const [movie, updateMovie] = useState({ id: "null" });
  const [cast, updateCast] = useState("null");
  const [similars, updatesimilars] = useState("null");

  const api_key = "be163b01adc0db7a7fe6e6ea319e1873";
  const base_url = "https://api.themoviedb.org/3/";
  const url = base_url + "movie/" + params.movie_id + "?api_key=" + api_key;

  useEffect(() => {
    if (movie.id === "null") {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          updateMovie(data);
          updatesimilars("null");
          updateCast("null");
          console.log(data);
        });
    }

    if (cast === "null") {
      fetch(
        base_url + "movie/" + params.movie_id + "/credits?api_key=" + api_key
      )
        .then((data) => data.json())
        .then((data) => {
          updateCast(data);
          console.log(cast);
        });
    }

    if (similars === "null") {
      fetch(
        base_url + "movie/" + params.movie_id + "/similar?api_key=" + api_key
      )
        .then((data) => data.json())
        .then((data) => {
          updatesimilars(data);
          console.log(data);
        });
    }
  });
  var similars_render = "";

  if (similars !== "null") {
    similars_render = similars.results.slice(0, 6).map((item) => (
      <Grid item xs={4} sm={3} lg={2} className="now_playing_item">
        <Link to={"/movie/" + item.id}>
          <a
            href="#"
            onClick={() => {
              updateMovie({ id: "null" });
            }}
          >
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

  var cast_render = "";
  if (cast !== "null") {
    cast_render = cast["cast"].slice(0, 12).map((item) => (
      <Grid item xs={3} sm={2} lg={1} style={{ height: "100%" }}>
        <img
          src={"https://image.tmdb.org/t/p/w185" + item.profile_path}
          className="cast_img"
        />
        <br />
        <div className="cast_name">{item.name}</div>
      </Grid>
    ));
  }

  return (
    <div>
      {movie.id === "null" ? (
        ""
      ) : (
        <div className="movie_container">
          <Nav />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} lg={2}>
                {" "}
                <img
                  src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
                  className="movie_img"
                />
              </Grid>
              <Grid item xs={12} sm={8} lg={10}>
                <div className="movie_header">
                  <span className="movie_name">{movie.title}</span>
                  <span className="movie_rating">Rating: 7/10</span>
                  <div className="full_line" />
                </div>
                <div className="movie_desc">
                  {movie.overview}
                  <div className="movie_tagline">"{movie.tagline}"</div>
                </div>
                <div className="movie_details">
                  <span className="movie_details_left">
                    Release: {movie.release_date}
                  </span>
                  <span className="movie_details_right">
                    Spoken Languages:{" "}
                    {movie.spoken_languages.map(
                      (lang) => lang.english_name + ", "
                    )}
                  </span>
                  <br />
                  <span className="movie_details_left">
                    Genre: {movie.genres.map((genre) => genre.name + ", ")}
                  </span>
                  <span className="movie_details_right">
                    Adult Content: {movie.adult === false ? "No" : "Yes"}
                  </span>
                  <br />
                  <Box sx={{ flexGrow: 1 }} className="cast">
                    <span className="movie_details_cast_title">Cast:</span>
                    <Grid container spacing={1}>
                      {cast_render}
                    </Grid>
                  </Box>

                  <br />
                  <br />
                  <Box
                    sx={{ flexGrow: 1 }}
                    style={{ marginTop: 50, minHeight: 200 }}
                  >
                    <div className="now_playing_header">
                      <span className="now_playing_text">Similar Movies</span>
                      <span className="now_playing_see_all_text"></span>
                    </div>
                    <Grid container spacing={2}>
                      {similars_render}
                    </Grid>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Movie;
