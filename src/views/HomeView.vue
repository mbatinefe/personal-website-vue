<script setup>

import { ref } from "vue";
import Square from "../components/SquareLoading.vue";

// timeAgo.js function
function timeAgo(timestamp) {
    const now = new Date();
    const updatedTime = new Date(timestamp);
  
    const timeDifference = now - updatedTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    if (years > 0) {
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (seconds > 0) {
        return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    } else {
        return 'just now';
    }
}


const isLoading = ref(true);


</script>


<template>
    <div class="container" id="general" v-if="!isLoading">

    </div>

    <div v-else class="loading-container">
      <Square :loading="isLoading"></Square>
    </div>

</template>


<style scoped>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

</style>