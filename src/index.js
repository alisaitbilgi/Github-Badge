import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import NavigationBar from "./containers/NavigationBar";
import BadgeContainer from "./containers/BadgeContainer";
import ProfilePresenter from "./components/ProfilePresenter";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers/singleReducer";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={NavigationBar}>
                <IndexRoute component={App} />
                <Route path="profile" component={ProfilePresenter} />
            </Route>
            <Route path="/users(/:userName)" component={BadgeContainer} />
        </Router>
    </Provider>
  , document.getElementById("root")
);
