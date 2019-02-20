import React from "react";
import { Provider } from "react-redux";
import AsyncComponent from "@treats/component/async-component";
import configureStore from "../../_redux/pokedex/store/configure-store";
import Page from "../../page/pokedex/containers/page";
import "./style/main.css";

const store = configureStore();

class pokedex extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Page />
        </Provider>
        ,
      </div>
    );
  }
}

export default AsyncComponent(module, pokedex);
