<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "VButton",
};
</script>

<style scoped>
.btn {
  padding: 5px 12px;
  background-color: unset;
  border: brown 1px solid;
}

.btn:hover {
  background-color: brown;
  color: white;
  transform: scale(1.05);
  transition: 0.2s;
}
</style>
