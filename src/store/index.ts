import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

const store: StoreOptions<RootState> = {
  state: {
    status: "init",
  },
  modules: {},
};

export default new Vuex.Store<RootState>(store);
