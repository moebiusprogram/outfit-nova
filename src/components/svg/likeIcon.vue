<template>
    <div>
        <svg 
        @click="toggleLike"
        :class="{ liked: isLiked }"
        width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1673 8.3335C19.1673 7.89147 18.9917 7.46755 18.6792 7.15498C18.3666 6.84242 17.9427 6.66683 17.5007 6.66683H12.234L13.034 2.8585C13.0507 2.77516 13.059 2.6835 13.059 2.59183C13.059 2.25016 12.9173 1.9335 12.6923 1.7085L11.809 0.833496L6.32565 6.31683C6.01732 6.62516 5.83398 7.04183 5.83398 7.50016V15.8335C5.83398 16.2755 6.00958 16.6994 6.32214 17.012C6.6347 17.3246 7.05862 17.5002 7.50065 17.5002H15.0007C15.6923 17.5002 16.284 17.0835 16.534 16.4835L19.0507 10.6085C19.1257 10.4168 19.1673 10.2168 19.1673 10.0002V8.3335ZM0.833984 17.5002H4.16732V7.50016H0.833984V17.5002Z" :fill="colorLike"/>
        </svg>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const isLiked = ref(false);
        const likes = ref(0);
        const colorLike = ref('#484848');


        const toggleLike = () => {
            isLiked.value = !isLiked.value;
            likes.value += isLiked.value ? 1 : -1;
        };

        return { isLiked, likes, toggleLike, colorLike };
    },
};
</script>

<style lang="scss" scoped>
svg {
    transition: transform .2s;
}

svg.liked {
    fill: red;
    transform: scale(1.2);
    animation: heart-burst .8s steps(28) 1;
}

@keyframes heart-burst {
    0% {
        transform: scale(0.2);
    }
    30% {
        transform: scale(1.2);
    }
    40% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1.1);
    }
    60% {
        transform: scale(0.95);
    }
    70% {
        transform: scale(1.05);
    }
    80% {
        transform: scale(0.98);
    }
    90% {
        transform: scale(1.02);
    }
    100% {
        transform: scale(1);
    }
}
</style>