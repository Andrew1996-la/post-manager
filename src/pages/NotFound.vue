<template>
  <div class="notFound">404 Страница не наидена</div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.notFound {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: brown;
  font-size: 40px;
}
</style>
