import { WELCOME } from "./path";
import { POKEDEX } from "./path";

const route = [
  {
    name: "welcome",
    path: WELCOME,
    exact: true,
    disabled: true
  },
  {
    name: "pokedex",
    path: POKEDEX,
    exact: true,
    disabled: true
  }
];

export default route;
