import { reactive, computed, watch, onMounted, nextTick } from 'vue'

// Global State
const counterData = reactive({
    counter: 0,
    counterTitle : "My Counter"
})

export function useCounter(){
    
    // show alert if counter reach 20
    watch(() => counterData.counter, (newCount, oldCount) => {
    if(newCount == 20) alert('Way to go! You made it to 20!!');
    })

    // computed variable that show the counter odd or even
    const oddOrEven = computed(() => {
    if (counterData.counter%2 == 0) return 'even';
    else return 'odd';
    });



    const increaseCounter = async (amount, e) => {
    counterData.counter += amount;
    
    // writing form nextTick 1 
    // nextTick(()=>{
    //   console.log('do something when counter has updated in the dom')
    // })

    // writing form nextTick 2
    await nextTick()
    console.log('do something when counter has updated in the dom')
    }

    const decreaseCounter = amount => {
    counterData.counter -= amount;
    }

    onMounted(()=>{
    console.log('Do stuff related to counter data');
    })

    return{
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
    }
}