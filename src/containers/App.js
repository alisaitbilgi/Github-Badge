import React, {Component} from "react";
import HomeContainer from "./HomeContainer";
import forkImage from "../../public/styles/images/fork.png";


export default class App extends Component {

  render() {
    return (
        <div className="main">
            <article>
                <HomeContainer/>
            </article>
            <nav>
                <a href={"https://github.com/alisaitbilgi/GithubBadge-React-Redux"}>
                    <img className="forkImage" alt="fork-me" src={forkImage} />
                </a>
            </nav>
            <aside />
        </div>
    );
  }
}

