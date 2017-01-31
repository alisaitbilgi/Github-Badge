import React, {Component} from "react";
import ContentContainer from './ContentContainer';
import store from "./Store";
import I from "immutable";
import {Request} from "projects/javascript/Request.js";

function mainApi(input="nzakas") {
  let url = [];
  url[1] = `https://api.github.com/users/${input}/repos`;
  url[2] = `https://api.github.com/users/${input}`;

    function xhrApi(url) {
        // "Request.get" method is coming from my generic XMLHttpRequest file on node_modules.
        return Request.get(url);
    }

  return Promise.all([xhrApi(url[1]), xhrApi(url[2])]);
}

function fetchData(query) {
  mainApi(query)
    .then(res => {
      store.dispatch({
        type: "SET_RESPONSE_OBJECT",
        data: res
      });
    })

    // This "catch" never works, i have the explanation...
    .catch(rej => {
      store.dispatch({
        type: "SET_RESPONSE_OBJECT",
        data: rej
      });
    })
}

class ProcessorApi extends Component {

  shouldComponentUpdate(nextProps) {
    return !I.is(this.props.data, nextProps.data);
  }

  componentWillMount() {
    // to render initially and fallback (input="nzakas") to be worked...
    fetchData();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data.get("takeTotalInput") !== this.props.data.get("takeTotalInput")) {
      const input = nextProps.data.get("takeTotalInput");
      fetchData(input)
    }
  }

  render() {
    return <ContentContainer responseData={I.fromJS({responseObject: this.props.data.get("takeResponse")})}/>
  }

}

export default ProcessorApi;