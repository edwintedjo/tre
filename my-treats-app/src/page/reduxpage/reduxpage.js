import React from "react";
import { render } from "react-dom";
import AsyncComponent from "@treats/component/async-component";

import reducer from "@redux/reduxpage/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./app";

const store = createStore(reducer);

const Testredux = () => (
    <Provider store={store}><App /></Provider>
);

export default AsyncComponent(module, Testredux);
