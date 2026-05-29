import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";

import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Albums from "./assets/Pages/Albums";
import Gallery from "./assets/Pages/Gallery";
import Movie from "./assets/Pages/Movie";
import Songs from "./assets/Pages/Songs";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;