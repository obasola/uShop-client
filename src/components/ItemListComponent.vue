<template>
    <div class="q-pa-md" style="max-width: 400px">

    <q-card flat bordered class="my-card" :class="bg-grey-9">
      <q-card-section>
        <div class="row">
          <div class="col">
            <q-table
              title="Shopping List - Items"
              :rows="rows"
              :columns="columns"
              row-key="item"
            />
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>View Stores</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>View Coupons</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Old Shopping Lists</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>


    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Item {
  id: number;
  item: string;
  qty: number;
  per_item_price: number;
  recurring: string;
  date_recorded: string;
  amount: number;
  aisle: string;
  barcode: string;
  checked: boolean;
  store_id: number;
  coupon_id: number;
  person_id: number;
}

const item: Item = reactive(
  {
    id: 0, item: '', qty: 0, per_item_price: 0, recurring: 'T', date_recorded: '', amount: 0,
    aisle: '', barcode: '', checked: false, store_id: 0, coupon_id: 0, person_id: 0
  });
item.person_id = 1;
item.store_id = 1;
item.coupon_id = 1;


const columns = [
      { name: 'item', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'qty', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'price', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'recurring', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'date', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'amount', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'aisle', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'barcode', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'checked', align: 'left', label: 'Item', field: 'item', sortable: true },
      { name: 'coupon', label: 'Item', field: 'item', align: 'left' }
    ]
// const itemList: Item[] = [{...}]
const rows: Array<Item> =[{
    id: 0, item: 'Zest Soap', qty: 10, per_item_price: 0.75, recurring: 'T', date_recorded: '', amount: 7.50,
    aisle: '12C', barcode: '', checked: false, store_id: 1, coupon_id: 1, person_id: 1
    },
    {
    id: 0, item: 'Wheat Bead', qty: 2, per_item_price: 3.25, recurring: 'T', date_recorded: '', amount: 6.50,
    aisle: '2D', barcode: '', checked: false, store_id: 1, coupon_id: 0, person_id: 1
    },
    {
    id: 0, item: 'Cold Cuts - Smoked Turkey', qty: 2, per_item_price: 6.95, recurring: 'T', date_recorded: '', amount: 13.90,
    aisle: '12C', barcode: '', checked: false, store_id: 1, coupon_id: 0, person_id: 1
    }
];
/* Axios example
// Fetch dogs
    axios.get('https://table.quasarcomponents.com/dogs')
      .then(response => {
        dogs.value = response.data.data
      })
      .finally(() => {
        loading.value = false
      })

*/

</script>

<style lang="css" scoped>

</style>
