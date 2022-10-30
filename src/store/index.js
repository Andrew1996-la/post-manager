import { createStore } from "vuex";
import postStore from "@/store/modules/postStore";

const index = createStore({
  state: () => {
    justZalupa: "zalupa";
  },
  modules: {
    postStore: postStore,
  },
});

export default index;
