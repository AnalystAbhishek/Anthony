import React from "react";

import Chat from "./components/chat/chat.component";
import Join from "./components/join/join.component";
import Home from "./components/home/home.component";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
