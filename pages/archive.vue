<script setup>
import { useMailsStore } from "../store/mails";

const store = useMailsStore();

const { emails, selectedEmails, selectAll, markSelectedAsRead, resetEmails } =
  useMailsManager(store.archivedEmails);

// const unArchive = () => {
//   selectedEmails.value.map((el) => store.unArchiveEmail(el.id));
//   resetEmails(store.archivedEmails);
// };
</script>

<template>
  <div class="inbox-container">
    <div class="inner-container">
      <h2>Archive</h2>
      <h1>Emails Selected ({{ selectedEmails.length }})</h1>

      <div class="emails-list">
        <header>
          <input
            type="checkbox"
            @click.stop="selectAll"
            v-model="allSelected"
          />
          <div class="button" @click="markSelectedAsRead">Mark as read (r)</div>
          <!-- <div class="button" @click="unArchive">Archive (a)</div> -->
        </header>

        <EmailsList :emailsList="emails" @archive="store.archiveEmail" />
      </div>
    </div>
  </div>
</template>

<style scoped>
inbox-container {
  width: 70vh;
  height: 100vh;
  flex-shrink: 2;
  padding: 20px;
}

.inner-container {
  margin-left: 40px;
}

header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.emails-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
</style>
