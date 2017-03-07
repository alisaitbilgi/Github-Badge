import {setUserName} from "../../../src/actions/setUserName";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore([thunk]);
let store;

describe("action setUserName", () => {
  before(function () {
    store = mockStore({});
  });

  it("should create an action to set a username", () => {
    expect(store.dispatch(setUserName("alisaitbilgi"))).to.deep.equal({
      type: "SET_USERNAME",
      data: "alisaitbilgi"
    });
  });
});

