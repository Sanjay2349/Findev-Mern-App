import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
function Navbar() {
  function handleScroll() {
    const offset = window.scrollY;
    const navbar = document.querySelector(".navbar");
    console.log(navbar);
    if (offset > 0) {
      navbar.style.position = "fixed";
    } else {
      navbar.style.position = "";
    }
    console.log(offset);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="navbar">
      <div className="title">
        <h1 className="titlename">
          Fin<span>Dev</span>.
        </h1>
      </div>
      <ul className="Links">
        <li className="eachlink">
          <Link to="/home">Questions</Link>
        </li>
        <li className="eachlink">
          <Link to="/project">Projects</Link>
        </li>
        <li className="eachlink">
          <Link to="/tags">Tags</Link>
        </li>
      </ul>
      <div className="Searchbar">
        <input type="text" name="" id="" placeholder="Search" />
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="Auth">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          {" "}
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
