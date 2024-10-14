import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/services"
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Services} />
        <Route path="/contact" Component={ContactUs} />

      </Routes>
    </Router>
  );
}

export default App;
