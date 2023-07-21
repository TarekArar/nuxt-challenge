<script setup>
const props = defineProps({
  emailsList: Array,
});

const activeEmailId = ref(null);

const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModal();

const onEmailClick = (id) => {
  activeEmailId.value = id;
  openModal();
};
</script>

<template>
  <div class="emails-container">
    <div
      v-for="email in emailsList"
      :key="email.id"
      :class="{ email: true, 'email--disabled': email.read }"
      @click="onEmailClick(email.id)"
    >
      <input type="checkbox" v-model="email.selected" @click.stop="" />
      <p>{{ email.text }}</p>
    </div>

    <transition name="slide-right">
      <modal v-if="isModalOpen" :close="closeModal">
        <div class="modal-header">
          <div class="modal-button">Mark as read (r)</div>
          <div class="modal-button">Archive (a)</div>
        </div>

        <p>{{ emailsList.find((email) => email.id == activeEmailId).text }}</p>
      </modal>
    </transition>
  </div>
</template>

<style scoped>
.emails-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.email {
  background-color: #f9f9f9;
  border-radius: 5px;
  display: flex;
  gap: 15px;
  align-items: center;
  width: 500px;
  padding: 0 20px;
  border: 1px solid #fbfbfb;
}

.email--disabled {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.modal-button {
  background: #f9f9f9;
  height: 30px;
  padding: 5px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
