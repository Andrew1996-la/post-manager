<template>
  <select v-model="modalValue" @change="changeFilter" class="select">
    <option disabled value="">choose something from list</option>
    <option v-for="filter in filters" :key="filter.value" :value="filter.value">
      {{ filter.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "VSelect",
  props: ["filters", "modalValue"],
  methods: {
    changeFilter(e) {
      this.$emit("update:modalValue", e.target.value);
    },
  },
};
</script>

<style scoped></style>
