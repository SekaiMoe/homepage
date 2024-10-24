import { PersonalInfo } from '../types/personalInfo';

export const personalInfo: PersonalInfo = {
  name: "张三",
  title: "全栈开发工程师",
  avatar: "/placeholder.svg?height=150&width=150",
  bio: "热爱编程，专注于Web开发和人工智能领域。",
  skills: ["JavaScript", "TypeScript", "Vue.js", "Node.js", "Python", "Docker"],
  about: [
    "我是一名充满激情的全栈开发工程师，拥有5年的行业经验。",
    "我热衷于创造直观、高效的用户界面和强大的后端系统。",
    "在空闲时间，我喜欢参与开源项目和技术社区活动。"
  ],
  projects: [
    {
      name: "个人博客系统",
      description: "使用Vue.js和Node.js构建的响应式个人博客系统",
      link: "https://github.com/yourusername/blog-project"
    },
    {
      name: "任务管理应用",
      description: "基于React Native的跨平台任务管理移动应用",
      link: "https://github.com/yourusername/task-manager-app"
    },
    {
      name: "AI聊天机器人",
      description: "使用Python和自然语言处理技术开发的智能聊天机器人",
      link: "https://github.com/yourusername/ai-chatbot"
    }
  ],
  links: [
    {
      name: "个人博客",
      url: "https://yourblog.com"
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername"
    }
  ]
};
