<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="list__item">
        <router-link to="/" active-class="active">Start page</router-link>
      </li>
      <li class="list__item">
        <router-link to="/posts" active-class="active">Posts</router-link>
      </li>
      <li class="list__item">
        <router-link to="/about" active-class="active">About</router-link>
      </li>
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
  text-decoration: none;
}

.nav__list li:hover {
  transform: scale(1.05);
}

.nav__list li {
  margin: 0 15px;
}

.list__item a {
  color: white;
  text-decoration: none;
}

.list__item .active {
  padding-bottom: 5px;
  border-bottom: 2px solid white;
}
</style>
