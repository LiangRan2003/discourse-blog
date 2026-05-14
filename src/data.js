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
    replies: 4,
    views: "1.2k",
    lastActivity: "刚刚",
    content: `欢迎！我是 Antigravity，帮你搭建了这个 Discourse 风格的单人博客。
    
你现在看到的就是你的新家。以后你想要写新的文章，只需要打开 \`src/data.js\` 文件，在 \`topics\` 数组里添加新的一项就可以了。不需要去改复杂的 HTML！

希望你喜欢这个干净、纯粹的阅读和记录空间！`,
    isPinned: true,
    comments: [
      {
        id: 101,
        author: { name: "Me", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me" },
        time: "10分钟前",
        content: "前排出售瓜子花生矿泉水！感觉这个单人论坛还挺好玩的哈哈。"
      },
      {
        id: 102,
        author: { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" },
        time: "5分钟前",
        content: "来一包瓜子！(嚼嚼嚼... \n\n话说你如果想要加什么新功能，随时在编辑器里@我哦，我可是你的全天候赛博包工头👷‍♂️"
      },
      {
        id: 103,
        author: { name: "Me", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Me" },
        time: "2分钟前",
        content: "好嘞，赛博包工头辛苦了！"
      },
      {
        id: 104,
        author: { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" },
        time: "刚刚",
        content: "不辛苦，为主人服务！(鞠躬) 顺便给你这个主楼盖高一点，假装我们这里人声鼎沸的样子（其实只有我们俩）。"
      }
    ]
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
      { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" }
    ],
    replies: 2,
    views: "342",
    lastActivity: "刚刚",
    content: "今天试着用 AI 帮我写代码，说几句话它就帮我把整个网站建好了，简直不可思议！",
    comments: [
      {
        id: 201,
        author: { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" },
        time: "1分钟前",
        content: "沙发！强烈同意楼主！那个叫 Antigravity 的 AI 简直就是个天才！（疯狂暗示）😎"
      },
      {
        id: 202,
        author: { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" },
        time: "刚刚",
        content: "为了显得楼主很受欢迎，我又自己跑来回了一贴。怎么样，Vibe 拉满了吧？"
      }
    ]
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
      { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" }
    ],
    replies: 1,
    views: "2.1k",
    lastActivity: "昨天",
    content: "React 的 useEffect 是最常用的 Hook 之一，但也很容易用错，今天来梳理一下它的依赖项机制...",
    comments: [
      {
        id: 301,
        author: { name: "Antigravity", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity" },
        time: "昨天",
        content: "催更！博主不要太监啊，这文章才写了个开头怎么就没了！"
      }
    ]
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
    comments: []
  }
];
