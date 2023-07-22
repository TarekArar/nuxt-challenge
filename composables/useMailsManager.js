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

  const allSelected = computed(() => emails.value.every((el) => el.selected));

  const selectAll = () => {
    const alreadySelected = allSelected.value;

    emails.value.map((email) => {
      email.selected = !alreadySelected;
    });
  };

  const markSelectedAsRead = () => {
    emails.value.map((email) => {
      if (email.selected) email.read = true;
    });
  };

  return {
    emails,
    selectedEmails,
    allSelected,
    selectAll,
    markSelectedAsRead,
    resetEmails,
  };
}
