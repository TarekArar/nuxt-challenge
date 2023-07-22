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
    <div class="sidebar__body">
      <div class="sidebar__links">
        <NuxtLink
          to="/"
          :class="{
            sidebar__button: true,
            'sidebar__button--active': route.href == '/',
          }"
        >
          <div class="link__info">
            <img src="~/assets/icons/inbox.svg" />
            <p>Inbox</p>
          </div>
          <p class="count">{{ store.inboxEmails.length }}</p>
        </NuxtLink>

        <NuxtLink
          to="/archive"
          :class="{
            sidebar__button: true,
            'sidebar__button--active': route.href == '/archive',
          }"
        >
          <div class="link__info">
            <img src="~/assets/icons/archive.svg" />
            <p>Archive</p>
          </div>
          <p class="count">{{ store.archivedEmails.length }}</p>
        </NuxtLink>
      </div>

      <div class="sidebar__button">
        <div class="link__info">
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

.sidebar__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 85vh;
  margin-top: 32px;
}

.sidebar__links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.sidebar__button {
  width: 200px;
  height: 24px;

  cursor: pointer;

  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;
  color: #4b5563;
  font-size: 16px;
  font-weight: 500;
}

.sidebar__button--active {
  border-radius: 54px;
  background: #d6e2fb;
  color: #121829;
}

.link__info {
  display: flex;
  gap: 8px;
}
</style>
