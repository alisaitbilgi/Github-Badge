
import React from "react";
import {shallow} from "enzyme";
import {Form} from "../../../src/components/Form";
import {store} from "../../../src/store/configStore";

const spy = sinon.spy(store, "dispatch");

describe("'Form' component", function() {
  before(function() {
    shallow(Form({username: "ali"}));
  });
/*  it("should call dispatch method exactly thrice ", function() {
    expect(spy.calledThrice).to.equal(true);
  });*/
});

