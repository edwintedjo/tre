import React from "react";
import { Provider } from "react-redux";
import AsyncComponent from "@treats/component/async-component";
import store from "../../_redux/welcome/store/store";
import User from "./components/user";

class welcome extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <User />
      </Provider>
    );
  }
}

export default AsyncComponent(module, welcome);
