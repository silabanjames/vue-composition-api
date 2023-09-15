<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <teleport to=".modal-container">
            <div v-if="showModal" class="modal">
                <h1>This is a modal</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rerum officiis saepe optio nihil sequi, alias atque fugiat illo nam cum, corrupti dignissimos vero pariatur commodi dolorum quas debitis delectus!</p>
                <button @click="showModal = false">Hide modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue'

/* 
    modals
*/
const showModal = ref(false)

</script>

<style scoped>
.modal{
    background-color: rgb(85, 102, 1);
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.modals{
    position: relative;
}
</style>