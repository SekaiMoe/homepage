<template>
  <div class="app">
    <PersonalInfo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PersonalInfo from './components/PersonalInfo.vue';

export default defineComponent({
  name: 'App',
  components: {
    PersonalInfo
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
