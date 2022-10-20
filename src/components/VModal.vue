<template>
<div class="modal" v-if="isShow" @click="$emit('close')">
  <div @click.stop class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "VModal",
  props: ["isShow"]
}
</script>

<style scoped>
  .modal {
    top: 0;
    right: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  .content {
    background-color: white;
    min-width: 300px;
    min-height: 100px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 8px;
    padding: 50px;
  }
</style>