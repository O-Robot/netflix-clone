import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="show" element={<NetflixShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
