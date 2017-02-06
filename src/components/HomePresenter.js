import React, {Component} from "react";

class ContentContainer extends Component {
  render() {
    let path;
    if (this.props.takeUserName) {
      path = `/users/${this.props.takeUserName}`;
    } else {
      path = "/users";
    }
    return (
        <iframe src={path} className="content" scrolling="no" />
    );
  }
}

export default ContentContainer;
