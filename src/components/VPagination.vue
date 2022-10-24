<template>
  <div class="pagination">
    <span
      class="page"
      :class="{ 'current-page': pageNumber === page }"
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </span>
  </div>
</template>

<script>
export default {
  name: "VPagination",
  props: ["totalPage", "page"],
};
</script>

<style scoped>
.pagination {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.page {
  border: 1px solid black;
  padding: 4px;
  cursor: pointer;
  margin: 0 5px;
}

.current-page {
  border: 2px solid black;
  background-color: aquamarine;
}
</style>
