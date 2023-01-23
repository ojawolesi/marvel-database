import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import routes
import Home from "./routes/Home";
import About from "./routes/About";
import HeroDetails from "./routes/HeroDetails";

// Import components
import BrandNavbar from "./components/BrandNavbar";

function App() {
  return (
    <Router>
      <BrandNavbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"about"} element={<About />} />
        <Route path={"/:id"} element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
