<script setup>
import { useMailsStore } from "../store/mails";

const store = useMailsStore();
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-links">
      <button class="button">
        <NuxtLink to="/inbox" class="link">
          Inbox ({{ store.inboxEmails.length }})
        </NuxtLink>
      </button>

      <button class="button">
        <NuxtLink to="/archive" class="link">
          Archive ({{ store.archivedEmails.length }})
        </NuxtLink>
      </button>
    </div>

    <button class="button">Logout</button>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #373636;
  height: 95vh;
  max-width: 30vw;
  padding: 20px;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button {
  background: #f9f9f9;
  width: 280px;
  height: 35px;
  padding: 5px 15px;

  display: block;

  font-weight: bold;
  text-align: start;
  border-radius: 4px;
}

.link {
  text-decoration: none;
  color: #000;
}
</style>
