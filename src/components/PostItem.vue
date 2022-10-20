<template>
  <div class="post_wrapper">
    <div class="post">
      <div class="post-title"><strong>Title:</strong> {{post.title}}</div>
      <div class="post-body"><strong>Description:</strong> {{post.body}}</div>
    </div>
    <div class="post_delete">
      <VButton @click="deletePost">Delete this post</VButton>
    </div>
  </div>
</template>

<script>
import VButton from "@/UI/VButton";

export default {
  name: "PostItem",
  components: {VButton},
  emits: ["deletePost"],
  props: {
    post: Object
  },
  methods: {
    deletePost() {
      this.$emit('deletePost', this.post.id)
    }
  }
}
</script>

<style scoped>
.post {
  width: 80%;
}

.post-body {
  margin-top: 8px;
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
</style>