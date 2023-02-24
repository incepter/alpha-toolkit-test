import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, rootReducer } from "./rootReducer";
import "./styles.css";
import Toggle from "./Toggle";

const store = createStore(rootReducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
        <p>A simple toggle:</p>
        <Toggle />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
