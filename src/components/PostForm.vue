<template>
  <form class="form_post" @submit.prevent="createPost">
    <VInput placeholder="Enter title" v-model="post.title"/>
    <VInput placeholder="Enter description" v-model="post.descr"/>
    <VButton class="form_post_btn">Create new post</VButton>
    <span @click='$emit("close")' class="close">&#10006;</span>
  </form>
</template>

<script>
import setId from "@/utils";
import VButton from "@/UI/VButton";
import VInput from "@/UI/VInput";

export default {
  name: "PostForm",
  components: {VButton, VInput},

  data() {
    return {
      post: {
        title: '',
        descr: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = setId()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        descr: ''
      }
      this.$emit('close')
    }
  }

}
</script>

<style scoped>
.form_post {
  display: flex;
  flex-direction: column;
  padding: 13px;
  width: 400px;
}

.form_post input {
  padding: 5px 12px;
  border: brown 1px solid;
  margin-top: 15px;
  height: 3rem;
}

.form_post_btn {
  display: flex;
  justify-content: end;
  margin-top: 15px;
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}


</style>