import {setUserName} from "../../../src/actions/setUserName";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {setActiveUserName} from "../../../src/actions/setUserName";
const mockStore = configureMockStore([thunk]);
let store;
let clock;

describe("action setUserName", () => {
  before(function() {
    clock = sinon.useFakeTimers();
    store = mockStore({});
  });
  after(function() {
    clock.restore();
  });

  it("should create an action to set a username", () => {
    expect(store.dispatch(setUserName("alisaitbilgi"))).to.deep.equal({
      type: "SET_USERNAME",
      data: "alisaitbilgi"
    });
  });
  it("should also create an action to set active username", function(done) {
    store.dispatch(setUserName("ali"));
    clock.tick(500);
    expect(setActiveUserName()).to.deep.equal({
      type: "SET_ACTIVE_USERNAME",
      data: "ali"
    });
    done();
  });
});

