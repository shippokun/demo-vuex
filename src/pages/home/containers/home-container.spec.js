import { shallowMount } from "@vue/test-utils";
import HomeComponent from "../components/home-component.vue";
import HomeContainer from "./home-container.vue";

describe("home-container.vue", () => {
  it("should render successfully", () => {
    const wrapper = shallowMount(HomeContainer);
    const comp = wrapper.findComponent(HomeComponent);
    expect(comp.exists()).toBe(true);
  });
});
