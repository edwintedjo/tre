import React, { Component } from "react";
import Pokemon from "./pokemon";
import Search from "./search";
import styles from "../style/main.css";

class Page extends Component {
  componentDidMount() {
    this.props.getPokemons();
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value);
  }

  render() {
    let { displayedPokemons, isFetched, error } = this.props;

    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className={styles.pokemons__item} key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return (
      <div className={styles.page}>
        {error && <div className={styles.page__error}>{error}</div>}
        <div className={styles.page__search}>
          <Search onChange={this.handleSearch.bind(this)} />
        </div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.pokemons}>{pokemons}</ul>
        )}
      </div>
    );
  }
}

export default Page;
