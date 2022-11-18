import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import RouteLinks from "./Routes";

function App() {

  return (
   <Router>
     <RouteLinks />
   </Router>
  )
}

export default App
