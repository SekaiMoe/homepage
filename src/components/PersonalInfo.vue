<template>
  <div class="md3-layout">
    <main class="md3-main-content">
      <transition name="fade" mode="out-in">
        <component :is="currentTab" :info="info" :key="currentTab" />
      </transition>
    </main>
    <nav class="md3-bottom-nav">
      <button 
        v-for="tab in tabs"
        :key="tab.name"
        @click="setCurrentTab(tab.name)" 
        :class="{ active: currentTab === tab.name }"
        class="md3-bottom-nav-item"
      >
        <span class="md3-bottom-nav-icon-wrapper">
          <span class="material-icons">{{ tab.icon }}</span>
        </span>
        <span class="md3-bottom-nav-label">{{ tab.label }}</span>
      </button>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { personalInfo } from '../utils/personalData';
import AboutMe from './AboutMe.vue';
import PersonalProjects from './PersonalProjects.vue';
import OtherLinks from './OtherLinks.vue';

export default defineComponent({
  name: 'PersonalInfo',
  components: {
    AboutMe,
    PersonalProjects,
    OtherLinks
  },
  setup() {
    const currentTab = ref('AboutMe');
    const tabs = [
      { name: 'AboutMe', label: '关于我', icon: 'person' },
      { name: 'PersonalProjects', label: '个人项目', icon: 'work' },
      { name: 'OtherLinks', label: '其他链接', icon: 'link' }
    ];

    const setCurrentTab = (tabName: string) => {
      currentTab.value = tabName;
    };

    return {
      info: personalInfo,
      currentTab,
      tabs,
      setCurrentTab
    };
  }
});
</script>

<style scoped>
.md3-layout {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #EADDFF;
  --md-sys-color-on-primary-container: #21005D;
  --md-sys-color-secondary: #625B71;
  --md-sys-color-on-secondary: #FFFFFF;
  --md-sys-color-secondary-container: #E8DEF8;
  --md-sys-color-on-secondary-container: #1D192B;
  --md-sys-color-surface: #FFF5EE;
  --md-sys-color-on-surface: #1C1B1F;
  --md-sys-color-surface-variant: #D8BFD8;
  --md-sys-color-surface-variant-end: #E7E0EC;
  
  font-family: Roboto, sans-serif;
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.md3-main-content {
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
}

.md3-bottom-nav {
  display: flex;
  justify-content: space-around;
  background-color: var(--md-sys-color-surface-variant);
  border-top: 1px solid var(--md-sys-color-surface-variant-end);
  padding: 8px 0;
}

.md3-bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: var(--md-sys-color-on-surface);
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
  overflow: hidden;
}

.md3-bottom-nav-item:hover {
  color: var(--md-sys-color-primary);
}

.md3-bottom-nav-item.active {
  color: var(--md-sys-color-primary);
}

.md3-bottom-nav-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 32px;
  border-radius: 16px;
  transition: all 0.3s;
  position: relative;
  z-index: 1;
}

.md3-bottom-nav-item.active .md3-bottom-nav-icon-wrapper {
  background-color: var(--md-sys-color-primary-container);
  transform: scale(1.1);
}

.md3-bottom-nav-item .md3-bottom-nav-icon-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--md-sys-color-surface-variant-end);
  border-radius: 16px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s ease-out;
}

.md3-bottom-nav-item.active .md3-bottom-nav-icon-wrapper::before {
  opacity: 1;
  transform: scale(1);
}

.md3-bottom-nav-label {
  margin-top: 4px;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}

.md3-bottom-nav-item.active .md3-bottom-nav-label {
  font-weight: 500;
}

.material-icons {
  font-size: 24px;
  transition: all 0.3s;
}

.md3-bottom-nav-item.active .material-icons {
  transform: scale(1.1);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
