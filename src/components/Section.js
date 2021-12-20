import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Section = (props) => {
  const [section, update_section] = useState({ results: "null" });
  const api_key = "be163b01adc0db7a7fe6e6ea319e1873";
  const base_url = "https://api.themoviedb.org/3/";
  const section_url = base_url + "movie/" + props.type + "?api_key=" + api_key;

  useEffect(() => {
    if (section.results === "null") {
      fetch(section_url)
        .then((data) => data.json())
        .then((data) => {
          update_section(data);
          console.log(data);
        });
    }
  });

  var section_render;
  if (section.results !== "null") {
    section_render = section.results.slice(0, 6).map((item) => (
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
      <Box sx={{ flexGrow: 1 }} className="now_playing_container">
        <div className="now_playing_header">
          <span className="now_playing_text">{props.heading}</span>
          <span className="now_playing_see_all_text">
            <a href="#">
              <Link to={"see_all/" + props.type}>See All</Link>
            </a>
          </span>
        </div>
        <Grid container spacing={2}>
          {section_render}
        </Grid>
      </Box>
    </div>
  );
};

export default Section;
