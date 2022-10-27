<template>
  <VNav />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import StartPage from "@/pages/StartPage";
import PostPage from "@/pages/PostPage";
import VNav from "@/components/VNav";

export default {
  components: { PostPage, StartPage, VNav },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Code Medium", serif;
}
</style>
