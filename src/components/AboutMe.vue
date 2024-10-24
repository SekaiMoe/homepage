<template>
  <div class="about-me">
    <header class="md3-header">
      <h1 class="md3-headline-large">{{ info.name }}</h1>
      <h2 class="md3-title-large">{{ info.title }}</h2>
    </header>
    
    <section class="md3-hero">
      <div class="md3-avatar">
        <img :src="info.avatar" :alt="info.name" />
      </div>
      <p class="md3-body-large">{{ info.bio }}</p>
      <div class="md3-chip-set">
        <span v-for="skill in info.skills" :key="skill" class="md3-chip">
          {{ skill }}
        </span>
      </div>
    </section>
    
    <section class="md3-card about">
      <h3 class="md3-headline-small">关于我</h3>
      <p v-for="(paragraph, index) in info.about" :key="index" class="md3-body-medium">
        {{ paragraph }}
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PersonalInfo } from '../types/personalInfo';

export default defineComponent({
  name: 'AboutMe',
  props: {
    info: {
      type: Object as PropType<PersonalInfo>,
      required: true
    }
  }
});
</script>

<style scoped>
.about-me {
  display: flex;
  flex-direction: column;
  gap: 24px;
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

.md3-header {
  text-align: center;
  margin-bottom: 16px;
}

.md3-headline-large {
  font-size: 32px;
  font-weight: 400;
  margin: 0;
}

.md3-title-large {
  font-size: 22px;
  font-weight: 400;
  margin: 8px 0 0;
}

.md3-hero {
  text-align: center;
}

.md3-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 16px;
  transition: transform 0.3s ease;
}

.md3-avatar:hover {
  transform: scale(1.05);
}

.md3-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.md3-body-large {
  font-size: 16px;
  line-height: 24px;
}

.md3-chip-set {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.md3-chip {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.md3-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.md3-card {
  background-color: var(--md-sys-color-surface);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: box-shadow 0.3s ease;
}

.md3-card:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
}

.md3-headline-small {
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 16px;
}

.md3-body-medium {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
}
</style>
