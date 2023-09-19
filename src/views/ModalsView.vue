<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label for="darkMod">show dark modal?</label>
            <input type="checkbox" id="darkMod" v-model="showDarkModal">
        </div>
        <button @click="showModal = true">Show modal</button>
        <component :is="showDarkModal ? ModalDark : Modal" title="My modal title (via props)" v-model="showModal" @hideModal="showModal=false">
            <template v-slot:title>
                This is a modal
            </template>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rerum officiis saepe optio nihil sequi, alias atque fugiat illo nam cum, corrupti dignissimos vero pariatur commodi dolorum quas debitis delectus!</p>
        </component>
    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import ModalDark from '../components/ModalDark.vue'

/* 
    modals
*/
const showDarkModal = ref(false)
const showModal = ref(false)

</script>

<!-- OPTIONS API -->
<!-- <script>
import Modal from '../components/Modal.vue'
export default{
    components: { Modal }
}
</script> -->

<style scoped>

.modals{
    position: relative;
}
</style>