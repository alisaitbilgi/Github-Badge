/* eslint-disable */

import React from "react";
import {shallow} from "enzyme";
import {Form} from "../../../src/components/Form";

describe("'Form' component", () => {
  const props = {
    username:"alisaitbilgi",
    assignTempUsername: function (args) {}
  };
  let wrapper;
  const spy = sinon.spy(props, "assignTempUsername");
  it("should call assignTempUsername function exactly once, for its each render", () => {
    wrapper = shallow(Form(props));
    expect(spy.calledOnce).to.equal(true);
  });
  it("should call assignTempUsername function with provided arguments", () => {
    expect(spy.withArgs(props.username).called).to.equal(true);
  });

});


