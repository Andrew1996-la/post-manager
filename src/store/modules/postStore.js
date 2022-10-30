const postStore = {
  state: () => ({
    count: 2,
  }),
  getters: {
    getPost(state) {
      return state.count * 2;
    },
  },
};

export default postStore;
