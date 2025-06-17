<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="text-center d-flex flex-column justify-content-center align-items-center h-100">
       <h1>404 <b-icon icon="bug"></b-icon></h1>
       <h2>page not found</h2>
       <RouterLink to="/login">Back to login</RouterLink>
    </div>
</template>