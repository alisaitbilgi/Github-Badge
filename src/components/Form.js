/* eslint-disable */

import React from "react";
import {connect} from "react-redux";
import {setUserName} from "../actions/setUserName";
import {setTempUserName} from "../actions/setTempUserName";
import {bindActionCreators} from "redux";

export function Form(props) {
  props.assignTempUsername(props.username);

  return (
      <div className="form-container">
          <input
              value={props.username}
              className="inputStyle"
              onChange={(evt) => {props.userChange (evt.target.value)}}
              placeholder="Type your GitHub username"
          />
      </div>
  );
}

function mapStateToProps(state) {
  return {
    username: state.get("username", ""),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userChange: setUserName,
    assignTempUsername: setTempUserName
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

