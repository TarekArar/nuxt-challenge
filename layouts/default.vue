<template>
  <div class="container">
    <sidebar />
    <slot />
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
</style>
