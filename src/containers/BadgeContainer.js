import React, {Component} from "react";
import {connect} from "react-redux";
import {setResponse} from "../actions/setResponse";
import {Request} from "projects/javascript/Request.js";
import BadgePresenter from "../components/BadgePresenter";
import I from "immutable";


function mainApi(input = "nzakas") {
  let url = {
    repos: `https://api.github.com/users/${input}/repos`,
    users: `https://api.github.com/users/${input}`
  };

  // "Request.get" method is coming from my generic XMLHttpRequest file on node_modules.
  return Promise.all([Request.get(url.repos), Request.get(url.users)]);
}

export class BadgeContainer extends Component {

  componentWillMount() {
    mainApi(this.props.params.userName)
      .then(res => {
        this.props.dispatch(setResponse(res));
      })
      .catch(rej => {
        this.props.dispatch(setResponse(rej));
      });
  }

  render() {
    return (
        <div>
            <BadgePresenter responseData={this.props.responseObject} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    responseObject: state.get("responseObject", I.Map())
  };
}

export default connect(mapStateToProps)(BadgeContainer);
