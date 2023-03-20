import { defineStore } from 'pinia';
import axios from "axios"

export const usePersonStore = defineStore('person', {
  state: () => ({
    person: {
      id: 0,
      email: '',
      firstName: '',
      lastName: '',
      password:''
    },
    people: <Person>[]
  }),
  getters: {
    getPerson: (state) => state.person,
  },
  actions: {
  },
});
