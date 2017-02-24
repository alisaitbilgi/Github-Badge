import React from "react";
import {connect} from "react-redux";
import {setUserName} from "../actions/setUserName";
import {setTempUserName} from "../actions/setTempUserName";
import socialCoding from "../../public/styles/images/social.png";
import gitBeer from "../../public/styles/images/octopus.png";
import {bindActionCreators} from 'redux';


export function Home(props) {

    function onAssignTempUserName(username) {
      props.assignTempUsername(username);
    }

    function onUserChange(evt) {
      props.userChange(evt.target.value);
    }

    onAssignTempUserName(props.username);

    return (
        <div className="article">
          <div className="content-container">
            <div className="badge-side">
              <div className="row">
                <img className="social-coding-image" src={socialCoding} alt="social_coding" />
              </div>
              <div className="row">
                <iframe src={props.tempUsername ? `/users/${props.tempUsername}` : "/users"} className="content" scrolling="no" />
              </div>
            </div>
            <div className="image-side">
              <img className="octopus-image" src={gitBeer} alt="octopus" />
            </div>
          </div>
          <div className="form-container">
              <input
                  value={props.username}
                  className="inputStyle"
                  onChange={onUserChange}
                  placeholder="Type your GitHub username"
              />
          </div>
        </div>
    );
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
