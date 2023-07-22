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

const onClose = () => {
  const el = document.querySelector(".modal");

  el.animate();
};
</script>

<template>
  <div class="modal-overlay" @click.passive="close">
    <div class="modal" @click.stop="">
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
  width: 710px;

  animation-name: slidein;
  animation-duration: 1s;
  padding: 30px;
}

@keyframes slidein {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
