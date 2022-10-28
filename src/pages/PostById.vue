<template>
  <div class="postById">
    <h3 class="postById__header">{{ $route.params.title }}</h3>
    <p class="postById__body">{{ $route.params.body }}</p>
    <VButton @click="$router.go(-1)" class="postById__back">Назад</VButton>
  </div>
</template>

<script>
import VButton from "@/UI/VButton";
export default {
  name: "PostById",
  components: { VButton },
};
</script>

<style scoped>
.postById {
  padding: 0 60px;
}

.postById__header {
  text-align: center;
}

.postById__body {
  margin-top: 20px;
}

.postById__back {
  margin-top: 20px;
  text-align: end;
}
</style>
