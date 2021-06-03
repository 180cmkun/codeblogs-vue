<template>
  <div id="app" class="container">
    <blog-header></blog-header>
    <router-view/>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue";
import "bootstrap3/dist/css/bootstrap.css";
export default {
  components: {
    BlogHeader
  }
};
</script>

<style>

</style>
