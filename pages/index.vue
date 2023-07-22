<script setup>
import { useMailsStore } from "../store/mails";

const store = useMailsStore();

const {
  emails,
  selectedEmails,
  allSelected,
  selectAll,
  markSelectedAsRead,
  resetEmails,
} = useMailsManager(store.inboxEmails);

const archive = () => {
  selectedEmails.value.map((el) => store.archiveEmail(el.id));
  resetEmails(store.inboxEmails);
};

const keydownEventListener = (event) => {
  console.log(event.keyCode);
  if (event.keyCode == 65) {
    archive();
  }

  if (event.keyCode == 82) {
    markSelectedAsRead();
  }
};

onMounted(() => {
  document.addEventListener("keydown", keydownEventListener);
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydownEventListener);
});
</script>

<template>
  <div class="emails-list">
    <div class="header">
      <div class="header-action">
        <custom-checkbox
          @click.stop="selectAll"
          :modelValue="allSelected"
          :value="allSelected"
        />
        <p>Emails Selected ({{ selectedEmails.length }})</p>
      </div>

      <div class="header-actions">
        <div class="header-action" @click="markSelectedAsRead">
          <img src="~/assets/icons/mail.svg" />
          <p>Mark as read (r)</p>
        </div>
        <div class="header-action" @click="archive">
          <img src="~/assets/icons/trash.svg" />
          <p>Archive (a)</p>
        </div>
      </div>
    </div>

    <EmailsList :emailsList="emails" @archive="store.archiveEmail" />
  </div>
</template>

<style scoped>
.emails-list {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 350px);
}

.header {
  display: flex;
  height: 60px;
  /* max-width: calc(100vw - 350px); */
  align-items: center;
  justify-content: space-between;

  padding-left: 20px;

  align-self: stretch;

  border-bottom: 0.5px solid #e5e7eb;
  background: #fff;
}

.header-actions {
  display: flex;
  gap: 20px;
}

.header-action {
  display: flex;
  gap: 8px;
}

.custom-checkbox {
  cursor: pointer;
}
</style>
