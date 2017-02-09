import React, {Component} from "react";
import socialCoding from "../../public/styles/images/social.png";
import gitBeer from "../../public/styles/images/octopus.png";


export default class ContentContainer extends Component {
  render() {
    let path;
    if (this.props.takeUserName) {
      path = `/users/${this.props.takeUserName}`;
    } else {
      path = "/users";
    }
    return (
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
    );
  }
}

