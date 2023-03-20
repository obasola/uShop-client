
// stores/marketplace-store.ts

import { defineStore } from 'pinia';
import axios from "axios"

export const useMarketplaceStore = defineStore('marketplace', {
  state: () => ({
    marketplace: {
      id: 0,
      name: '',
      website: '',
      address: '',
      city:'',
      state: '',
      zipcode: '',
      phone: ''
    }
  }),
  getters: {
    getMarketPlace: (state) => state.marketplace,
  },
  actions: {
  },
});
