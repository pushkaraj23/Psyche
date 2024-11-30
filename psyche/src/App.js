import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/about" Component={About} />
        <Route path="/Services" Component={Services} />
        <Route path="/contact" Component={Contact} />


      </Routes>
    </Router>
  );
}

export default App;
