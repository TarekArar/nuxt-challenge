export default function useMailsManager(initialMails) {
  const emails = ref(
    initialMails.map((el) => ({ ...el, selected: false, read: false }))
  );

  const selectedEmails = computed(() =>
    emails.value.filter((el) => el.selected)
  );

  const resetEmails = (newEmails) =>
    (emails.value = newEmails.map((el) => ({
      ...el,
      selected: false,
      read: false,
    })));

  const selectAll = (event) => {
    emails.value.map((email) => (email.selected = event.target.checked));
  };

  const markSelectedAsRead = () => {
    emails.value.map((email) => {
      if (email.selected) email.read = true;
    });
  };

  const keydownEventListener = (event) => {
    console.log(event.keyCode);
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

  return { emails, selectedEmails, selectAll, markSelectedAsRead, resetEmails };
}

// watch(store.inboxEmails, () => {
//   emails.value = store.inboxEmails.map((el) => ({
//     ...el,
//     selected: false,
//     read: false,
//   }));
// });
