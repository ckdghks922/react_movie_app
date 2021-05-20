import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
};

export default App;
