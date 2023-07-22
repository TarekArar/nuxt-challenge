<script setup lang="ts">
import { UIEmail } from "../types/email";

const props = defineProps({
  emailsList: { type: Array<UIEmail>, required: true },
});

const emit = defineEmits(["archive"]);

const onArchive = (id: Number) => emit("archive", id);

const activeEmail: Ref<UIEmail | null> = ref(null);

const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModal();

const onEmailClick = (email: UIEmail) => {
  activeEmail.value = email;
  openModal();
};
</script>

<template>
  <div class="emails--empty" v-if="emailsList.length == 0">
    There is no emails
  </div>
  <div v-else class="emails-container">
    <div
      v-for="email in emailsList"
      :key="email.id"
      :class="{ email: true, 'email--disabled': email.read }"
      @click="onEmailClick(email)"
    >
      <custom-checkbox
        :modelValue="email.selected"
        :value="email.selected"
        @click.stop="email.selected = !email.selected"
      />
      <p>{{ email.subject }}</p>
    </div>

    <modal v-if="isModalOpen" :close="closeModal">
      <div class="modal-header">
        <p @click="closeModal">Close (ESC)</p>

        <div class="modal-actions">
          <div class="modal-action">
            <img src="~/assets/icons/mail.svg" />
            <p>Mark as read (r)</p>
          </div>
          <div class="modal-action">
            <img
              src="~/assets/icons/trash.svg"
              @click="archive(activeEmail?.id)"
            />
            <p>Archive (a)</p>
          </div>
        </div>
      </div>

      <h3>{{ activeEmail.subject }}</h3>
      <p>{{ activeEmail.content }}</p>
    </modal>
  </div>
</template>

<style scoped>
.emails-container {
  display: flex;
  flex-direction: column;
}

.emails--empty {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  text-transform: capitalize;
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

  cursor: pointer;
}

.email--disabled {
  background: #f3f6fb;
}

.modal-header {
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  align-self: stretch;
}

.modal-actions {
  display: flex;
  gap: 20px;
}

.modal-action {
  display: flex;
  gap: 8px;
}

.email__checkbox {
  height: 16px;
  width: 16px;
  cursor: pointer;
}

.input[type="checkbox"]:checked {
  background-color: #0968fe;
}
</style>
