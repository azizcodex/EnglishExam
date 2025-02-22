import { useState } from 'react';
import { Trophy, ArrowLeft, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../types';

interface PracticeSectionProps {
  questions: QuizQuestion[];
}

export function PracticeSection({ questions }: PracticeSectionProps) {
  // If no questions are available, show a message
  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl text-gray-600">No practice questions available for this section yet.</h2>
      </div>
    );
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Guard against undefined currentQuestion
  if (!currentQuestion) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl text-gray-600">No question found.</h2>
      </div>
    );
  }

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Practice</h1>
        </div>

        <div className="bg-green-50 rounded-lg p-4 flex items-center mb-6">
          <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
          <span className="text-green-700 font-medium">
            Best Score: {bestScore} of {questions.length}
          </span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl text-blue-600 font-semibold">
            Current Score: {score}
          </div>
          <div className="text-gray-600">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-blue-100 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-4 text-left rounded-xl transition-colors ${
                isAnswered
                  ? option === currentQuestion.correctAnswer
                    ? 'bg-green-100 text-green-800'
                    : option === selectedAnswer
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                  : 'bg-blue-50 hover:bg-blue-100 text-gray-800'
              } ${
                selectedAnswer === option ? 'ring-2 ring-blue-500' : ''
              }`}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className={`flex items-center px-6 py-3 rounded-lg ${
              currentQuestionIndex === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </button>
          <button
            onClick={handleNext}
            className={`flex items-center px-6 py-3 rounded-lg ${
              !isAnswered || currentQuestionIndex === questions.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            disabled={!isAnswered || currentQuestionIndex === questions.length - 1}
          >
            Next
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}