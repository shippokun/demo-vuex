import { shallowMount } from "@vue/test-utils";
import HomeComponent from "./home-component";

describe("home-component.vue", () => {
  it("renders props.name when passed", () => {
    const name = "test name";
    const wrapper = shallowMount(HomeComponent, { propsData: { name } });
    expect(wrapper.text()).toMatch(name);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
