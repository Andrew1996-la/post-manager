<template>
  <div v-if="posts.length > 0">
    <h3 class="header">Array of post</h3>
    <TransitionGroup name="posts">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        @deletePost="$emit('deletePost', post.id)"
        :post="post"
      />
    </TransitionGroup>
  </div>
  <h2 class="post_alert" v-else>Постов нет</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
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
.posts-move,
.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
