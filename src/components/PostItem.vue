<template>
  <div class="post_wrapper">
    <div class="post">
      <div class="post-title"><strong>Title:</strong> {{ post.title }}</div>
      <div class="post-body"><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <VButton class="post_open" @click="openPost">Open this post</VButton>
    <VButton class="post_delete" @click="deletePost">Delete this post</VButton>
  </div>
</template>

<script>
import VButton from "@/UI/VButton";

export default {
  name: "PostItem",
  components: { VButton },
  emits: ["deletePost"],
  props: {
    post: {
      id: Number,
      title: String,
      body: String,
    },
  },
  methods: {
    deletePost() {
      this.$emit("deletePost", this.post.id);
    },
    openPost() {
      // this.$router.push({ path: `/posts/${this.post.id}` });
      this.$router.push({
        name: "postById",
        params: {
          title: this.post.title,
          body: this.post.body,
        },
      });
    },
  },
};
</script>

<style scoped>
.post {
  width: 80%;
}

.post-body {
  margin-top: 8px;
  padding-right: 10px;
}

.post_wrapper {
  display: flex;
  padding: 13px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid brown;
}

.post_delete button {
  padding: 5px 12px;
  background-color: unset;
  border: brown 1px solid;
}

.post_open {
  margin-right: 8px;
}
</style>
