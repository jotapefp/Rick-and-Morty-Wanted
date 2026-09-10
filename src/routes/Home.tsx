import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <h2>About Rick and Morty</h2>
      <p>
        Rick and Morty is an adult-oriented animated sci-fi comedy series
        created in 2013 by Justin Roiland and Dan Harmon. The plot follows the
        adventures of Rick Sanchez, a brilliant alcoholic scientist, and his
        anxious grandson Morty Smith, who travel across various parallel
        realities and other planets in Rick's spaceship—a flying saucer.
      </p>

      <h2>About the project</h2>
      <p>
        Welcome to Rick and Morty's Wanted! To get started, you can explore
        characters from the Rick and Morty universe by clicking the "Characters"
        tab; you will be directed to the character search page. After entering a
        character's name, you will have access to their information. If you wish
        to see more, you can click to view further details, including their
        image, status, species, and much more. Enjoy exploring!
      </p>
    </div>
  );
};

export default Home;
