<template>
  <div class="md3-layout">
    <main class="md3-main-content">
      <component :is="currentTab" :info="info" />
    </main>
    <nav class="md3-bottom-nav">
      <button @click="currentTab = 'AboutMe'" :class="{ active: currentTab === 'AboutMe' }">
        关于我
      </button>
      <button @click="currentTab = 'PersonalProjects'" :class="{ active: currentTab === 'PersonalProjects' }">
        个人项目
      </button>
      <button @click="currentTab = 'OtherLinks'" :class="{ active: currentTab === 'OtherLinks' }">
        其他链接
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
    return {
      info: personalInfo,
      currentTab
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
  --md-sys-color-surface: #FFFBFE;
  --md-sys-color-on-surface: #1C1B1F;
  
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
  background-color: var(--md-sys-color-surface);
  border-top: 1px solid var(--md-sys-color-secondary-container);
  padding: 8px 0;
}

.md3-bottom-nav button {
  background: none;
  border: none;
  color: var(--md-sys-color-on-surface);
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.3s;
}

.md3-bottom-nav button.active {
  color: var(--md-sys-color-primary);
}
</style>
