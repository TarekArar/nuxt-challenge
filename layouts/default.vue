<script setup>
const route = useRoute();
</script>

<template>
  <div class="layout__container">
    <sidebar />
    <div class="main">
      <h2 class="title">{{ route.name == "index" ? "Inbox" : route.name }}</h2>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout__container {
  display: flex;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: auto;
}

.main {
  max-width: calc(100vw - 300px);
  height: 100vh;
}

.title {
  margin-left: 20px;
  text-transform: capitalize;
}
</style>
