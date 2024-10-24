<template>
  <div class="md3-layout">
    <header class="md3-top-app-bar">
      <h1 class="md3-headline-large">{{ info.name }}</h1>
      <h2 class="md3-title-large">{{ info.title }}</h2>
    </header>

    <main class="md3-main-content">
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

      <div class="md3-layout-grid">
        <section class="md3-card about">
          <h3 class="md3-headline-small">关于我</h3>
          <p v-for="(paragraph, index) in info.about" :key="index" class="md3-body-medium">
            {{ paragraph }}
          </p>
        </section>

        <section class="md3-card projects">
          <h3 class="md3-headline-small">项目</h3>
          <ul class="md3-list">
            <li v-for="project in info.projects" :key="project.name" class="md3-list-item">
              <div class="md3-list-item-content">
                <span class="md3-list-item-title">{{ project.name }}</span>
                <span class="md3-list-item-secondary">{{ project.description }}</span>
              </div>
              <a :href="project.link" target="_blank" class="md3-icon-button">
                <span class="material-icons">open_in_new</span>
              </a>
            </li>
          </ul>
        </section>

        <section class="md3-card links">
          <h3 class="md3-headline-small">链接</h3>
          <ul class="md3-list">
            <li v-for="link in info.links" :key="link.name" class="md3-list-item">
              <a :href="link.url" target="_blank" class="md3-list-item-link">
                <span class="md3-list-item-title">{{ link.name }}</span>
                <span class="material-icons">arrow_forward</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { personalInfo } from '../utils/personalData';

export default defineComponent({
  name: 'PersonalInfo',
  setup() {
    return {
      info: personalInfo
    };
  }
});
</script>

<style scoped>
/* Material Design 3 inspired styles */
.md3-layout {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #EADDFF;
  --md-sys-color-on-primary-container: #21005D;
  --md-sys-color-secondary: #625B71;
  --md-sys-color-on-secondary: #FFFFFF;
  --md-sys-color-secondary-container: #E8DEF8;
  --md-sys-color-on-secondary-container: #1D192B;
  --md-sys-color-surface: #FFFBFE;
  --md-sys-color-on-surface: #1C1B1F;
  
  font-family: Roboto, sans-serif;
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
}

.md3-top-app-bar {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 16px;
  text-align: center;
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

.md3-main-content {
  padding: 24px;
}

.md3-hero {
  text-align: center;
  margin-bottom: 32px;
}

.md3-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 16px;
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
}

.md3-layout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .md3-layout-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.md3-card {
  background-color: var(--md-sys-color-surface);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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

.md3-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.md3-list-item {
  padding: 12px 0;
  border-bottom: 1px solid rgba(0,0,0,0.12);
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
}

.md3-list-item-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: var(--md-sys-color-on-surface);
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
