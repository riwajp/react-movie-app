import { useState, useEffect } from "react";

const Main = () => {
  const movies = [
    {
      name: "Nobody",
      tagline: "Never underestimate a nobody",
      image:
        "https://sm.ign.com/ign_in/feature/n/nobody-bob/nobody-bob-odenkirk-explains-how-he-went-full-john-wick_h1r2.jpg",
    },
    {
      name: "Spider-Man: No Way Home",
      tagline: "The Multiverse unleashed",
      image: "https://images4.alphacoders.com/115/thumb-1920-1159896.jpg",
    },
    {
      name: "The Hobbit: An Unexpected Journey",
      tagline: "From the smallest beginnings come the greatest legends",
      image: "https://wallpaperaccess.com/full/842535.jpg",
    },
  ];
  const [current_movie, update_current_movie] = useState(0);
  const [int_set, update_int_set] = useState(false);

  const interval = setInterval(() => {
    if (int_set === false) {
      if (current_movie + 1 === movies.length) {
      } else {
        update_current_movie(current_movie + 1);
      }
    }
  }, 3000);

  const main_btns_render = movies.map((item) => (
    <div
      className="main_dot"
      onClick={() => update_current_movie(movies.indexOf(item))}
      style={{
        backgroundColor: current_movie === movies.indexOf(item) ? "white" : "",
      }}
    />
  ));
  return (
    <div>
      <div className="main_container">
        <img src={movies[current_movie].image} className="main_img" />
        <div className="main_contents">
          <span className="main_movie_name">{movies[current_movie].name}</span>
          <div className="short_line" />
          <br />
          <span className="main_movie_tagline">
            {movies[current_movie].tagline}
          </span>
        </div>
        <div className="main_btns">{main_btns_render}</div>
      </div>
    </div>
  );
};

export default Main;
