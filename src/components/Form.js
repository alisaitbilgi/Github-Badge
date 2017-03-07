import React from "react";
import {connect} from "react-redux";
import {setUserName} from "../actions/setUserName";
import {setTempUserName} from "../actions/setTempUserName";
import {store} from "../store/configStore";

export function Form({username}) {
  store.dispatch(setTempUserName(username));

  return (
      <div className="form-container">
          <input
              value={username}
              className="inputStyle"
              onChange={function(evt) {store.dispatch(setUserName(evt.target.value));}}
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

export default connect(mapStateToProps)(Form);

