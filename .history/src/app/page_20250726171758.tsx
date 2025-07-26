export default function Home() {
  const categories = [
    {
      title: "搜索引擎",
      links: [
        { name: "Google", url: "https://www.google.com", desc: "全球最大的搜索引擎", icon: "https://www.google.com/favicon.ico" },
        { name: "百度", url: "https://www.baidu.com", desc: "中文搜索引擎", icon: "https://www.baidu.com/favicon.ico" },
        { name: "必应", url: "https://www.bing.com", desc: "微软搜索引擎", icon: "https://www.bing.com/favicon.ico" },
        { name: "DuckDuckGo", url: "https://duckduckgo.com", desc: "隐私保护搜索", icon: "https://duckduckgo.com/favicon.ico" }
      ]
    },
    {
      title: "开发工具",
      links: [
        { name: "GitHub", url: "https://github.com", desc: "代码托管平台", icon: "https://github.com/favicon.ico" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", desc: "程序员问答社区", icon: "https://stackoverflow.com/favicon.ico" },
        { name: "MDN", url: "https://developer.mozilla.org", desc: "Web开发文档", icon: "https://developer.mozilla.org/favicon-48x48.png" },
        { name: "CodePen", url: "https://codepen.io", desc: "在线代码编辑器", icon: "https://codepen.io/favicon.ico" }
      ]
    },
    {
      title: "设计资源",
      links: [
        { name: "Figma", url: "https://www.figma.com", desc: "协作设计工具", icon: "https://www.figma.com/favicon.ico" },
        { name: "Dribbble", url: "https://dribbble.com", desc: "设计师作品展示", icon: "https://dribbble.com/favicon.ico" },
        { name: "Unsplash", url: "https://unsplash.com", desc: "免费高质量图片", icon: "https://unsplash.com/favicon-32x32.png" },
        { name: "Behance", url: "https://www.behance.net", desc: "创意作品平台", icon: "https://www.behance.net/favicon.ico" }
      ]
    },
    {
      title: "社交媒体",
      links: [
        { name: "Twitter", url: "https://twitter.com", desc: "微博客社交网络", icon: "https://abs.twimg.com/favicons/twitter.3.ico" },
        { name: "LinkedIn", url: "https://www.linkedin.com", desc: "职业社交网络", icon: "https://www.linkedin.com/favicon.ico" },
        { name: "Reddit", url: "https://www.reddit.com", desc: "社区讨论平台", icon: "https://www.reddit.com/favicon.ico" },
        { name: "Discord", url: "https://discord.com", desc: "语音聊天平台", icon: "https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.ico" }
      ]
    },
    {
      title: "学习资源",
      links: [
        { name: "Coursera", url: "https://www.coursera.org", desc: "在线课程平台", icon: "https://www.coursera.org/favicon.ico" },
        { name: "Khan Academy", url: "https://www.khanacademy.org", desc: "免费教育资源", icon: "https://www.khanacademy.org/favicon.ico" },
        { name: "YouTube", url: "https://www.youtube.com", desc: "视频分享平台", icon: "https://www.youtube.com/favicon.ico" },
        { name: "Medium", url: "https://medium.com", desc: "知识分享平台", icon: "https://medium.com/favicon.ico" }
      ]
    },
    {
      title: "工具应用",
      links: [
        { name: "Notion", url: "https://www.notion.so", desc: "全能工作空间", icon: "https://www.notion.so/images/favicon.ico" },
        { name: "Trello", url: "https://trello.com", desc: "项目管理工具", icon: "https://trello.com/favicon.ico" },
        { name: "Slack", url: "https://slack.com", desc: "团队协作工具", icon: "https://slack.com/favicon.ico" },
        { name: "Zoom", url: "https://zoom.us", desc: "视频会议工具", icon: "https://zoom.us/favicon.ico" }
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
                          <img
                            src={link.icon}
                            alt={`${link.name} icon`}
                            className="w-6 h-6 mr-3 rounded-sm flex-shrink-0"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
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
