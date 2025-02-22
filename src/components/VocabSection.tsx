import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FlashCard } from './FlashCard';
import { VocabCard } from '../types';

interface VocabSectionProps {
  title: string;
  cards: VocabCard[];
}

export function VocabSection({ title, cards }: VocabSectionProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [learningCards, setLearningCards] = useState<VocabCard[]>([]);
  const [currentCards, setCurrentCards] = useState(cards);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const goToNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % currentCards.length);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + currentCards.length) % currentCards.length);
  };

  const handleStatusChange = (id: string, status: 'learning' | 'memorized') => {
    const card = cards.find(c => c.id === id);
    if (card) {
      if (status === 'learning') {
        setLearningCards(prev => [...prev.filter(c => c.id !== id), { ...card, status }]);
      } else {
        setLearningCards(prev => prev.filter(c => c.id !== id));
      }
    }
  };

  const toggleReviewMode = () => {
    setIsReviewMode(!isReviewMode);
    setCurrentCardIndex(0);
  };

  useEffect(() => {
    setCurrentCards(isReviewMode ? learningCards : cards);
  }, [isReviewMode, learningCards, cards]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <button
          onClick={toggleReviewMode}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isReviewMode
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isReviewMode ? 'Back to All Words' : 'Review Section'}
        </button>
      </div>

      {currentCards.length > 0 ? (
        <>
          <div className="flex items-center space-x-6">
            <button
              onClick={goToPrevCard}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <FlashCard 
              card={currentCards[currentCardIndex]}
              onStatusChange={handleStatusChange}
            />
            <button
              onClick={goToNextCard}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="text-gray-600">
            Card {currentCardIndex + 1} of {currentCards.length}
          </div>
        </>
      ) : (
        <div className="text-gray-600 text-center">
          {isReviewMode ? (
            <p>No cards to review. All words are memorized!</p>
          ) : (
            <p>No cards available in this section.</p>
          )}
        </div>
      )}
    </div>
  );
}