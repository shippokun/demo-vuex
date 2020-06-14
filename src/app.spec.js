import { shallowMount } from "@vue/test-utils";
import app from "./app.vue";
import { HomePage } from "./pages";

describe("app.vue", () => {
  it("should render successfully", () => {
    const wrapper = shallowMount(app);
    const comp = wrapper.findComponent(HomePage);
    expect(comp.exists()).toBe(true);
  });
});
