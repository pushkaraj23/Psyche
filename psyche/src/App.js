import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/about" Component={About} />


      </Routes>
    </Router>
  );
}

export default App;
