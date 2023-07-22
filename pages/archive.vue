<script setup>
import { useMailsStore } from "../store/mails";

const store = useMailsStore();

const { emails, selectedEmails, allSelected, selectAll, markSelectedAsRead } =
  useMailsManager(store.archivedEmails);

const markItemAsRead = (id) => (emails.value.read = true);
</script>

<template>
  <div class="emails-list">
    <div class="header">
      <div class="header__action">
        <custom-checkbox
          :modelValue="allSelected"
          :value="allSelected"
          @click.stop="selectAll"
        />
        <p>Emails Selected ({{ selectedEmails.length }})</p>
      </div>
    </div>

    <EmailsList
      :emailsList="emails"
      @archive="store.archiveEmail"
      @read="markItemAsRead"
    />
  </div>
</template>

<style scoped>
.emails-list {
  display: flex;
  flex-direction: column;
}

.header {
  padding-left: 20px;
  padding-bottom: 10px;

  border-bottom: 1px solid #e5e7eb;
}

.header__action {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
