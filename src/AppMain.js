import logo from "./logo.svg";
import "./App.css";
import { useState, useEfect, useEffect } from "react";
import Section from "./components/Section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />

      <Section type="now_playing" heading="Now Playing" />
      <Section type="top_rated" heading="Top Rated" />
      <Section type="popular" heading="Popular" />
      <Footer />
    </div>
  );
}

export default App;
