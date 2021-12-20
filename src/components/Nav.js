import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const [search_term, update_search_term] = useState("");
  const categories = [
    "Action",
    "Sci-Fi",
    "Drama",
    "Documentary",
    "Fantasy",
    "Comedy",
    "Thriller",
    "Romance",
    "Mystery",
    "Horror",
  ];
  const categories_render = categories.map((cat) => (
    <Link
      to={"/genre/" + cat}
      onClick={() => {
        if (props.update_movies) {
          props.update_movies("null");
        }
      }}
    >
      <div className="nav_categories_cat">{cat}</div>
    </Link>
  ));
  return (
    <div>
      <div className="nav_container">
        <span className="nav_title">MoviesDB</span>
        <span className="nav_home">
          <Link to="/">Home</Link>
        </span>
        <div className="nav_categories">
          <span className="nav_categories_text">Categories</span>
          <span className="nav_categories_contents">{categories_render}</span>
        </div>
        <span className="nav_search_container">
          <input
            className="nav_search"
            value={search_term}
            onChange={(e) => update_search_term(e.target.value)}
          />
          <a href="">
            <Link to={"/search/" + search_term}>
              <button
                className="nav_search_btn"
                onClick={() => {
                  if (props.updateMovies) {
                    props.updateMovies("null");
                  }
                }}
              >
                Search
              </button>
            </Link>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Nav;
