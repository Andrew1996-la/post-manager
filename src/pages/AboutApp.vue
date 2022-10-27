<template>
  <div class="possibility">
    <h2 class="possibility__header">возможности приложения</h2>
    <ul class="possibility__list">
      <li v-for="(possibility, index) in possibilityApp" :key="index">
        {{ possibility }}
      </li>
    </ul>
  </div>
</template>

<script>
import possibilityApp from "@/api/possibilityApp";
import PostList from "@/components/PostList";
export default {
  name: "AboutApp",
  components: { PostList },
  data() {
    return {
      possibilityApp,
    };
  },
};
</script>

<style scoped>
.possibility {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 500px;
}

.possibility__header {
  text-align: center;
}

.possibility__list {
  margin-top: 20px;
}
</style>
