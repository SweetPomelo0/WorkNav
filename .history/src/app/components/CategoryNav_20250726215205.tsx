'use client';

import { useState, useEffect, useRef } from 'react';

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
  const [activeCategory, setActiveCategory] = useState<number>(0); // 默认选中第一个分类
  const scrollingToSection = useRef(false);

  // 处理点击分类导航的事件
  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    scrollingToSection.current = true;
    
    const element = document.getElementById(`category-${index}`);
    if (element) {
      // 平滑滚动到对应的分类内容区域
      element.scrollIntoView({ behavior: 'smooth' });
      
      // 滚动完成后重置标志
      setTimeout(() => {
        scrollingToSection.current = false;
      }, 1000); // 假设滚动动画在1秒内完成
    }
  };

  // 监听滚动事件，根据当前视口位置更新活跃分类
  useEffect(() => {
    const handleScroll = () => {
      // 如果正在通过点击导航进行滚动，则不更新活跃分类
      if (scrollingToSection.current) return;
      
      const categoryElements = categories.map((_, index) => 
        document.getElementById(`category-${index}`)
      );
      
      // 计算每个分类区域的可见度
      const visibilityScores = categoryElements.map(element => {
        if (!element) return 0;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // 如果元素不在视口中，返回0
        if (rect.bottom < 0 || rect.top > windowHeight) return 0;
        
        // 计算元素在视口中的可见部分
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = visibleBottom - visibleTop;
        
        // 计算可见度得分（可见高度 / 元素总高度）
        return visibleHeight / rect.height;
      });
      
      // 找出可见度最高的分类
      let maxVisibilityIndex = 0;
      let maxVisibility = visibilityScores[0];
      
      for (let i = 1; i < visibilityScores.length; i++) {
        if (visibilityScores[i] > maxVisibility) {
          maxVisibility = visibilityScores[i];
          maxVisibilityIndex = i;
        }
      }
      
      // 只有当可见度超过一定阈值时才更新活跃分类
      if (maxVisibility > 0.1) {
        setActiveCategory(maxVisibilityIndex);
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
              <button 
                key={index} 
                className={`text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md flex-shrink-0 ${activeCategory === index ? 'scale-105' : ''}`}
                style={{ 
                  background: activeCategory === index ? 'var(--accent)' : 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: activeCategory === index ? '0 2px 8px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)',
                  color: activeCategory === index ? '#ffffff' : 'var(--text-primary)'
                }}
                onClick={() => handleCategoryClick(index)}
              >
                {category.title}
              </button>
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