import React, {Component} from "react";
import store from "./Store";
import {debounce} from 'throttle-debounce';


class FormContainer extends Component {

    componentWillMount() {
        this.callSubmit = debounce(500, this.callSubmit);
    }

    handleChange(e) {
        store.dispatch({
            type: "SET_INPUT_CHANGE",
            data: e.target.value
        });
    };

    handleSubmit(evt) {
        this.callSubmit(evt.target.value);
    };

    callSubmit(event) {
        store.dispatch({
            type: "SET_TOTAL_INPUT",
            data: event
        });
    };


  render() {
    return(
      <div className="formContainerDiv">
          <input
            onChange={this.handleChange}
            onKeyUp={this.handleSubmit.bind(this)}
            className="inputStyle"
            placeholder="Type your GitHub username"
          />
      </div>
    );
  }
}

export default FormContainer;