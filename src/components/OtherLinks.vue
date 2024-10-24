<template>
  <div class="other-links">
    <h2 class="md3-headline-medium">其他链接</h2>
    <ul class="md3-list">
      <li v-for="(link, index) in info.links" :key="link.name" class="md3-list-item" :style="{ animationDelay: `${index * 0.1}s` }">
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
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  animation: slideIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
  transition: background-color 0.2s ease;
}

.md3-list-item-link:hover {
  background-color: var(--md-sys-color-secondary-container);
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
  transition: transform 0.2s ease;
}

.md3-list-item-link:hover .material-icons {
  transform: translateX(4px);
}
</style>
