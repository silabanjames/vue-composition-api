<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea name="" id="" cols="30" rows="10" v-autofocus></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { vAutofocus } from '../directives/vAutofocus';

const posts = ref([
  {
    id: 1,
    title: 'Post 1'
  },
  {
    id: 2,
    title: 'Post 2'
  },
  {
    id: 3,
    title: 'Post 3'
  },
])
</script>

<style scoped>
ul{
  margin-bottom: 30px;
}
</style>