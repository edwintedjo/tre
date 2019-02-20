import AsyncLoader from "@treats/component/async-loader";

const pokedex = AsyncLoader({ component: import("./pokedex") });

export default pokedex;