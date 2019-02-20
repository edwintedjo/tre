import AsyncLoader from "@treats/component/async-loader";

const Welcome = AsyncLoader({ component: import("./pokedex") });

export default Welcome;
