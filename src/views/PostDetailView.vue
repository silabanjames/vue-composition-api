<template>
    <div class="post-detail">
        <h1>This is a post page</h1>
        <p>Display the content of post with ID of {{ $route.params.id }} here</p>
        <div>
            <button @click="showPostId">Show Post Id</button>
            <button @click="goHomeIn3Seconds">Go Home In 3 Seconds</button>
            <button @click="goToFirstPost">Go To First Post</button>
        </div>
        <RouterLink to="/post">&lt; Back</RouterLink>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const showPostId = () => {
    alert(`The ID of this post is: ${route.params.id}`)
}

const goHomeIn3Seconds = () => {
    setTimeout(()=>{
        router.push('/')
    }, 3000)
}

const goToFirstPost = () => {
    router.push({
        name: 'postDetail',
        params: {
            id: 'id1'
        }
    })
}

</script>