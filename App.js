import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Main from "./src/components/Main";

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
