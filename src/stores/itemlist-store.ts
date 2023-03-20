
// stores/itemlist-store.ts

import { defineStore } from 'pinia';
import axios from "axios";
import Item from "models";

export const useItemListStore = defineStore('itemlist', () => {
  const state = ref<Array<Item>>([])
      items: [
        {
        id: 0,
        item: '',
        recurring: '',
        date_recorded: '',
        price: '',
        aisle: '',
        barcode: '',
        store_id: 0,
        coupon_id: 0,
        person_id: 0,
        }
      ]
    )}

  }),
  getters: {
    getItemList: (state) => state.itemList,
  },
  actions: {
  },
});
