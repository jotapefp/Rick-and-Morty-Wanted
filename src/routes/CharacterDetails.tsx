import { type CharacterProps } from "../types/Characters";
import { type Episode } from "../types/Episode";
import classes from "./CharacterDetails.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterProps | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

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

  useEffect(() => {
    if (!character) return;

    const fetchEpisodes = async () => {
      const episodeIds = character.episode.map((url) => url.split("/").pop());

      const res = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`,
      );
      const data = await res.json();

      setEpisodes(Array.isArray(data) ? data : [data]);
    };

    fetchEpisodes();
  }, [character]);

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
            Species: <span>{character.species}</span>
          </p>
          <p>
            Gender: <span>{character.gender}</span>
          </p>
          <p>
            Status: <span>{character.status}</span>
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

        <h3 className={classes.episodesTitle}>Episodes</h3>
        <ul className={classes.episodesList}>
          {episodes.map((ep) => (
            <li key={ep.id}>
              <span className={classes.episodeCode}>{ep.episode}</span>
              {" — "}
              {ep.name}
              <span className={classes.episodeDate}> ({ep.air_date})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
