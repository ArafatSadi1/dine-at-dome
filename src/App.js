import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Destination from "./components/pages/Destination";
import Home from "./components/pages/home/Home";
import Media from "./components/pages/Media";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Destination />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Media />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
