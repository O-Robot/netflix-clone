import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import TopScroll from "./components/TopScroll/TopScroll";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopScroll />
        <Routes>
          <Route index element={<Home />} />
          <Route path="shows" element={<NetflixShow />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
