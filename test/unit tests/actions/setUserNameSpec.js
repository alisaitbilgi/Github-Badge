import {setUserName} from "../../../src/actions/setUserName";

describe("action setUserName", () => {
  const actionType = "SET_USERNAME";
  const actionData = "alisaitbilgi";

  it("should create an action to set a username", () => {
    const expectedAction = {
      type: actionType,
      data: actionData
    };
    expect(setUserName(actionData)).to.deep.equal(expectedAction);
  });
});

