<template>
    <div class="q-pa-md" style="max-width: 400px">

    <q-form onsubmit=".preventSubmit()"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" v-on:click="onSubmit" color="primary"/>
        <q-btn label="Reset"  v-on:click="onReset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
</template>

<script setup lang="ts">
import Item from '../types/models';
import { reactive } from 'vue';

const item:Item = reactive(Item);

function onSubmit() {
  console.log("Submit clicked");
}
function onReset() {
  console.log("Reset clicked");
}
</script>

<style lang="css" scoped>

</style>
