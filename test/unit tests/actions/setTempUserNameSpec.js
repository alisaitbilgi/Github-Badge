/* eslint-disable */
import {setTempUserName} from "../../../src/actions/setTempUserName";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);
it("bla bla", () => {
  const expectedAction = {
    type: "SET_TEMP_USERNAME",
    data: "alisaitbilgi"
  };
  const store = mockStore({});

  return store.dispatch(setTempUserName(expectedAction.data))
    .then((res) => {
      expect(res).to.deep.equal(expectedAction);
    });
});


