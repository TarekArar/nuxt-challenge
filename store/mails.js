import { defineStore } from "pinia";

const initialEmails = [
  {
    id: 0,
    text: "Your 7- figure goes bye bye at midnight",
    archived: false,
  },
  {
    id: 1,
    text: "[WEEKEND ONLY] Get this NOW before",
    archived: false,
  },
  {
    id: 2,
    text: "Uh oh your prescription is expiring",
    archived: false,
  },
];

export const useMailsStore = defineStore("emails", {
  state: () => {
    return {
      emails: initialEmails,
    };
  },
  getters: {
    archivedEmails: (state) => state.emails.filter((email) => email.archived),
    inboxEmails: (state) => state.emails.filter((email) => !email.archived),
  },
  actions: {
    archiveEmail(id) {
      this.emails.find((el) => el.id == id).archived = true;
    },
  },
});
