import React, {Component} from "react";
import {debounce} from "throttle-debounce";
import {connect} from "react-redux";
import {setResponse} from "../actions/setResponse";
import {Request} from "projects/javascript/Request.js";
import ContentPresenter from "../components/ContentPresenter";
import I from "immutable";


function mainApi(input = "nzakas") {
  let url = {
    repos: `https://api.github.com/users/${input}/repos`,
    users: `https://api.github.com/users/${input}`
  };

  // "Request.get" method is coming from my generic XMLHttpRequest file on node_modules.
  return Promise.all([Request.get(url.repos), Request.get(url.users)]);
}

export class FormContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.callSubmit();
    this.callSubmit = debounce(520, this.callSubmit);
  }

  handleSubmit(evt) {
    this.callSubmit(evt.target.value);
  }

  callSubmit(event) {
    mainApi(event)
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
            <ContentPresenter responseData={this.props.responseObject} />
            <div className="formContainerDiv">
                <input
                    className="inputStyle"
                    onKeyUp={this.handleSubmit}
                    placeholder="Type your GitHub username"
                />
            </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    responseObject: state.get("responseObject", I.Map())
  };
}

export default connect(mapStateToProps)(FormContainer);
