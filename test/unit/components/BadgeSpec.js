/* eslint-disable */
import React from "react";
import {shallow} from "enzyme";
import {Badge} from "../../../src/components/Badge";
import {badgeAPI} from "../../../src/components/Badge";
import I from "immutable";
import {Sparklines, SparklinesLine, SparklinesSpots} from "react-sparklines";
import smallImage from "../../../public/styles/images/small.png";
import loading from "../../../public/styles/images/loading.svg";


describe("badge component", () => {
  let wrapper;
  const response_OK = {
    badgeUserInfo: {
      avatar_url: "https://avatars.githubusercontent.com/u/38546?v=3",
      html_url: "https://github.com/nzakas",
      followers: 5378,
      login: "nzakas",
      public_repos: 48,
    },
    badgeRepoInfo: {
      name: "acorn",
      language: "JavaScript",
      forks_count: 1,
      stargazers_count: 4
    },
    badgeGraphInfo: [0, 345, 0, 0, 50, 10, 0]
  };
  const response_NOTFOUND = {
    badgeUserInfo: {
      message: "Not Found",
      documentation_url: "https://developer.github.com/v3"
    },
    badgeRepoInfo: {
      message: "Not Found",
      documentation_url: "https://developer.github.com/v3"
    },
    badgeGraphInfo: []
  };
  const response_RATELIMIT = {
    badgeUserInfo: {
      login: "API rate limit exceeded",
      html_url: "https://developer.github.com/v3/rate_limit/"
    },
    badgeGraphInfo: []
  };
  const immutableListProps = {
    badgeUserInfo: I.List(),
    badgeRepoInfo: I.List()
  };
  const errorMessageProp = {
    badgeUserInfo: {
      message: "Not Found",
      documentation_url: "https://developer.github.com/v3"
    },
    badgeRepoInfo: {
      message: "Not Found",
      documentation_url: "https://developer.github.com/v3"
    },
    badgeGraphInfo: [],
    errorMessage: new Error("error")
  };

    // any fault here means, you have a wrong conditionally rendering
    // (care about if check)
  describe("when takes immutable list(s) as prop(s)", () => {
    it("should render iframe-div and the loading image", () => {
      const expectedRenderedResult = shallow(Badge(immutableListProps));
      expect(expectedRenderedResult.contains(
        <div className="styleOfIframe">
          <img className="loader" src={loading} alt="loading..."/>
        </div>
        )).to.equal(true);
    });
  });

  describe("when takes error message as a prop", () => {
    it("should render iframe-div and error message with a link", () => {
      const expectedRenderedResult = shallow(Badge(errorMessageProp));
      expect(expectedRenderedResult.contains(
        <div>An error occurred on GithubAPI server!
          Please checkout:
          <a href="https://developer.github.com/">GitHub Developer Guide</a>
          for details...
        </div>
      )).to.equal(true);
    });
  });

  describe("when takes any type of props except from immutable list", () => {
      // any fault here means you are rendering related badge element with a wrong prop "value".
      // (care about fallback values of elements)
    describe("and server responses with 200 (OK) ,", () => {
      before(() => {
        wrapper = shallow(Badge(response_OK));
      });

      it("should render related prop value for it's column1 of row1 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <a target={"_blank"} href={"https://github.com/nzakas"} >
                    <img className="badge-image"
                        src={"https://avatars.githubusercontent.com/u/38546?v=3"}
                        alt="avatar"
                    />
                </a>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column1 of row2 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="svg-wrapper">
                    <Sparklines data={[0, 345, 0, 0, 50, 10, 0]} margin={6}>
                        <SparklinesLine style={{strokeWidth: 10, stroke: "#2c3cff", fill: "aliceblue"}} />
                        <SparklinesSpots size={4} style={{stroke: "#336aff", strokeWidth: 3, fill: "white"}} />
                    </Sparklines>
                </div>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column1 of row3 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <img className="badge-image" src={smallImage} alt="git-ninja"/>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row1 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <a className="link-tag" target={"_blank"} href={"https://github.com/nzakas"}>
                    {"nzakas"}
                </a>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row2 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <p className="last-activity">
                    {"acorn"} {"(" + "JavaScript" + ")"}
                </p>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row3 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {Math.floor(5378 / 1000, -1) + "k"}
                        </span> followers
                    </div>
                </div>
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {48}
                        </span> repos
                    </div>
                </div>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row4 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {1}
                        </span> forks
                    </div>
                </div>
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {4}
                        </span> stargazers
                    </div>
                </div>
            </div>
          )).to.equal(true);
      });
    });

      // any fault here means you are rendering related badge element with a wrong prop "value".
      // (care about fallback values of elements)
    describe("server responses with 404 (NOT FOUND)", () => {
      before(() => {
        wrapper = shallow(Badge(response_NOTFOUND));
      });

      it("should render related prop value for it's column1 of row1 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <a target={"_blank"} href={"https://github.com/404"} >
                    <img className="badge-image"
                        src={"https://avatars2.githubusercontent.com/u/5779565?v=3&s=88"}
                        alt="avatar"
                    />
                </a>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column1 of row2 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="svg-wrapper">
                    <Sparklines data={[]} margin={6}>
                        <SparklinesLine style={{strokeWidth: 10, stroke: "#2c3cff", fill: "aliceblue"}} />
                        <SparklinesSpots size={4} style={{stroke: "#336aff", strokeWidth: 3, fill: "white"}} />
                    </Sparklines>
                </div>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column1 of row3 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <img className="badge-image" src={smallImage} alt="git-ninja"/>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row1 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <a className="link-tag" target={"_blank"} href={"https://github.com/404"}>
                    {"Not Found"}
                </a>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row2 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <p className="last-activity">
                    {"no recent repo activity"} {""}
                </p>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row3 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> followers
                    </div>
                </div>
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> repos
                    </div>
                </div>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row4 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> forks
                    </div>
                </div>
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> stargazers
                    </div>
                </div>
            </div>
          )).to.equal(true);
      });
    });

    // any fault here means you are rendering related badge element with a wrong prop "value".
    // (care about fallback values of elements)
    describe("server responses with 403 (FORBIDDEN)", () => {
      before(() => {
        wrapper = shallow(Badge(response_RATELIMIT));
      });

      it("should render related prop value for it's column1 of row1 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <a target={"_blank"} href={"https://developer.github.com/v3/rate_limit/"} >
                    <img className="badge-image"
                        src={"https://avatars2.githubusercontent.com/u/5779565?v=3&s=88"}
                        alt="avatar"
                    />
                </a>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column1 of row2 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="svg-wrapper">
                    <Sparklines data={[]} margin={6}>
                        <SparklinesLine style={{strokeWidth: 10, stroke: "#2c3cff", fill: "aliceblue"}} />
                        <SparklinesSpots size={4} style={{stroke: "#336aff", strokeWidth: 3, fill: "white"}} />
                    </Sparklines>
                </div>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column1 of row3 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <img className="badge-image" src={smallImage} alt="git-ninja"/>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row1 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <a className="link-tag" target={"_blank"} href={"https://developer.github.com/v3/rate_limit/"}>
                    {"API rate limit exceeded"}
                </a>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row2 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <p className="last-activity">
                    {"no recent repo activity"} {""}
                </p>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row3 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> followers
                    </div>
                </div>
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> repos
                    </div>
                </div>
            </div>
          )).to.equal(true);
      });
      it("should render related prop value for it's column5 of row4 elements", () => {
        expect(wrapper.contains(
            <div className="row">
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> forks
                    </div>
                </div>
                <div className="column-5">
                    <div className="text-item">
                        <span className="bold-item">
                            {0}
                        </span> stargazers
                    </div>
                </div>
            </div>
          )).to.equal(true);
      });
    });
  });
});

