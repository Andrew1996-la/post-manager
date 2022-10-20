<template>
  <div class="app">
    <h2>Страница с постами.</h2>
    <div class="buttons">
      <VButton class="create-post" @click="toggleModal"
        >Create new post.</VButton
      >
      <VSelect :filters="filters" v-model="chooseFilter" />
    </div>
    <VModal :isShow="isShowModal" @close="toggleModal">
      <PostForm @close="toggleModal" @create="createPost" />
    </VModal>
    <PostList @deletePost="deletePost" :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import VButton from "@/UI/VButton";
import VModal from "@/components/VModal";
import postApi from "@/api/postApi";
import VSelect from "@/components/VSelect";

export default {
  components: {
    VSelect,
    VButton,
    PostList,
    PostForm,
    VModal,
  },
  data() {
    return {
      posts: [],
      isShowModal: false,
      filters: [
        {
          value: "title",
          name: "По заголовку",
        },
        {
          value: "name",
          name: "По содержимому",
        },
        {
          value: "id",
          name: "По id",
        },
      ],
      chooseFilter: "",
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    deletePost(postId) {
      this.posts = this.posts.filter((item) => {
        return item.id !== postId;
      });
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
    changeFilter(e) {
      console.log(e);
    },
  },
  async mounted() {
    const posts = await postApi.getPost();
    this.posts = posts.data;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.create-post {
  display: inline-block;
}
</style>
