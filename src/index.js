import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import NavigationBar from "./components/NavigationBar";
import Badge from "./components/Badge";
import Profile from "./components/Profile";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import configStore from './store/configStore';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={NavigationBar}>
                <IndexRoute component={App} />
                <Route path="profile" component={Profile} />
            </Route>
            <Route path="users(/:username)" component={Badge} />
        </Router>
    </Provider>
  , document.getElementById("root")
);
