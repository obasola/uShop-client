<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo } from 'components/models';
import personComponent from 'components/PersonComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { personComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'Watch video: Java 18 Essentials',
      },
      {
        id: 2,
        content: 'Watch video: Quasar Framework',
      },
      {
        id: 3,
        content: 'Watch video: Java Puzzles',
      },
      {
        id: 4,
        content: 'Watch video: Spring Boot',
      },
      {
        id: 5,
        content: 'Watch video: Vue 3 and Axios development',
      },
    ]);

    return { todos };
  },
});
</script>
