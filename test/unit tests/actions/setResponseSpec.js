/* eslint-disable */
import {setResponse} from "../../../src/actions/setResponse";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);
let store;
let server;

describe("setResponse action creator", () => {
  before(() => {
    store = mockStore({});
    server = sinon.fakeServer.create();
  });
  after(() => {
    server.restore();
  });
  it("should create setUsersInfo action as expected when fetching is done with 403 FORBIDDEN", () => {
    server.respondWith([403, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[0].data[1]).to.deep.equal([{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]);
      });
    server.respond();
    return testResult;
  });
  it("should create setRepoInfo action as expected when fetching is done with 403 FORBIDDEN", () => {
    server.respondWith([403, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[1].data[1]).to.deep.equal([{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]);
      });
    server.respond();
    return testResult;
  });
  it("should create setGraphInfo action as expected when fetching is done with 403 FORBIDDEN", () => {
    server.respondWith([403, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[2].data[0]).to.deep.equal(0);
      });
    server.respond();
    return testResult;
  });
  it("should create setUsersInfo action as expected when fetching is done with 200 OK!", () => {
    server.respondWith([200, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[0].data[1]).to.deep.equal([{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]);
      });
    server.respond();
    return testResult;
  });
  it("should create setRepoInfo action as expected when fetching is done with 200 OK!", () => {
    server.respondWith([200, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[1].data[1]).to.deep.equal([{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]);
      });
    server.respond();
    return testResult;
  });
  it("should create setGraphInfo action as expected when fetching is done with 200 OK!", () => {
    server.respondWith([200, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[2].data[0]).to.deep.equal(0);
      });
    server.respond();
    return testResult;
  });
  it("should create setUsersInfo action as expected when fetching is done with 404 NOT FOUND", () => {
    server.respondWith([404, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[0].data[1]).to.deep.equal([{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]);
      });
    server.respond();
    return testResult;
  });
  it("should create setRepoInfo action as expected when fetching is done with 404 NOT FOUND", () => {
    server.respondWith([404, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[1].data[1]).to.deep.equal([{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]);
      });
    server.respond();
    return testResult;
  });
  it("should create setGraphInfo action as expected when fetching is done with 404 NOT FOUND", () => {
    server.respondWith([404, { "Content-Type": "application/json" },
      '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
    ]);
    const testResult = store.dispatch(setResponse())
      .then((res) => {
        expect(store.getActions()[2].data[0]).to.deep.equal(0);
      });
    server.respond();
    return testResult;
  });
});

describe("", () => {
  it("should create setErrorMessage action as an error Object when fetching is done with a Server Error!", () => {
    store = mockStore({});
    sinon.stub(Promise, "all").returns(Promise.reject(new Error()));
    return store.dispatch(setResponse())
      .then(res => {
        expect(store.getActions()[0].data).to.deep.equal(new Error());
      });
  });
});


