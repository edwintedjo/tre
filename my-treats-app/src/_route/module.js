import Welcome from "@page/welcome";
import Mypage from "@page/mypage";
import Todo from "@page/todo";
import Reduxpage from "@page/reduxpage"
import Pokedex from "@page/pokedex"



import { WELCOME } from "./path";
import { MYPAGE } from "./path";
import { TODO } from "./path";
import { REDUXPAGE } from "./path";
import { POKEDEX } from "./path"




const module = {
    [WELCOME]: Welcome,
    [MYPAGE]: Mypage,
    [TODO]: Todo,
    [REDUXPAGE] : Reduxpage,
    [POKEDEX] : Pokedex
};

export default module;
