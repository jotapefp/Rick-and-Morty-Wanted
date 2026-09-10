import { Link } from "react-router-dom";
import { useCharacterContext } from "../context/CharacterContext";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { resetSearch } = useCharacterContext();

  return (
    <div className={classes.navbar}>
      <h2>
        <Link to="/" onClick={resetSearch} className={classes.titles}>
          Home
        </Link>
      </h2>
      <h2>
        <Link to="/character" onClick={resetSearch} className={classes.titles}>
          Characters
        </Link>
      </h2>
    </div>
  );
};

export default Navbar;
