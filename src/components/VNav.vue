<template>
  <nav class="nav">
    <ul class="nav__list">
      <li @click="$router.push('/')">Start page</li>
      <li @click="$router.push('/posts')">Posts</li>
      <li @click="$router.push('/about')">About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "VNav",
};
</script>

<style scoped>
.nav {
  background-color: brown;
  margin-bottom: 50px;
}

.nav__list {
  display: flex;
  align-items: center;
  justify-content: end;
  list-style-type: none;
  height: 50px;
  cursor: pointer;
  color: white;
}

.nav__list li:hover {
  transform: scale(1.05);
}

.nav__list li {
  margin: 0 15px;
}
</style>
