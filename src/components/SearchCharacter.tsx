type SearchProps = {
  loadCharacter: (characterName: string, status: string) => Promise<void>;
};

import { useState, type KeyboardEvent } from "react";
import classes from "./SearchCharacter.module.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ loadCharacter }: SearchProps) => {
  const [characterName, setCharacterName] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = () => {
    loadCharacter(characterName, status);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={classes.search}>
      <h2>Search a Character:</h2>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Name of the character"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className={classes.searchSelect}>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Any status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
