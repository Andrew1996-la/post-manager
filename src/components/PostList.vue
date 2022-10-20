<template>
  <div v-if="posts.length > 0">
    <h3 class="header">Array of post</h3>
    <div key={{post.id}} v-for="post in posts">
      <PostItem @deletePost="$emit('deletePost', post.id)" :post="post"/>
    </div>
  </div>
  <h2  class="post_alert" v-else>Постов нет</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.header {
  margin-top: 15px;
}

.post_alert {
  color: red;
  margin-top: 20px;
  text-align: center;
}

</style>