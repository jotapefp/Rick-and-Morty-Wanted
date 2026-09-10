import { type CharacterProps } from "../types/Characters";
import classes from "./CharacterDetails.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterProps | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      const data = await res.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div className={classes.characterDetails}>Loading...</div>;
  }

  return (
    <div className={classes.characterDetails}>
      <div
        className={`${classes.detailsCard} ${classes[character.status.toLowerCase()]}`}
      >
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />

        <div className={classes.infoGrid}>
          <p>
            Status: <span>{character.status}</span>
          </p>
          <p>
            Species: <span>{character.species}</span>
          </p>
          <p>
            Gender: <span>{character.gender}</span>
          </p>

          <p>
            Origin: <span>{character.origin?.name}</span>
          </p>
          <p>
            Last Location: <span>{character.location?.name}</span>
          </p>
          <p>
            Appearances: <span>{character.episode.length}</span>
          </p>
          <p>
            Type: <span>{character.type || "Unknown"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
