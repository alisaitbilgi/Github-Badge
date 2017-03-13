import React from "react";
import {shallow} from "enzyme";
import NavigationBar from "../../../src/components/NavigationBar";
import {Link} from "react-router";

const wrapper = shallow(<NavigationBar />);

describe("'Profile' component", () => {
  it("should contain related elements ", () => {
    expect(wrapper.contains(
      <div>
        <footer>
          <Link to="/">Home </Link>
          <Link to="/profile">Profile</Link>
        </footer>
      </div>
    )).to.equal(true);
  });
});
