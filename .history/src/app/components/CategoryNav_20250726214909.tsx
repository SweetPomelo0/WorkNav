'use client';

import { useState, useEffect } from 'react';

interface Category {
  title: string;
  links: {
    name: string;
    url: string;
    desc: string;
    icon: string;
  }[];
}

interface CategoryNavProps {
  categories: Category[];
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // 监听滚动事件，根据当前视口位置更新活跃分类
  useEffect(() => {
    const handleScroll = () => {
      const categoryElements = categories.map((_, index) => 
        document.getElementById(`category-${index}`)
      );
      
      // 找到当前在视口中的分类
      const currentCategory = categoryElements.findIndex((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        // 当元素顶部在视口中或刚好在视口上方时，认为是当前分类
        return rect.top <= 200 && rect.bottom >= 0;
      });
      
      if (currentCategory !== -1) {
        setActiveCategory(currentCategory);
      }
    };

    // 初始化时执行一次
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  return (
    <div className="mt-3" style={{ background: 'rgba(var(--background-rgb), 0.9)' }}>
      <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>分类导航</span>
            </div>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-thin flex-grow">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href={`#category-${index}`}
                className={`text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md flex-shrink-0 ${activeCategory === index ? 'scale-105' : ''}`}
                style={{ 
                  background: activeCategory === index ? 'var(--accent)' : 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: activeCategory === index ? '0 2px 8px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)',
                  color: activeCategory === index ? '#ffffff' : 'var(--text-primary)'
                }}
                onClick={() => setActiveCategory(index)}
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-solid w-full mt-1" style={{ borderColor: 'var(--card-border)' }}></div>
      </div>
    </div>
  );
}