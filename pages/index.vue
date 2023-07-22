<script setup>
import { useMailsStore } from "../store/mails";

const store = useMailsStore();

const { emails, selectedEmails, selectAll, markSelectedAsRead, resetEmails } =
  useMailsManager(store.inboxEmails);

const archive = () => {
  selectedEmails.value.map((el) => store.archiveEmail(el.id));
  resetEmails(store.inboxEmails);
};

const allSelected = computed(
  () => selectedEmails.value.length == emails.value.length
);
</script>

<template>
  <div class="inbox-container">
    <h2 class="title">Inbox</h2>

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
  </div>
</template>

<style scoped>
inbox-container {
  width: calc(100vh - 260px);
  height: 100vh;
  flex-shrink: 2;
  padding: 20px;
}

.title {
  margin-left: 20px;
}

.emails-list {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  height: 60px;
  width: calc(100vw - 320px);
  padding: 0px 24px;
  align-items: center;
  justify-content: space-between;

  align-self: stretch;

  border-bottom: 0.5px solid #e5e7eb;
  background: #fff;
}

.header-actions {
  display: flex;
  gap: 20px;
  padding: 5px 20px;
}

.header-action {
  display: flex;
  gap: 8px;
}
</style>
