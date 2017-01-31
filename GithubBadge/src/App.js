import React, { Component } from 'react';
import FormContainer from './FormContainer';
import ProcessorApi from './ProcessorApi';
import store from './Store';
import I from "immutable";

const forkImage = require("/Users/alibilgi/Desktop/projects/GithubBadge/public/styles/images/fork.png");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {main: store.getState()};
    store.subscribe(() => {
      this.setState({main: store.getState()});
    });
  }

  render() {
    return(
      <div className="main">
        <article>
          <ProcessorApi data={I.fromJS({
            takeTotalInput: this.state.main.get("totalInput", ""),
            takeResponse: this.state.main.get("responseObject", I.Map())
            })}
          />
          <FormContainer takeCurrentInput={this.state.main.get("currentValue", "")}/>
        </article>
        <nav>
          <a href={"https://github.com/alisaitbilgi"}>
              <img className="forkImage" src={forkImage} alt="empty"/>
          </a>
        </nav>
        <aside> </aside>
      </div>
    )
  }
}

export default App;
