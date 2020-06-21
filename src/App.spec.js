import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";
import { HomeContainer } from "./pages";

describe("App.vue", () => {
  it("should render successfully", () => {
    const wrapper = shallowMount(App);
    const comp = wrapper.findComponent(HomeContainer);
    expect(comp.exists()).toBe(true);
  });
});
