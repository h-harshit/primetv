import "./Dropdown.css";
import IncludedWithPrime from "./images/Included-With-Prime_Card.png";
import AmazonOriginals from "./images/Amazon-Originals_Card.png";
import Movies from "./images/Movies_Card.png";
import TV from "./images/TV-Shows_Card.png";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-categories">
        <div className="dropdown-tiles">
          <h3>Top Categories</h3>
          <div className="tiles-grid">
            <div
              className="tiles"
              style={{ backgroundImage: `url(${IncludedWithPrime})` }}
            >
              Included With Prime
            </div>
            <div
              className="tiles"
              style={{ backgroundImage: `url(${AmazonOriginals})` }}
            >
              Amazon Originals
            </div>
            <div
              className="tiles"
              style={{ backgroundImage: `url(${Movies})` }}
            >
              Movies
            </div>
            <div className="tiles" style={{ backgroundImage: `url(${TV})` }}>
              TV
            </div>
            <div
              className="tiles"
              style={{ backgroundImage: `url(${IncludedWithPrime})` }}
            >
              Kids
            </div>
          </div>
        </div>
      </div>
      <div className="cat-separator"></div>
      <div className="dropdown-languages-categories">
        <div className="all-languages">
          <h3>Audio languages</h3>
          <ul className="audio-languages-list">
            <li className="audio-languages-element">English</li>
            <li className="audio-languages-element">Hindi</li>
            <li className="audio-languages-element">Telegu</li>
            <li className="audio-languages-element">Tamil</li>
            <li className="audio-languages-element">Kannada</li>
            <li className="audio-languages-element">Malayalam</li>
            <li className="audio-languages-element">Punjabi</li>
            <li className="audio-languages-element">Marathi</li>
            <li className="audio-languages-element">Bengali</li>
            <li className="audio-languages-element">Gujarati</li>
          </ul>
        </div>
        <div className="other-categories">
          <h3>Other categories</h3>
          <ul className="other-categories-list">
            <li className="other-categories-element">Drama</li>
            <li className="other-categories-element">Action and adventure</li>
            <li className="other-categories-element">Romance</li>
            <li className="other-categories-element">Comedy</li>
            <li className="other-categories-element">Suspense</li>
            <li className="other-categories-element">Horror</li>
            <li className="other-categories-element">Award Winners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
