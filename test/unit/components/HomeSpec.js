
import React from "react";
import {shallow} from "enzyme";
import {Home} from "../../../src/components/Home";
import socialCoding from "../../../public/styles/images/social.png";
import gitBeer from "../../../public/styles/images/octopus.png";
import Form from "../../../src/components/Form";

describe("'Home' component", () => {
  let wrapper;
  let props;

  describe(",when takes tempUsername as its prop,", () => {
    before(() => {
      props = {
        tempUsername: "alisaitbilgi"
      };
      wrapper = shallow(Home(props));
    });
    it("should render iframe element with desired prop value", () => {
      expect(wrapper.contains(
        <div className="row">
          <iframe src={`/users/${props.tempUsername}`} className="content" scrolling="no" />
        </div>
      )).to.equal(true);
    });
  });

  describe(", when takes no tempUsername as it's prop", () => {
    before(() => {
      props = !props;
      wrapper = shallow(Home(props));
    });
    it("should render iframe element with fallback prop value", () => {
      expect(wrapper.contains(
        <div className="row">
          <iframe src={"/users"} className="content" scrolling="no" />
        </div>
      )).to.equal(true);
    });
  });

  describe(",no matter takes tempUsername as its prop or not,", () => {
    it("should render all content elements and form", () => {
      wrapper = shallow(Home(props));
      expect(wrapper.contains(
        <div className="article">
          <div className="content-container">
            <div className="badge-side">
              <div className="row">
                <img className="social-coding-image" src={socialCoding} alt="social_coding" />
              </div>
              <div className="row">
                <iframe src={"/users"} className="content" scrolling="no" />
              </div>
            </div>
            <div className="image-side">
              <img className="octopus-image" src={gitBeer} alt="octopus" />
            </div>
          </div>
          <Form />
        </div>
      )).to.equal(true);
    });
    it("should render all content elements and form", () => {
      props = {
        tempUsername: "alisaitbilgi"
      };
      wrapper = shallow(Home(props));
      expect(wrapper.contains(
        <div className="article">
          <div className="content-container">
            <div className="badge-side">
              <div className="row">
                <img className="social-coding-image" src={socialCoding} alt="social_coding" />
              </div>
              <div className="row">
                <iframe src={`/users/${props.tempUsername}`} className="content" scrolling="no" />
              </div>
            </div>
            <div className="image-side">
              <img className="octopus-image" src={gitBeer} alt="octopus" />
            </div>
          </div>
          <Form />
        </div>
      )).to.equal(true);
    });
  });
});


