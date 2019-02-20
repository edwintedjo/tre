import React, { PureComponent } from "react";
import styles from "../style/main.css";

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props;

    return (
      <div className={styles.pokemon}>
        <button
          type="button"
          className={styles.pokemon__sprite}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`
          }}
        />
        <p className={styles.pokemon__name}>{pokemon.name}</p>
      </div>
    );
  }
}

export default Pokemon;
