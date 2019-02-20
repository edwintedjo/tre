import Welcome from "@page/welcome";
import Pokedex from "@page/pokedex";

import { WELCOME } from "./path";
import { POKEDEX } from "./path";

const module = {
  [WELCOME]: Welcome,
  [POKEDEX]: Pokedex
};

export default module;
