import { useState } from 'react';
import { RefreshCw, Check } from 'lucide-react';
import { VocabCard } from '../types';

interface FlashCardProps {
  card: VocabCard;
  onStatusChange: (id: string, status: 'learning' | 'memorized') => void;
}

export default function FlashCard({ card, onStatusChange }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-[600px] h-[400px] perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8 backface-hidden flex flex-col items-center text-center">
          <div className="flex-grow flex items-center justify-center">
            <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {card.word}
            </h3>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(card.id, 'learning');
              }}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Still Learning
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(card.id, 'memorized');
              }}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <Check className="mr-2 h-5 w-5" />
              Memorized
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8 rotate-y-180 backface-hidden overflow-auto">
          <div className="h-full flex flex-col items-center text-center space-y-6">
            <div className="w-full">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Meaning:</h4>
              <p className="text-gray-700 dark:text-gray-300 text-lg">{card.meaning}</p>
            </div>
            
            <div className="w-full">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Examples:</h4>
              <ul className="list-none space-y-3">
                {card.examples.map((example, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 text-lg bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                    {example}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Arabic Translation:</h4>
              <p className="text-gray-700 dark:text-gray-300 text-xl font-arabic">{card.arabicTranslation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}