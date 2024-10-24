<template>
  <div class="personal-projects">
    <h2 class="md3-headline-medium">个人项目</h2>
    <ul class="md3-list">
      <li v-for="(project, index) in info.projects" :key="project.name" class="md3-list-item" :style="{ animationDelay: `${index * 0.1}s` }">
        <div class="md3-list-item-content">
          <span class="md3-list-item-title">{{ project.name }}</span>
          <span class="md3-list-item-secondary">{{ project.description }}</span>
        </div>
        <a :href="project.link" target="_blank" class="md3-icon-button">
          <span class="material-icons">open_in_new</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PersonalInfo } from '../types/personalInfo';

export default defineComponent({
  name: 'PersonalProjects',
  props: {
    info: {
      type: Object as PropType<PersonalInfo>,
      required: true
    }
  }
});
</script>

<style scoped>
.personal-projects {
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
  padding: 16px 0;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.md3-list-item-content {
  display: flex;
  flex-direction: column;
}

.md3-list-item-title {
  font-size: 16px;
  font-weight: 500;
}

.md3-list-item-secondary {
  font-size: 14px;
  color: rgba(0,0,0,0.6);
}

.md3-icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--md-sys-color-primary);
  transition: transform 0.2s ease;
}

.md3-icon-button:hover {
  transform: scale(1.1);
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
