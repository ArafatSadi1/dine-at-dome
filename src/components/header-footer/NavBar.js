import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="catalog">Destinations</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="/">Media</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className={location.pathname === '/' ? 'navbar z-50 absolute bg-transparent text-white px-0 lg:px-16' : 'navbar z-50 absolute bg-white text-black px-0 lg:px-16'}>
      <div class="navbar-start">
        <Link to="/">
          {location.pathname === '/' ? <img width={100} src="https://dineatdome.com/wp-content/uploads/2020/06/DATD_logo_just_txt3.png" alt="" />:<p className="text-xl">Dine at Dome</p>}
        </Link>
      </div>
      <div class="hidden lg:navbar-center"></div>
      <div class="navbar-end">
        <div class="dropdown dropdown-left">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-mono text-black"
          >
            {items}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-sans">{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
