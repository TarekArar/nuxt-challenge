<script setup lang="ts">
import { UIEmail } from "../types/email";

const props = defineProps({
  emailsList: { type: Array<UIEmail>, required: true },
});

const activeEmailId: Ref<Number | null> = ref(null);

const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModal();

const onEmailClick = (id: Number) => {
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
      <p class="email-title">{{ email.text }}</p>
    </div>

    <modal v-if="isModalOpen" :close="closeModal">
      <div class="modal-header">
        <div class="modal-button">Mark as read (r)</div>
        <div class="modal-button">Archive (a)</div>
      </div>

      <p>{{ emailsList.find((email) => email.id == activeEmailId).text }}</p>
    </modal>
  </div>
</template>

<style scoped>
.emails-container {
  display: flex;
  flex-direction: column;
}

.email {
  display: flex;
  height: 60px;
  width: calc(100vw - 260px);
  padding: 0px 24px;
  align-items: center;
  gap: 15px;
  align-self: stretch;
  border: 0.5px solid #e5e7eb;
  background: #fff;
}

.email-title {
  color: #121829;
  font-family: Preevio;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.email--disabled {
  background: #f3f6fb;
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
