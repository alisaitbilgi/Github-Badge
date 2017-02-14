import React, {Component} from "react";
import {connect} from "react-redux";
import {setUserName} from "../actions/setUserName";
import socialCoding from "../../public/styles/images/social.png";
import gitBeer from "../../public/styles/images/octopus.png";
import {bindActionCreators} from 'redux';


export class Home extends Component {

  onUserChange(evt) {
    this.props.onUserChange(evt.target.value);
  }

  render() {

    let path;
    if (this.props.username) {
      path = `/users/${this.props.username}`;
    } else {
      path = "/users";
    }

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
                  onChange={this.onUserChange.bind(this)}
                  placeholder="Type your GitHub username"
              />
          </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    username: state.get("username", "")
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUserChange: setUserName
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
