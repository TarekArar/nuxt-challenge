<script setup>
const route = useRoute();
</script>

<template>
  <div class="container">
    <sidebar />
    <div class="main">
      <h2 class="title">{{ route.name == "index" ? "Inbox" : route.name }}</h2>
      <slot />
    </div>
  </div>
</template>

<style scoped>
body,
* {
  font-family: "Almarai", sans-serif;
}
.container {
  display: flex;
  width: 100vh;
}

.main {
  max-width: calc(100vw - 350px);
  height: 100vh;
  flex-shrink: 2;
}

.title {
  margin-left: 20px;
  text-transform: capitalize;
}
</style>
