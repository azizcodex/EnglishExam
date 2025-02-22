import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export function CategoryCard({ title, description, onClick }: CategoryCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 hover:text-blue-700">
        <span className="mr-2">Explore</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}