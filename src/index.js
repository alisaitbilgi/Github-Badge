import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers/singleReducer";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
  , document.getElementById("root")
);
