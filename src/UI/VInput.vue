<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="form_input"
    type="text"
  />
</template>

<script>
export default {
  name: "VInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.form_input {
  padding: 5px 12px;
  border: brown 1px solid;
  margin-top: 15px;
  height: 3rem;
}
</style>
