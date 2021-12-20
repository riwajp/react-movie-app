import logo from "./logo.svg";
import "./App.css";
import "./AppMobile.css";

import { useState, useEfect, useEffect } from "react";
import Section from "./components/Section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import AppMain from "./AppMain";
import SeeAll from "./components/SeeAll";
import Search from "./components/Search";
import Genre from "./components/Genre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppMain />} />
        <Route path="/movie/:movie_id" element={<Movie />} />
        <Route path="/see_all/:category/" element={<SeeAll />} />
        <Route path="/search/:tag/" element={<Search />} />
        <Route path="/genre/:genre/" element={<Genre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
