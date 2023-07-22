import { defineStore } from "pinia";
import { Email } from "types/email";

const initialEmails = [
  {
    id: 0,
    subject: "Your 7- figure goes bye bye at midnight",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: false,
  },

  {
    id: 1,
    subject: "[WEEKEND ONLY] Get this NOW before",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: false,
  },
  {
    id: 2,
    subject: "Uh oh your prescription is expiring",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: false,
  },
  {
    id: 3,
    subject: "[WEEKEND ONLY] Get this NOW before",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: false,
  },
  {
    id: 4,
    subject: "Uh oh your prescription is expiring",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: true,
  },
  {
    id: 5,
    subject: "[WEEKEND ONLY] Get this NOW before",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: false,
  },
  {
    id: 6,
    subject: "Uh oh your prescription is expiring",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: true,
  },
  {
    id: 7,
    subject: "[WEEKEND ONLY] Get this NOW before",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
    archived: false,
  },
  {
    id: 8,
    subject: "Uh oh your prescription is expiring",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores animi! Nihil tenetur quis sit accusantium unde placeat mollitia esse debitis saepe voluptatibus delectus voluptatem expedita, sequi ducimus vel pariatur?`,
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
    archiveEmail(id: Number) {
      const el = this.emails.find((el) => el.id == id);
      if (el) el.archived = true;
    },
  },
});
