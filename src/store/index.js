import { createStore } from "vuex";
import posts from "@/store/modules/posts";

const postsStore = createStore({
  modules: {
    posts,
  },
});

export default postsStore;
