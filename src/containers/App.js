import React, {Component} from "react";
import HomeContainer from "./HomeContainer";
import forkImage from "../../public/styles/images/fork.png";


export default class App extends Component {

  render() {
    return (
        <div className="main">
            <div className="sidebar">
              <a href={"https://github.com/alisaitbilgi/GithubBadge-React-Redux"}>
                <img className="fork-image" alt="fork-me" src={forkImage} />
              </a>
            </div>
            <div className="article">
                <HomeContainer/>
            </div>
            <div className="sidebar"></div>
        </div>
    );
  }
}

