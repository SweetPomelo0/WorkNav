export default function Home() {
  const categories = [
    {
      title: "搜索引擎",
      links: [
        { name: "Google", url: "https://www.google.com", desc: "全球最大的搜索引擎" },
        { name: "百度", url: "https://www.baidu.com", desc: "中文搜索引擎" },
        { name: "必应", url: "https://www.bing.com", desc: "微软搜索引擎" },
        { name: "DuckDuckGo", url: "https://duckduckgo.com", desc: "隐私保护搜索" }
      ]
    },
    {
      title: "开发工具",
      links: [
        { name: "GitHub", url: "https://github.com", desc: "代码托管平台" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", desc: "程序员问答社区" },
        { name: "MDN", url: "https://developer.mozilla.org", desc: "Web开发文档" },
        { name: "CodePen", url: "https://codepen.io", desc: "在线代码编辑器" }
      ]
    },
    {
      title: "设计资源",
      links: [
        { name: "Figma", url: "https://www.figma.com", desc: "协作设计工具" },
        { name: "Dribbble", url: "https://dribbble.com", desc: "设计师作品展示" },
        { name: "Unsplash", url: "https://unsplash.com", desc: "免费高质量图片" },
        { name: "Behance", url: "https://www.behance.net", desc: "创意作品平台" }
      ]
    },
    {
      title: "社交媒体",
      links: [
        { name: "Twitter", url: "https://twitter.com", desc: "微博客社交网络" },
        { name: "LinkedIn", url: "https://www.linkedin.com", desc: "职业社交网络" },
        { name: "Reddit", url: "https://www.reddit.com", desc: "社区讨论平台" },
        { name: "Discord", url: "https://discord.com", desc: "语音聊天平台" }
      ]
    },
    {
      title: "学习资源",
      links: [
        { name: "Coursera", url: "https://www.coursera.org", desc: "在线课程平台" },
        { name: "Khan Academy", url: "https://www.khanacademy.org", desc: "免费教育资源" },
        { name: "YouTube", url: "https://www.youtube.com", desc: "视频分享平台" },
        { name: "Medium", url: "https://medium.com", desc: "知识分享平台" }
      ]
    },
    {
      title: "工具应用",
      links: [
        { name: "Notion", url: "https://www.notion.so", desc: "全能工作空间" },
        { name: "Trello", url: "https://trello.com", desc: "项目管理工具" },
        { name: "Slack", url: "https://slack.com", desc: "团队协作工具" },
        { name: "Zoom", url: "https://zoom.us", desc: "视频会议工具" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-3 tracking-tight">WorkNav</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">工作网址导航</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
       <main className="max-w-7xl mx-auto px-6 py-12">
         <div className="space-y-8">
           {categories.map((category, index) => (
             <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
               <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                 {category.title}
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                 {category.links.map((link, linkIndex) => (
                   <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center flex-1">
                          {/* 图标占位区域 */}
                          <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0">
                            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {link.desc}
                            </p>
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ml-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>© 2024 WorkNav. Cathy的工作导航站</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
