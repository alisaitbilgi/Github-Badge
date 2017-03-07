import React from "react";
import {shallow} from "enzyme";
import Profile from "../../../src/components/Profile";

const wrapper = shallow(<Profile />);

describe("'Profile' component", () => {
  it("should render 'a tag' whose class name is 'centered' ", () => {
    expect(wrapper.contains(
        <div className="main">
            <a className="centered" href="https://github.com/alisaitbilgi/GithubBadge-React-Redux">Source Code</a>
        </div>
    )).to.equal(true);
  });
});
