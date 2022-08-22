import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={NetflixShow} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
