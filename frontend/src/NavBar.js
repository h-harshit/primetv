import "./NavBar.css";
import ptv_logo from "./images/download.svg";
import profile_img from "./images/profile.png";
import SearchBox from "./Components/SearchBox/SearchBox";

export default function () {
  return (
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
          <li className="ptv-navbar-main-element">Categories</li>
        </ul>
      </div>
      <div className="ptv-navbar-search">
        <SearchBox />
      </div>
      <div className="ptv-navbar-account">
        <div className="ptv-navbar-account-img">
          <img src={profile_img} style={{ height: "2rem", width: "2rem" }} />
        </div>
        <div className="ptv-navbar-account-name">Harshit</div>
      </div>
    </header>
  );
}
