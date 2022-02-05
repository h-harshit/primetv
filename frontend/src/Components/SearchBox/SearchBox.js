import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-icon">
        <i
          class="lni lni-search-alt"
          style={{ "font-size": "1.2rem", color: "white" }}
        ></i>
      </div>
      <form>
        <input type="text" placeholder="Search" className="search-input-box" />
      </form>
    </div>
  );
};

export default SearchBox;
