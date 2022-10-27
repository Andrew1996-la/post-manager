<template>
  <h2>Приветствую!</h2>
  <h3>Для просмотра страницы постов нажимте продолжить</h3>
  <VButton @click="goToPosts">Продолжить</VButton>
</template>

<script>
import VButton from "@/UI/VButton";

export default {
  name: "StartPage",
  components: {
    VButton,
  },
  methods: {
    goToPosts() {
      this.$router.push("/posts");
    },
  },
};
</script>

<style scoped></style>
