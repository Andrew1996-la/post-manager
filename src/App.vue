<template>
  <div class="app">
    <h2>Страница с постами.</h2>
    <div class="buttons">
      <VButton class="create-post" @click="toggleModal">
        Create new post.
      </VButton>
      <VSelect :filters="filters" v-model="chooseFilter" />
    </div>
    <VInput
      class="search-panel"
      placeholder="Search by title..."
      v-model="searchPanel"
    />
    <VModal :isShow="isShowModal" @close="toggleModal">
      <PostForm @close="toggleModal" @create="createPost" />
    </VModal>
    <PostList @deletePost="deletePost" :posts="searchedPost" />
    <VPagination :totalPage="totalPage" :page="page" @changePage="changePage" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import VButton from "@/UI/VButton";
import VModal from "@/components/VModal";
import postApi from "@/api/postApi";
import VSelect from "@/components/VSelect";
import VInput from "@/UI/VInput";
import VPagination from "@/components/VPagination";

export default {
  components: {
    VInput,
    VSelect,
    VButton,
    PostList,
    PostForm,
    VModal,
    VPagination,
  },
  data() {
    return {
      posts: [],
      isShowModal: false,
      searchPanel: "",
      page: 1,
      limit: 10,
      totalPage: 0,
      filters: [
        {
          value: "title",
          name: "По заголовку",
        },
        {
          value: "body",
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
    changePage(page) {
      this.page = page;
      postApi
        .getPost(this.limit, this.page)
        .then((response) => (this.posts = response.data));
    },
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
  },
  watch: {
    chooseFilter(newValue) {
      if (newValue === "id") {
        this.posts = this.posts.sort((post1, post2) => {
          return post1.id - post2.id;
        });
        return;
      }
      this.posts = this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue]);
      });
    },
  },
  computed: {
    searchedPost() {
      return [...this.posts].filter((post) => {
        return post.title
          .toLowerCase()
          .includes(this.searchPanel.toLowerCase());
      });
    },
  },
  async mounted() {
    const posts = await postApi.getPost(this.limit, this.page);
    this.totalPage = Math.ceil(posts.headers["x-total-count"] / this.limit);
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

.search-panel {
  width: 100%;
}
</style>
