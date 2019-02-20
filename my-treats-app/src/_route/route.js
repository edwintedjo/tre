import { WELCOME } from "./path";
import { MYPAGE } from "./path";
import { TODO } from "./path";
import { REDUXPAGE } from "./path";
import { POKEDEX } from "./path";


const route = [
    {
        name: "welcome",
        path: WELCOME,
        exact: true,
        disabled: true
    },
    {
        name: "mypage",
        path: MYPAGE,
        exact: true,
        disabled: true
    },
    {
        name: "todo",
        path: TODO,
        exact: true,
        disabled: true
    },
    {
        name: "reduxpage",
        path: REDUXPAGE,
        exact: true,
        disabled: true
    },
    {
        name: "pokedex",
        path: POKEDEX,
        exact: true,
        disabled: true
    },
];

export default route;
