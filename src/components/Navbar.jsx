import React, { useState, useEffect } from "react";
import {
  MenuIcon,
  XCircleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import logo from "../assets/logo2.svg";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const darkMode = "dark";
  const lightMode = "light";
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  // console.log(darkQuery, "darkQuery");
  const clickMenu = () => {
    setNavbar(!navbar);
    // console.log("clicked");
  };

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch();

  const changeMode = () => {
    setTheme(theme == darkMode ? lightMode : darkMode);
  };

  useEffect(() => {
    switch (theme) {
      case darkMode:
        element.classList.add("dark");
        localStorage.setItem("theme", darkMode);

        break;
      case lightMode:
        element.classList.remove("dark");
        localStorage.setItem("theme", lightMode);

        break;
      default:
        localStorage.removeItem("theme");

        break;
    }
  }, [theme]);
  return (
    <div className="main-nav fixed bg-[#f8ede30d] drop-shadow-3xl dark:border-[#24222e] border-[#dad2dc] border-b-2 w-screen z-10 h-20 mx-auto px-4 flex justify-between items-center dark:text-light text-dark">
      <a href="">
        <img src={logo} alt="Website Logo" height="120" width="75" />
      </a>
      <ul className="hidden md:flex">
        <li className="nav-item p-4">
          <a href=""> Home</a>
        </li>
        <li className="nav-item p-4">
          <a href="#about">About</a>
        </li>
        <li className="nav-item p-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item p-4">
          <a href="#contact">Contact</a>
        </li>
        <div onClick={changeMode}>
          {theme == "light" ? (
            <li className="mr-4 p-3 cursor-pointer">
              <MoonIcon className="w-8" />
            </li>
          ) : (
            <li className="mr-4 p-3 cursor-pointer">
              <SunIcon className="w-8" />
            </li>
          )}
        </div>
      </ul>

      <div className="md:hidden" onClick={clickMenu}>
        {!navbar ? (
          <MenuIcon className="text-black dark:text-white cursor-pointer w-7" />
        ) : (
          <XCircleIcon className="text-black dark:text-white cursor-pointer w-7" />
        )}
      </div>

      <ul
        className={
          !navbar
            ? "hidden"
            : " dark:bg-[#4e4c4c42] transition-all mobile-nav bg-[#e8e3e3a6] flex-col border-b-2 border-[#24222e] flex fixed items-center dark:text-white text-black inset-0 justify-center z-100 mt-20 p-10 h-96"
        }
      >
        <li className="nav-item p-4">
          <a href=""> Home</a>
        </li>
        <li className="nav-item p-4">
          <a href="#about">About</a>
        </li>
        <li className="nav-item p-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item p-4">
          <a href="#contact">Contact</a>
        </li>
        <div onClick={changeMode}>
          {theme == "light" ? (
            <li className="mr-4 p-3 cursor-pointer">
              <MoonIcon className="w-8" />
            </li>
          ) : (
            <li className="mr-4 p-3 cursor-pointer">
              <SunIcon className="w-8" />
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
