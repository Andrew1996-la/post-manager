<template>
  <div class="start-page">
    <h2 class="start-page__greeting">Приветствую!</h2>
    <h3 class="start-page__text">
      Для просмотра страницы постов нажимте продолжить
    </h3>
    <VButton class="start-page__btn" @click="goToPosts"> Продолжить </VButton>
  </div>
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

<style scoped>
.start-page {
  width: 600px;
  margin: 0 auto;
}

.start-page__greeting {
  text-align: center;
}

.start-page__text {
  margin-top: 20px;
}

.start-page__btn {
  margin-top: 20px;
  text-align: center;
}
</style>
