import React, { useState } from 'react';
import { VocabCard } from '../types';

interface FlashCardProps {
  card: VocabCard;
  onStatusChange: (id: string, status: 'learning' | 'memorized') => void;
}

export function FlashCard({ card, onStatusChange }: FlashCardProps) {
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
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 backface-hidden flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <h3 className="text-4xl font-bold text-gray-800">{card.word}</h3>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(card.id, 'learning');
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Still Learning
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(card.id, 'memorized');
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Memorized
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 rotate-y-180 backface-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Meaning:</h4>
              <p className="text-gray-700">{card.meaning}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Examples:</h4>
              <ul className="list-disc list-inside space-y-2">
                {card.examples.map((example, index) => (
                  <li key={index} className="text-gray-700">{example}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Arabic Translation:</h4>
              <p className="text-gray-700 text-lg">{card.arabicTranslation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}