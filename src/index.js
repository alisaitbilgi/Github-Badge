import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import NavigationBar from "./containers/NavigationBar";
import BadgeContainer from "./containers/BadgeContainer";
import ProfilePresenter from "./components/ProfilePresenter";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import configStore from './store/configStore';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={NavigationBar}>
                <IndexRoute component={App} />
                <Route path="profile" component={ProfilePresenter} />
            </Route>
            <Route path="users(/:username)" component={BadgeContainer} />
        </Router>
    </Provider>
  , document.getElementById("root")
);
