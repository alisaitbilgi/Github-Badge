import React from "react";
import {connect} from "react-redux";
import socialCoding from "../../public/styles/images/social.png";
import gitBeer from "../../public/styles/images/octopus.png";
import Form from "./Form";

export function Home(props) {
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
      <Form />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tempUsername: state.get("tempUsername", "")
  };
}


export default connect(mapStateToProps)(Home);
