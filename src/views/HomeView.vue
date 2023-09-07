<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>

    <h3>{{ counterData.counterTitle }}:</h3>

    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h3>Edit counter title:</h3>
      <input v-model="counterData.counterTitle" type="text">
    </div>

    <!-- can't edit because the variable is non-reactive variable -->
    <div class="edit">
      <h3>Edit App title:</h3>
      <input v-model="appTitle" type="text">
    </div>
  </div>

    
</template>

<!-- Composition API | Script Setup Pattern -->
<script setup>
import { ref, reactive } from 'vue'

const appTitle = 'My amazing App'

const counterData = reactive({
  counter: 0,
  counterTitle : "My Counter"
})

const increaseCounter = () => {
  counterData.counter++;
}

const decreaseCounter = () => {
  counterData.counter--;
}
</script>

<style>
.home{
  text-align: center;
  padding: 10px;
}

.btn, .counter{
  font-size: 40px;
  margin: 10px;
}

.edit{
  margin-top: 60px;
}
</style>
