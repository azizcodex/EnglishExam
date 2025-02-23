import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, RefreshCw } from 'lucide-react';
import FlashCard from './FlashCard';
import { VocabCard } from '../types';

export interface VocabSectionProps {
  title: string;
  cards: VocabCard[];
}

export function VocabSection({ title, cards }: VocabSectionProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [learningCards, setLearningCards] = useState<VocabCard[]>([]);
  const [currentCards, setCurrentCards] = useState(cards);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

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
        setIsReviewMode(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
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
    <div className="flex flex-col items-center space-y-8 relative max-w-7xl mx-auto px-4">
      {showNotification && (
        <div className="absolute top-0 transform -translate-y-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-lg shadow-md transition-all duration-300 animate-fade-in">
          Added to review list. Switching to review mode...
        </div>
      )}

      <div className="flex items-center space-x-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <button
          onClick={toggleReviewMode}
          className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
            isReviewMode
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          {isReviewMode ? (
            <>
              <BookOpen className="mr-2 h-5 w-5" />
              Back to All Words
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-5 w-5" />
              Review Section ({learningCards.length})
            </>
          )}
        </button>
      </div>

      {currentCards.length > 0 ? (
        <>
          <div className="flex items-center space-x-8">
            <button
              onClick={goToPrevCard}
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <FlashCard 
              card={currentCards[currentCardIndex]}
              onStatusChange={handleStatusChange}
            />
            <button
              onClick={goToNextCard}
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentCardIndex + 1) / currentCards.length) * 100}%` }}
              />
            </div>
            <span className="text-sm whitespace-nowrap">
              {currentCardIndex + 1} / {currentCards.length}
            </span>
          </div>
        </>
      ) : (
        <div className="text-center py-12 px-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {isReviewMode
                ? '🎉 No cards to review. All words are memorized!'
                : '📚 No cards available in this section.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}