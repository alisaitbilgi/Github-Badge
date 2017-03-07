import {store} from "../../src/store/configStore";
import {routeCallback} from "../../src/routeCallback";

let server;
let stub;

describe("routeCallback", function() {
  describe("function", function() {
    beforeEach(() => {
      server = sinon.fakeServer.create();

    });
    afterEach(() => {
      server.restore();
    });

    it("should update store with badgeRepoInfo state when server reponds with 200 OK!", function() {
      server.respondWith([200, {"Content-Type": "application/json"},
        '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
      ]);
      const testResult = routeCallback({params: {username: "addy"}})
        .then(() => {
          expect(store.getState().get("badgeRepoInfo")).to.deep.equal({updated_at: 1487774712694, id: 12, comment: 'Hey there'});
        });
      server.respond();
      return testResult;
    });

    it("should update store with badgeUserInfo state when server reponds with 403 FORBIDDEN!", function() {
      server.respondWith([403, {"Content-Type": "application/json"},
        '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
      ]);
      const testResult = routeCallback({params: {username: "addy"}})
        .then(() => {
          expect(store.getState().get("badgeUserInfo")).to.deep.equal({
            login: "API rate limit exceeded",
            html_url: "https://developer.github.com/v3/rate_limit/"
          });
        });
      server.respond();
      return testResult;
    });

    it("should update store with badgeUserInfo state when server reponds with 200 OK!", function() {
      server.respondWith([200, {"Content-Type": "application/json"},
        '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
      ]);
      const testResult = routeCallback({params: {username: "addy"}})
        .then(() => {
          expect(store.getState().get("badgeUserInfo")[0]).to.deep.equal({updated_at: 1487774712694, id: 12, comment: 'Hey there'});
        });
      server.respond();
      return testResult;
    });

    it("should update store with badgeRepoInfo state when server reponds with 404 NOT FOUND!", function() {
      server.respondWith([404, {"Content-Type": "application/json"},
        '[{"updated_at":1487774712694 , "id": 12, "comment": "Hey there" }]'
      ]);
      const testResult = routeCallback({params: {username: "addy"}})
        .then(() => {
          expect(store.getState().get("badgeRepoInfo")[0]).to.deep.equal({updated_at: 1487774712694, id: 12, comment: 'Hey there'});
        });
      server.respond();
      return testResult;
    });

  });

  describe("function", function() {
    beforeEach(() => {
      stub = sinon.stub(Promise, "all").returns(Promise.reject(new Error()));

    });
    afterEach(() => {
      stub.restore();
    });

    it("should update store with setErrorMessage when fetching is done with a Server Error!", () => {
      return routeCallback({params: {username: "addy"}})
        .then(res => {
          expect(store.getState().get("errorMessage")).to.deep.equal(new Error());
        });
    });
  });
});

