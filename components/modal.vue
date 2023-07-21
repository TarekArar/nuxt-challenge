<script setup>
const props = defineProps({
  isOpen: Boolean,
  close: Function,
});

onMounted(() => {
  document.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) props.close();
  });
});
</script>

<template>
  <div class="modal-overlay" @click.passive="close">
    <div class="modal" @click.stop="">
      <p @click="close" class="close">Close (ESC)</p>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background-color: #000000da;
}

.modal {
  background-color: white;
  height: 100vh;
  width: 40vw;
  animation-name: slidein;
  animation-duration: 1s;
  padding: 0 20px;
}

@keyframes slidein {
  from {
    transform: translateX(40vw);
  }

  to {
    transform: translateX(0);
  }
}

.close {
  margin-bottom: 20px;
}
</style>
