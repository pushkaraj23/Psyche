import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import services from "./pages/Services";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/about" Component={About} />
        <Route path="/Services" Component={services} />


      </Routes>
    </Router>
  );
}

export default App;
