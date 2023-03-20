<template>
  <q-page class="row items-center justify-evenly">
    <person-component
      title="User component"
      :people="people"
    ></person-component>
  </q-page>
</template>

<script setup lang="ts">
import { Person } from 'components/models';
import PersonComponent from 'components/PersonComponent.vue';
import { ref } from 'vue';
</script>
