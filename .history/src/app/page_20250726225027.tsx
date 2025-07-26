"use client";
import { useState } from 'react';

export default function Home() {
  // 定义状态来跟踪当前选中的分类
  const [selectedCategory, setSelectedCategory] = useState("全部");
  // 定义状态来跟踪是否是初始加载状态
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  // 定义搜索状态
  const [searchTerm, setSearchTerm] = useState("");
  // 定义移动端搜索框展开状态
  const [isMobileSearchExpanded, setIsMobileSearchExpanded] = useState(false);
  
  // 定义导航分类和链接
  const categories = [
    {
      title: "常用",
      icon: "⭐",
      links: [
        { name: "澜精灵", url: "https://www.lanerp.com/Admin/index/index.html", desc: "日志 审批 工单", icon: "/img/lanjingling.png" },
        { name: "飞书", url: "https://enlightv.feishu.cn/wiki/D6Z1wOai9iVI4bkVlumcJprDn2e?fromScene=spaceOverview", desc: "产品 PRD 文档", icon: "https://feishu.cn/favicon.ico" },
        { name: "禅道", url: "https://enlightv.zentaopm.com/my/", desc: "需求 项目 任务", icon: "https://enlightv.zentaopm.com/favicon.ico" },
        { name: "即时设计", url: "https://js.design/recent", desc: "原型图 设计工具", icon: "https://img.js.design/assets/webImg/favicon.ico" },
        { name: "Hirender", url: "https://www.hirender.com/#/home", desc: "Hirender官网", icon: "https://www.hirender.com/favicon.ico" },
        { name: "hecoos", url: "https://www.hecoos.com/web/#/home", desc: "hecoos官网", icon: "https://www.hecoos.com/favicon.ico" },
        { name: "在线授权", url: "https://license.enlightv.com/web/", desc: "云授权管理", icon: "data:image/jpeg;base64,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" },
      ]
    },
    {
      title: "AI工具",
      icon: "🤖",
      links: [
        { name: "ChatGPT", url: "https://chatgpt.com/", desc: "AI问答 翻译 写作", icon: "https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp" },
        { name: "Gemini", url: "https://gemini.google.com/app", desc: "AI问答 搜索 翻译", icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_4g_512_lt_f94943af3be039176192d.png" },
        { name: "Claude", url: "https://claude.ai/", desc: "生成 优化 解释代码", icon: "https://claude.ai/favicon.ico" },
        { name: "Kimi", url: "https://www.kimi.com/", desc: "国产AI大模型", icon: "https://www.kimi.com/favicon.ico" },
        { name: "沉浸式翻译", url: "https://immersivetranslate.com/zh-Hans/?utm_source=ai-bot.cn", desc: "中英对照的网页翻译插件", icon: "https://immersivetranslate.com/favicon.ico" },
        { name: "Midjourney", url: "https://www.midjourney.com/explore?tab=video_top", desc: "AI驱动的图像生成工具", icon: "/img/mj.png" },
        { name: "即梦", url: "https://jimeng.jianying.com/ai-tool/home", desc: "AI图片/视频生成", icon: "/img/jimeng.png" }

      ]
    },
    {
      title: "竞品",
      icon: "🏢",
      links: [
        { name: "Disguise", url: "https://www.disguise.one/en", desc: "Disguise", icon: "/img/disguise.png" },
        { name: "Pixera", url: "https://pixera.one/zh/software/overview/", desc: "Pixera", icon: "/img/pixera.png" },
        { name: "Watchout", url: "https://www.dataton.com/", desc: "Dataton watchout", icon: "/img/watchout.png" },
        { name: "Resolume", url: "https://resolume.com/", desc: "Resolume", icon: "https://resolume.com/images/favicons/apple-touch-icon.png" },
        { name: "Smode", url: "https://www.smode.io/en/", desc: "Smode", icon: "/img/smode.png" },
        { name: "Green Hippo", url: "https://www.green-hippo.com/", desc: "Green Hippo", icon: "https://www.green-hippo.com/wp-content/themes/greenhippo/assets/icons/favicon.ico" },
        { name: "Millumin", url: "https://millumin.com/v5/index.php", desc: "Millumin", icon: "https://www.millumin.com/favicon/apple-icon-180x180.png" },
        { name: "Christie Pandoras Box", url: "https://www.christiedigital.com/products/christie-pandoras-box/", desc: "Christie Pandoras Box", icon: "https://www.christiedigital.com/apple-touch-icon.png" },
        { name: "MadMapper", url: "https://madmapper.com/madmapper/software", desc: "MadMapper", icon: "https://madmapper.com/images/favicon/apple-touch-icon.png" }

      ]
    },
    {
      title: "Coze",
      icon: "🔧",
      links: [
        { name: "命名专家", url: "https://www.coze.com/store/agent/7530562770308956161?bot_id=true", desc: "Naming Assistant命名专家", icon: "/img/coze.png" },
        { name: "中译英", url: "https://www.coze.com/store/agent/7530572378075152440?bot_id=true", desc: "Chinese to English", icon: "/img/coze.png" },
        { name: "英译中", url: "https://www.coze.com/store/agent/7530572202144694273?bot_id=true", desc: "English to Chinese", icon: "/img/coze.png" }
      ]
    },
    {
      title: "扣子",
      icon: "🔧",
      links: [
        { name: "命名专家", url: "https://www.coze.cn/store/agent/7530571775823577130?bot_id=true", desc: "Naming Assistant命名专家", icon: "/img/coze.png" },
        { name: "中译英", url: "https://www.coze.cn/store/agent/7530581452909035572?bot_id=true", desc: "中译英翻译专家", icon: "/img/coze.png" },
        { name: "英译中", url: "https://www.coze.cn/store/agent/7530581958234193970?bot_id=true", desc: "英译中翻译专家", icon: "/img/coze.png" }
      ]
    },
    {
      title: "邮箱",
      icon: "📧",
      links: [
        { name: "企业邮箱", url: "https://exmail.qq.com/cgi-bin/frame_html?sid=qPUC22bEtIEF7kUt,2&sign_type=&r=586a2a390ca023395a120877ca5870f0", desc: "企业邮箱", icon: "https://exmail.qq.com/favicon.ico" },
        { name: "Google邮箱", url: "https://mail.google.com/mail/u/0/#inbox", desc: "Google邮箱", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
        { name: "QQ邮箱", url: "https://mail.qq.com/", desc: "QQ邮箱", icon: "https://mail.qq.com/favicon.ico" },
        { name: "163邮箱", url: "https://mail.163.com/", desc: "163邮箱", icon: "https://mail.163.com/favicon.ico" }
      ]
    },
    {
      title: "社交媒体",
      icon: "📱",
      links: [
        { name: "Twitter", url: "https://twitter.com", desc: "社交媒体平台", icon: "https://twitter.com/favicon.ico" },
        { name: "LinkedIn", url: "https://www.linkedin.com", desc: "职业社交网络", icon: "https://www.linkedin.com/favicon.ico" },
        { name: "Reddit", url: "https://www.reddit.com", desc: "社区讨论平台", icon: "https://www.reddit.com/favicon.ico" }
      ]
    },
    {
      title: "开发工具",
      icon: "💻",
      links: [
        { name: "GitHub", url: "https://github.com", desc: "代码托管平台", icon: "https://github.com/favicon.ico" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", desc: "程序员问答社区", icon: "https://stackoverflow.com/favicon.ico" },
        { name: "MDN", url: "https://developer.mozilla.org", desc: "Web开发文档", icon: "https://developer.mozilla.org/favicon.ico" },
      ]
    }
    
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <header style={{ background: 'var(--header-bg)', borderBottom: '1px solid var(--card-border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">WorkNav</h1>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 mt-3" style={{ background: 'rgba(var(--background-rgb), 0.9)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 overflow-x-auto">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2 md:mr-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="hidden sm:inline text-sm font-medium" style={{ color: 'var(--text-primary)' }}>分类</span>
              </div>
            </div>
            <div className="flex space-x-1 md:space-x-2 overflow-x-auto pb-1 scrollbar-thin flex-grow">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory("全部");
                  setIsInitialLoad(false);
                }}
                className="text-xs font-medium whitespace-nowrap px-2 md:px-3 py-1 md:py-1.5 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-opacity-90 flex-shrink-0"
                style={{ 
                  background: (selectedCategory === "全部" && !isInitialLoad) ? 'var(--accent)' : 'var(--card-bg)',
                  border: '1px solid ' + ((selectedCategory === "全部" && !isInitialLoad) ? 'var(--accent)' : 'var(--card-border)'),
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  color: (selectedCategory === "全部" && !isInitialLoad) ? 'white' : 'var(--text-primary)'
                }}
              >
                全部
              </a>
              {categories.map((category, index) => (
                <a 
                  key={index}
                  href={`#category-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(category.title);
                    setIsInitialLoad(false);
                    const element = document.getElementById(`category-${index}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-xs font-medium whitespace-nowrap px-2 md:px-3 py-1 md:py-1.5 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-opacity-90 flex-shrink-0 flex items-center"
                  style={{ 
                    background: selectedCategory === category.title ? 'var(--accent)' : 'var(--card-bg)',
                    border: '1px solid ' + (selectedCategory === category.title ? 'var(--accent)' : 'var(--card-border)'),
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    color: selectedCategory === category.title ? 'white' : 'var(--text-primary)'
                  }}
                >
                  <span className="text-sm">{category.icon}</span>
                  <span className="hidden md:inline ml-1">{category.title}</span>
                </a>
              ))}
            </div>
            
            {/* Search Box */}
            <div className="flex-shrink-0 ml-2 md:ml-4">
              {/* 桌面端搜索框 */}
              <div className="hidden md:block relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="搜索网站..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    // 如果有搜索内容，自动切换到"全部"分类
                    if (e.target.value.trim()) {
                      setSelectedCategory("全部");
                      setIsInitialLoad(false);
                    }
                  }}
                  className="w-64 pl-10 pr-4 py-2 text-sm rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    background: 'var(--card-bg)',
                    borderColor: 'var(--card-border)',
                    color: 'var(--text-primary)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--card-border)';
                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                  }}
                />
              </div>
              
              {/* 移动端搜索 */}
              <div className="md:hidden relative">
                {!isMobileSearchExpanded ? (
                  // 搜索图标按钮
                  <button
                    onClick={() => setIsMobileSearchExpanded(true)}
                    className="p-2 rounded-lg border transition-all duration-200 hover:shadow-md"
                    style={{
                      background: 'var(--card-bg)',
                      borderColor: 'var(--card-border)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                  >
                    <svg 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </button>
                ) : (
                  // 展开的搜索框
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg 
                          className="h-4 w-4" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="搜索网站..."
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          // 如果有搜索内容，自动切换到"全部"分类
                          if (e.target.value.trim()) {
                            setSelectedCategory("全部");
                            setIsInitialLoad(false);
                          }
                        }}
                        className="w-36 sm:w-48 pl-10 pr-4 py-2 text-sm rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{
                          background: 'var(--card-bg)',
                          borderColor: 'var(--card-border)',
                          color: 'var(--text-primary)',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--card-border)';
                          e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                        }}
                        autoFocus
                      />
                    </div>
                    {/* 关闭按钮 */}
                    <button
                      onClick={() => {
                        setIsMobileSearchExpanded(false);
                        setSearchTerm("");
                      }}
                      className="p-2 rounded-lg border transition-all duration-200 hover:shadow-md"
                      style={{
                        background: 'var(--card-bg)',
                        borderColor: 'var(--card-border)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      <svg 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M6 18L18 6M6 6l12 12" 
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-b border-solid w-full mt-1" style={{ borderColor: 'var(--card-border)' }}></div>
        </div>
      </div>

      {/* Main Content */}
       <main className="max-w-7xl mx-auto px-6 py-8">
         <div className="space-y-10">
           {categories
             .filter(category => selectedCategory === "全部" || category.title === selectedCategory)
             .map((category, index) => {
               // 如果有搜索词，过滤链接
               const filteredLinks = searchTerm.trim() 
                 ? category.links.filter(link => 
                     link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     link.desc.toLowerCase().includes(searchTerm.toLowerCase())
                   )
                 : category.links;
               
               // 如果搜索后没有匹配的链接，不显示该分类
               if (searchTerm.trim() && filteredLinks.length === 0) {
                 return null;
               }
               
               return (
             <div 
               key={index}
               id={`category-${index}`} 
               style={{ 
                 background: 'var(--card-bg)', 
                 borderColor: 'var(--card-border)' 
               }} 
               className="rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg"
             >
               <h2 
                 className="text-lg font-semibold mb-6 relative inline-block"
                 style={{ color: 'var(--text-primary)' }}
               >
                 <span className="relative z-10">{category.title}</span>
                 <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 rounded-full opacity-30"
                  style={{ background: 'var(--accent)', transform: 'translateY(6px)' }}
                ></span>
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                 {filteredLinks.map((link, linkIndex) => (
                   <a
                     key={linkIndex}
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{ 
                       borderColor: 'var(--card-border)',
                       background: 'var(--card-bg)'
                     }}
                     className="block p-4 rounded-xl border hover:shadow-md transition-all duration-200 group relative"
                   >

                     <div className="flex items-center justify-between">
                       <div className="flex items-center flex-1">
                         <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center">
                           {link.icon ? (
                             <img 
                               src={link.icon} 
                               alt={`${link.name} icon`}
                               className="w-6 h-6 object-contain"
                             />
                           ) : (
                             <div 
                               style={{ background: 'var(--card-hover)' }}
                               className="w-6 h-6 rounded-md flex items-center justify-center"
                             >
                               <span style={{ color: 'var(--text-secondary)' }} className="text-xs font-medium">
                                 {link.name.charAt(0).toUpperCase()}
                               </span>
                             </div>
                           )}
                         </div>
                         <div className="flex-1">
                           <h3 
                             style={{ color: 'var(--text-primary)' }}
                             className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                           >
                             {link.name}
                           </h3>
                           <p 
                             style={{ color: 'var(--text-secondary)' }}
                             className="text-sm mt-1"
                           >
                             {link.desc}
                           </p>
                         </div>
                       </div>

                     </div>
                   </a>
                 ))}
               </div>
               </div>
               );
             })}
         </div>
       </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--card-border)', background: 'var(--footer-bg)' }} className="mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="text-center">
            <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
              © 2024 WorkNav. Cathy的工作导航站
              <span className="inline-block mx-2 opacity-50">•</span>
              <span className="opacity-70">极简风格</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
