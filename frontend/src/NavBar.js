import "./NavBar.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import ptv_logo from "./images/download.svg";
import profile_img from "./images/profile.png";
import dropdown_img from "./images/dropdown.png";
import SearchBox from "./Components/SearchBox/SearchBox";

export default function () {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <header id="ptv-navbar">
        <a href="#" className="ptv-logo">
          <div className="ptv-logo-img">
            <img src={ptv_logo} id="logo-img" />
          </div>
        </a>
        <div className="ptv-navbar-main">
          <ul>
            <li className="ptv-navbar-main-element">Home</li>
            <li className="ptv-navbar-main-element">TV Shows</li>
            <li className="ptv-navbar-main-element">Movies</li>
            <li className="ptv-navbar-main-element">Channels</li>
            <li
              className="ptv-navbar-main-element"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              Categories
              <span>
                <img
                  src={dropdown_img}
                  style={{
                    height: "0.75rem",
                    width: "0.75rem",
                    marginLeft: "0.4rem",
                  }}
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="ptv-navbar-search">
          <SearchBox />
        </div>
        <div className="ptv-navbar-account">
          <div className="ptv-navbar-account-img">
            <img src={profile_img} style={{ height: "2rem", width: "2rem" }} />
          </div>
          <div className="ptv-navbar-account-name">
            Harshit
            <span>
              <img
                src={dropdown_img}
                style={{
                  height: "0.75rem",
                  width: "0.75rem",
                  marginLeft: "0.4rem",
                }}
              />
            </span>
          </div>
        </div>
      </header>
      {dropdown && (
        <div className="dropdown">
          <Dropdown />
        </div>
      )}
    </>
  );
}
