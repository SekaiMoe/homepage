import { PersonalInfo } from '../types/personalInfo';

export const personalInfo: PersonalInfo = {
  name: "About SekaiMoe(A.K.A 二葉琉璃)",
  title: "我萌故我在！！！",
  avatar: "/placeholder.svg?height=150&width=150",
  bio: "Life is short, creative more.",
  skills: ["JavaScript", "TypeScript", "C++", "Makefile", "Python", "Docker"],
  about: [
    "我是一名梦想成为马猴烧酒的半吊子开发者。",
    "我热衷于编写 C++ 程序和在不同的设备上运行 Linux 系统。",
    "在空闲时间，我喜欢参与开源项目和技术社区活动。"
  ],
  projects: {
    created: [
      {
        name: "Kernel Build Action",
        description: "使用 Github Action 自动构建内核的操作",
        link: "https://github.com/dabao1955/kernel_build_action"
      },
      {
        name: "志愿分数查询",
        description: "使用 C++17 和 Vue 构建的志愿分数查询系统",
        link: "https://github.com/SekaiMoe/985211helper-liaoning2025"
      }
    ],
    participated: [
      {
        name: "KernelSU",
        description: "参与了网站维基，管理器的日语和荷兰语翻译的编写",
        link: "https://github.com/tiann/KernelSU"
      },
      {
        name: "kawaii-gcc",
        description: "参与了部分翻译的编写",
        link: "https://github.com/Bill-Haku/kawaii-gcc"
      }
    ]
  },
  links: [
    {
      name: "Blog",
      url: "https://dpkg123.site"
    },
    {
      name: "GitHub",
      url: "https://github.com/dabao1955"
    },
    {
      name: "Bilibili",
      url: "https://space.bilibili.com/400629023"
    },
    {
      name: "Telegram",
      url: "https://t.me/dabao1955"
    }
  ]
};
