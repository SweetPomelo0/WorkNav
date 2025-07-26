'use client';

import dynamic from 'next/dynamic';

// 动态导入客户端组件
const CategoryNav = dynamic(() => import('./CategoryNav'), {
  ssr: false
});

interface Category {
  title: string;
  links: {
    name: string;
    url: string;
    desc: string;
    icon: string;
  }[];
}

interface CategoryNavWrapperProps {
  categories: Category[];
}

export default function CategoryNavWrapper({ categories }: CategoryNavWrapperProps) {
  return <CategoryNav categories={categories} />;
}