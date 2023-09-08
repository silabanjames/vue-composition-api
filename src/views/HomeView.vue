<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>

    <h3>{{ counterData.counterTitle }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>The counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h3>Edit counter title:</h3>
      <input v-model="counterData.counterTitle" type="text" v-autofocus>
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
/*
  imports
*/
  import { reactive, computed, watch, onMounted } from 'vue'
  import { vAutofocus } from '@/directives/vAutofocus'

/*
  app title
*/
  const appTitle = 'My amazing App';
  onMounted(()=>{
    console.log('Do stuff related to App Title')
  });

/*
  counter data
*/
  const counterData = reactive({
    counter: 0,
    counterTitle : "My Counter"
  })

  // show alert if counter reach 20
  watch(() => counterData.counter, (newCount, oldCount) => {
    if(newCount == 20) alert('Way to go! You made it to 20!!');
  })

  // computed variable that show the counter odd or even
  const oddOrEven = computed(() => {
    if (counterData.counter%2 == 0) return 'even';
    else return 'odd';
  });

  const increaseCounter = (amount, e) => {
    counterData.counter += amount;
  }

  const decreaseCounter = amount => {
    counterData.counter -= amount;
  }

  onMounted(()=>{
    console.log('Do stuff related to counter data');
  })

/*
  directives
*/
  // const vAutofocus = {
  //   mounted: (el)=>{
  //     el.focus()
  //   }
  // }

</script>

<!-- OPTIONS API -->
<!-- <script>
export default {
  data(){
    return {
      count: 0,
    }
  },
  computed: {
    myComputedProperty(){
      // perform logic based on a data property
      return 'my result';
    }
  },
  watch:{
    count(newCount, oldCount){
      if (newCount == 20) alert('asdasd')
    }
  },
  mounted(){
    console.log('mounted');
  },
  unmounted(){
    console.log('unmounted');
  },
  directives:{
    autofocus: {
      mounted(el){
        el.focus();
      }
    }
  }
}
</script>  -->

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
