import { shallowMount } from "@vue/test-utils";
import HomeComponent from "./home-component";

describe("home-component.vue", () => {
  it("renders props.msg when passed", () => {
    const name = "test name";
    const wrapper = shallowMount(HomeComponent, { propsData: { name } });
    expect(wrapper.text()).toMatch(name);
  });
});
