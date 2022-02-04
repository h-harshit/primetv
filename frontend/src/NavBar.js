import "./NavBar.css";
import ptv_logo from "./download.svg";

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
    </header>
  );
}
