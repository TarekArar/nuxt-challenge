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
      <div class="header__action">
        <custom-checkbox
          @click.stop="selectAll"
          :modelValue="allSelected"
          :value="allSelected"
        />
        <p>Emails Selected ({{ selectedEmails.length }})</p>
      </div>

      <div class="header__actions">
        <div class="header__action" @click="markSelectedAsRead">
          <img src="~/assets/icons/mail.svg" />
          <p>Mark as read (r)</p>
        </div>
        <div class="header__action" @click="archive">
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
  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e7eb;
}

.header__actions {
  display: flex;
  gap: 20px;
}

.header__action {
  display: flex;
  gap: 8px;
}
</style>
