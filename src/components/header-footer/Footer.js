import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer footer-center flex p-10 bg-slate-800 text-white">
      <div>
        <p>Copyright © 2022 - All right reserved by Dine at Dome</p>
      </div>
      <div class="grid grid-flow-col gap-4 font-sans font-light ml-5">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="catalog" className="hover:text-primary">Destinations</Link>
        <Link to="about" className="hover:text-primary">About</Link>
        <Link to="/" className="hover:text-primary"> For Restaurant Owners</Link>
        <Link to="/" className="hover:text-primary">Terms & Conditions</Link>
        <Link to="/" className="hover:text-primary">GDPR Privacy Policy</Link>
        <Link to="/" className="hover:text-primary"> Cookies Policy</Link>
        <Link to="contact" className="hover:text-primary">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
