import React, {Component} from "react";
import {connect} from "react-redux";
import {setUserName} from "../actions/setUserName";
import {setTempUserName} from "../actions/setTempUserName";
import socialCoding from "../../public/styles/images/social.png";
import gitBeer from "../../public/styles/images/octopus.png";
import {bindActionCreators} from 'redux';

import debounce from "lodash.debounce";


export class Home extends Component {

  constructor(props) {
    super(props);
    this.onUserChange = this.onUserChange.bind(this);
    this.onAssignTempUserName = debounce(this.onAssignTempUserName.bind(this), 600);
  }

  onAssignTempUserName(username) {
    this.props.assignTempUsername(username);
  }

  onUserChange(evt) {
    this.props.userChange(evt.target.value);
  }

  render() {

    let path;
    if (this.props.tempUsername) {
      console.log(this.props.tempUsername);
      path = `/users/${this.props.tempUsername}`;
    } else {
      path = "/users";
    }

    this.onAssignTempUserName(this.props.username);

    return (
        <div className="article">
          <div className="content-container">
            <div className="badge-side">
              <div className="row">
                <img className="social-coding-image" src={socialCoding} alt="social_coding" />
              </div>
              <div className="row">
                <iframe src={path} className="content" scrolling="no" />
              </div>
            </div>
            <div className="image-side">
              <img className="octopus-image" src={gitBeer} alt="octopus" />
            </div>
          </div>
          <div className="form-container">
              <input
                  value={this.props.username}
                  className="inputStyle"
                  onChange={this.onUserChange}
                  placeholder="Type your GitHub username"
              />
          </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    username: state.get("username", ""),
    tempUsername: state.get("tempUsername", "")
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userChange: setUserName,
    assignTempUsername: setTempUserName
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
