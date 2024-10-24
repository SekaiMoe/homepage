<template>
  <div class="other-links">
    <h2 class="md3-headline-medium">其他链接</h2>
    <ul class="md3-list">
      <li v-for="link in info.links" :key="link.name" class="md3-list-item">
        <a :href="link.url" target="_blank" class="md3-list-item-link">
          <span class="md3-list-item-title">{{ link.name }}</span>
          <span class="material-icons">arrow_forward</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PersonalInfo } from '../types/personalInfo';

export default defineComponent({
  name: 'OtherLinks',
  props: {
    info: {
      type: Object as PropType<PersonalInfo>,
      required: true
    }
  }
});
</script>

<style scoped>
.other-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.md3-headline-medium {
  font-size: 28px;
  font-weight: 400;
  margin: 0 0 16px;
}

.md3-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.md3-list-item {
  border-bottom: 1px solid rgba(0,0,0,0.12);
}

.md3-list-item:last-child {
  border-bottom: none;
}

.md3-list-item-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  text-decoration: none;
  color: var(--md-sys-color-on-surface);
}



.md3-list-item-title {
  font-size: 16px;
  font-weight: 500;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
