import React, {Component} from "react";
import FormContainer from "./HomeContainer";
import forkImage from "../../public/styles/images/fork.png";


class App extends Component {

  render() {
    return (
        <div className="main">
            <article>
                <FormContainer/>
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

export default App;
