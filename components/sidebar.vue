<script setup>
import { useMailsStore } from "../store/mails";

const store = useMailsStore();
const route = useRoute();

onMounted(() => {
  console.log(route);
});
</script>

<template>
  <div class="sidebar">
    <img src="~/assets/icons/logo.svg" alt="App Logo" />
    <div class="sidebar-body">
      <div class="sidebar-links">
        <NuxtLink
          to="/"
          :class="{
            sidebar_button: true,
            'sidebar_button--active': route.href == '/',
          }"
        >
          <div class="link_info">
            <img src="~/assets/icons/inbox.svg" />
            <p>Inbox</p>
          </div>
          <p class="count">{{ store.inboxEmails.length }}</p>
        </NuxtLink>

        <NuxtLink
          to="/archive"
          :class="{
            sidebar_button: true,
            'sidebar_button--active': route.href == '/archive',
          }"
        >
          <div class="link_info">
            <img src="~/assets/icons/archive.svg" />
            <p>Archive</p>
          </div>
          <p class="count">{{ store.archivedEmails.length }}</p>
        </NuxtLink>
      </div>

      <div class="sidebar_button">
        <div class="link_info">
          <img src="~/assets/icons/logout.svg" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 95vh;
  width: 260px;
  padding: 20px;

  border: 1px solid #e5e7eb;
  background: #f8fafc;
}

.sidebar-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 85vh;
  margin-top: 32px;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.sidebar_button {
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 200px;
  height: 24px;

  color: #4b5563;
  font-family: Preevio;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;
}

.sidebar_button--active {
  border-radius: 54px;
  background: #d6e2fb;
}

.link_info {
  display: flex;
  gap: 8px;
}
</style>
