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
    <h2 class="title">Archive</h2>

    <div class="emails-list">
      <div class="header">
        <div>
          <input
            type="checkbox"
            @click.stop="selectAll"
            v-model="allSelected"
          />
          Emails Selected ({{ selectedEmails.length }})
        </div>
      </div>

      <EmailsList :emailsList="emails" @archive="store.archiveEmail" />
    </div>
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
</style>
