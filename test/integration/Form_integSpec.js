import {mount} from "enzyme";
import {Form} from "../../src/components/Form";
import {store} from "../../src/store/configStore";

let wrapper;

describe("Form component", function() {
  before(function() {
    wrapper = mount(Form({username: "ali"}));
  });

  it("should update the store with a username", function() {
    wrapper.find(".inputStyle").simulate("change", {target: {value: "ali"}});
    expect(store.getState().get("username")).to.equal("ali");
  });
});
