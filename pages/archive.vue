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
} = useMailsManager(store.archivedEmails);
</script>

<template>
  <div class="emails-list">
    <div class="header">
      <div class="header-action">
        <custom-checkbox
          :modelValue="allSelected"
          :value="allSelected"
          @click.stop="selectAll"
        />
        <p>Emails Selected ({{ selectedEmails.length }})</p>
      </div>
    </div>

    <EmailsList :emailsList="emails" @archive="store.archiveEmail" />
  </div>
</template>

<style scoped>
inbox-container {
  width: calc(100vw - 300px);
  height: 100vh;
  flex-shrink: 2;
}

.title {
  margin-left: 20px;
}

.header {
  display: flex;
  height: 60px;
  width: calc(100vw - 320px);
  padding: 0px 24px;
  align-items: center;
  justify-content: space-between;

  align-self: stretch;

  border-bottom: 1px solid #e5e7eb;
  background: #fff;
}

.emails-list {
  display: flex;
  flex-direction: column;
}

.button {
  background: #f9f9f9;
  height: 30px;
  padding: 5px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-action {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
