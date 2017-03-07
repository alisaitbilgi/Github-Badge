import reducer from "../../../src/reducers/singleReducer";
import I from "immutable";

// initial test datas...
const SET_REPO_INFO_STATUS_OK = {
  type: "SET_REPO_INFO",
  data: [200, ["bla"]]
};
const SET_REPO_INFO_STATUS_OTHER = {
  type: "SET_REPO_INFO",
  data: [404, {}]

};
const SET_USER_INFO_STATUS_FORBIDDEN = {
  type: "SET_USER_INFO",
  data: [403, {
    login: "API rate limit exceeded",
    html_url: "https://developer.github.com/v3/rate_limit/"
  }]
};
const SET_USER_INFO_STATUS_OTHER = {
  type: "SET_USER_INFO",
  data: [200, {}]
};
const SET_GRAPH_INFO = {
  type: "SET_GRAPH_INFO",
  data: []
};
const SET_USERNAME = {
  type: "SET_USERNAME",
  data: 3241
};
const SET_TEMP_USERNAME = {
  type: "SET_TEMP_USERNAME",
  data: {any: "bla"}
};
const SET_ERROR_MESSAGE = {
  type: "SET_ERROR_MESSAGE",
  data: new Error({noMatter: false})
};

describe("singleReducer ", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).to.equal(I.Map());
  });
  describe("should handle", () => {
    it("set_repo_info action and return new Map with badgeRepoInfo key if status is 200-OK.", () => {
      expect(reducer(I.Map(), SET_REPO_INFO_STATUS_OK))
        .to.deep.equal(I.Map().set("badgeRepoInfo", SET_REPO_INFO_STATUS_OK.data[1][0]));
    });
    it("set_repo_info action and return new Map with badgeUserInfo key if status is other than 200.", () => {
      expect(reducer(I.Map(), SET_REPO_INFO_STATUS_OTHER))
        .to.deep.equal(I.Map().set("badgeRepoInfo", SET_REPO_INFO_STATUS_OTHER.data[1]));
    });
    it("set_user_info action and return new Map with badgeUserInfo key if status is 403-FORBIDDEN.", () => {
      expect(reducer(I.Map(), SET_USER_INFO_STATUS_FORBIDDEN))
        .to.deep.equal(I.Map().set("badgeUserInfo", {
          login: "API rate limit exceeded",
          html_url: "https://developer.github.com/v3/rate_limit/"
        }));
    });
    it("set_user_info action and return new Map with badgeRepoInfo key if status is other than 403.", () => {
      expect(reducer(I.Map(), SET_USER_INFO_STATUS_OTHER))
        .to.deep.equal(I.Map().set("badgeUserInfo", SET_USER_INFO_STATUS_OTHER.data[1]));
    });
    it("set_graph_info action and return new Map with badgeGraphInfo key no matter the status is.", () => {
      expect(reducer(I.Map(), SET_GRAPH_INFO))
        .to.deep.equal(I.Map().set("badgeGraphInfo", SET_GRAPH_INFO.data));
    });
    it("SET_USERNAME action and return new Map with username key no matter the status is.", () => {
      expect(reducer(I.Map(), SET_USERNAME))
        .to.deep.equal(I.Map().set("username", SET_USERNAME.data));
    });
    it("SET_TEMP_USERNAME action and return new Map with tempUsername key no matter the status is.", () => {
      expect(reducer(I.Map(), SET_TEMP_USERNAME))
        .to.deep.equal(I.Map().set("tempUsername", SET_TEMP_USERNAME.data));
    });
    it("SET_ERROR_MESSAGE action and return new Map with errorMessage key no matter the status is.", () => {
      expect(reducer(I.Map(), SET_ERROR_MESSAGE))
        .to.deep.equal(I.Map().set("errorMessage", SET_ERROR_MESSAGE.data));
    });
  });
});
