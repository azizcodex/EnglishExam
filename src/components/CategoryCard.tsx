import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  onClick: () => void;
  accentColor?: string;
  icon?: any; // Using any for Lucide icons
}

export function CategoryCard({ title, description, onClick, accentColor = 'blue', icon: Icon }: CategoryCardProps) {
  const getAccentClasses = (color: string) => {
    const colors: { [key: string]: { text: string, bg: string } } = {
      blue: {
        text: 'text-blue-600 dark:text-blue-300',
        bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
      },
      purple: {
        text: 'text-purple-600 dark:text-purple-300',
        bg: 'from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20'
      },
      indigo: {
        text: 'text-indigo-600 dark:text-indigo-300',
        bg: 'from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20'
      },
      green: {
        text: 'text-green-600 dark:text-green-300',
        bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
      },
      orange: {
        text: 'text-orange-600 dark:text-orange-300',
        bg: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20'
      },
      red: {
        text: 'text-red-600 dark:text-red-300',
        bg: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20'
      }
    };
    return colors[color] || colors.blue;
  };

  const colorClasses = getAccentClasses(accentColor);

  return (
    <div 
      className={`bg-gradient-to-br ${colorClasses.bg} backdrop-blur-sm rounded-xl shadow-md p-8 cursor-pointer 
        hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group hover:scale-105
        border border-white/10 dark:border-white/5`}
      onClick={onClick}
    >
      {Icon && (
        <Icon className={`h-8 w-8 mb-4 ${colorClasses.text} transition-transform duration-300 group-hover:scale-110`} />
      )}
      <h3 className={`text-2xl font-semibold mb-3 ${colorClasses.text}`}>{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <div className={`flex items-center ${colorClasses.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <span className="mr-2">Explore</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}