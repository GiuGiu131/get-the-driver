import searchIcon from "../assets/icons/search-icon.svg";
import "../styles/search.css";

function Search({ searchItem, onChange }) {
  return (
    <div className="search-input-container">
      <img className="search-icon" src={searchIcon} />
      <input
        type="text"
        value={searchItem}
        onChange={onChange}
        className="search-input"
        placeholder="Type to search"
      />
    </div>
  );
}

export default Search;
