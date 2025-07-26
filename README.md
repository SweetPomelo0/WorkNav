# WorkNav 工作导航项目

## 项目简介

WorkNav 是一个基于 Next.js 开发的工作导航网站，旨在提供一个集中管理和快速访问各类工作资源的平台。项目支持多种分类导航，包括常用工具、AI工具、竞品分析、产品设计、邮箱、社交媒体和开发工具等。主要功能包括：

- 分类导航：按不同类别组织导航链接
- 搜索功能：快速查找所需资源
- 暗黑模式：支持系统主题自动切换
- 响应式设计：适配不同设备屏幕

## 项目结构

```
├── public/              # 静态资源目录
│   ├── img/             # 图片资源
│   ├── favicon.svg      # 网站图标
│   └── ...              # 其他静态资源
├── src/                 # 源代码目录
│   └── app/             # Next.js App Router 目录
│       ├── components/  # 组件目录
│       ├── globals.css  # 全局样式
│       ├── layout.tsx   # 布局组件
│       └── page.tsx     # 主页面组件
├── .gitignore           # Git 忽略文件
├── next.config.ts       # Next.js 配置文件
├── package.json         # 项目依赖配置
├── postcss.config.mjs   # PostCSS 配置
└── tsconfig.json        # TypeScript 配置
```

## 技术栈

- 框架：Next.js 15.4.4
- UI 库：React 19.1.0
- 样式：TailwindCSS 4
- 语言：TypeScript 5
- 工具库：
  - tiny-pinyin：用于中文拼音转换（搜索功能）

## 运行项目

### 环境要求

- Node.js 18.0.0 或更高版本
- npm、yarn、pnpm 或 bun 包管理器

安装依赖：  `npm install`
开发模式： `npm run dev`
构建项目： `npm run build`
启动生产环境： `npm run start`



## Git 提交代码步骤

```bash
git add .
git commit -m "提交说明：简要描述你的更改"
git push origin <分支名称>
```


## Todo 列表

- [ ] 添加更多常用的导航链接
- [ ] 实现导航数据的导入/导出功能
