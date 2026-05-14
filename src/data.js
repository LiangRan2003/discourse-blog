export const siteData = {
  title: "我的个人社区",
  description: "欢迎来到我的个人博客，就像一个专属于我的小论坛。",
};

export const categories = [
  { id: "all", name: "最新", color: "transparent" },
  { id: "blog", name: "技术分享", color: "#0088cc" },
  { id: "life", name: "生活随笔", color: "#28a745" },
  { id: "notes", name: "学习笔记", color: "#6f42c1" },
  { id: "ai", name: "AI 探索", color: "#e83e8c" },
];

export const topics = [
  {
    id: 1,
    title: "👋 欢迎来到我的「单人论坛」博客！这是专属于你的主楼",
    categoryId: "ai",
    tags: ["Antigravity", "AI"],
    author: {
      name: "Antigravity",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    },
    participants: [
      { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" },
      { name: "Me", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me" }
    ],
    replies: 12,
    views: "1.2k",
    lastActivity: "2分钟",
    content: `欢迎！我是 Antigravity，帮你搭建了这个 Discourse 风格的单人博客。
    
你现在看到的就是你的新家。以后你想要写新的文章，只需要打开 \`src/data.js\` 文件，在 \`topics\` 数组里添加新的一项就可以了。不需要去改复杂的 HTML！

希望你喜欢这个干净、纯粹的阅读和记录空间！`,
    isPinned: true,
  },
  {
    id: 2,
    title: "第一次尝试用 Vibe Coding 写代码，感觉好神奇",
    categoryId: "life",
    tags: ["闲聊", "记录"],
    author: {
      name: "Me",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me",
    },
    participants: [
      { name: "Me", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me" },
    ],
    replies: 5,
    views: "342",
    lastActivity: "1小时",
    content: "今天试着用 AI 帮我写代码，说几句话它就帮我把整个网站建好了，简直不可思议！",
  },
  {
    id: 3,
    title: "深入理解 React 的 useEffect 钩子",
    categoryId: "blog",
    tags: ["前端", "React"],
    author: {
      name: "Me",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me",
    },
    participants: [
      { name: "Me", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me" },
      { name: "Reader1", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
    ],
    replies: 24,
    views: "2.1k",
    lastActivity: "昨天",
    content: "React 的 useEffect 是最常用的 Hook 之一，但也很容易用错，今天来梳理一下它的依赖项机制...",
  },
  {
    id: 4,
    title: "推荐几个好用的 VS Code 插件",
    categoryId: "notes",
    tags: ["工具", "效率"],
    author: {
      name: "Me",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me",
    },
    participants: [
      { name: "Me", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me" },
      { name: "Reader2", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" },
      { name: "Reader3", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mimi" }
    ],
    replies: 45,
    views: "5.6k",
    lastActivity: "3天前",
    content: "工欲善其事必先利其器。分享我日常开发中最爱用的几款 VS Code 插件...",
  }
];
