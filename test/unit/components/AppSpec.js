
import React from "react";
import {shallow} from "enzyme";
import App from "../../../src/components/App";
import Home from "../../../src/components/Home";
import forkImage from "../../../public/styles/images/fork.png";

const wrapper = shallow(<App />);

describe("'App' component", () => {
  it("should contain related elements ", () => {
    expect(wrapper.contains(
      <div className="main">
        <div className="sidebar">
          <a href={"https://github.com/alisaitbilgi/Github-Badge"}>
            <img className="fork-image" alt="fork-me" src={forkImage} />
          </a>
        </div>
        <div className="article">
          <Home/>
        </div>
        <div className="sidebar" />
      </div>
    )).to.equal(true);
  });
});
