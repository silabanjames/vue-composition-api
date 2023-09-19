<template>
    <teleport to=".modal-container">
        <div class="modal-dark" v-if="modelValue">
            <h1>{{ props.title }}</h1>
            <slot />
            <button @click="$emit('update:modelValue', false)">Hide modal</button>

        </div>
    </teleport>
</template>

<script setup>
/*
props
*/
const props = defineProps({
    modelValue:{
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'The default title'
    }
})

/*
emit
*/
const emit = defineEmits(['update:modelValue', 'hideModal'])

const handleClickButton = () => {
    emit('update:modelValue', false)
}


</script>

<!-- Options API -->
<!-- <script>
export default{
    props:{
        title:{
            type: String,
            default: 'the Default value'
        }
    },
    methods:{
        buttonHideModal(){
            this.$emits('hideModal')
        }
    }
}
</script> -->

<style scoped>
.modal-dark {
    background-color: #333;
    color: white;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>