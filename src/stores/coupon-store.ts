
// stores/coupon-store.ts

import { defineStore } from 'pinia';
import axios from "axios"

export const useCouponStore = defineStore('coupon', {
  state: () => ({
    coupon: {
      id: 0,
      name: '',
      barcode: '',
      discount: 0
    }
  }),
  getters: {
    getCoupon: (state) => state.coupon,
  },
  actions: {
  },
});

