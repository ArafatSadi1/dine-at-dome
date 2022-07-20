import { Routes, Route } from "react-router-dom";
import Footer from "./components/header-footer/Footer";
import NavBar from "./components/header-footer/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Destination from "./components/pages/Destination";
import Home from "./components/pages/home/Home";
import ServiceDetails from "./components/pages/home/service-section/ServiceDetails";
import Media from "./components/pages/Media";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Destination />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Media />} />
        <Route path="contact" element={<Contact />} />
        <Route path="serviceDetails/:id" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
