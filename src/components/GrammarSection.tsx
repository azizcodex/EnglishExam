import React, { useState } from 'react';
import { Book, PenTool } from 'lucide-react';
import { GrammarExplanation, QuizQuestion } from '../types';
import { PracticeSection } from './PracticeSection';

interface ExplanationSectionProps {
  title: string;
  content: string | string[];
  arabicTitle: string;
}

function ExplanationSection({ title, content, arabicTitle }: ExplanationSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
        <span>{title}</span>
        <span className="text-gray-600 mr-2 text-lg"> ({arabicTitle})</span>
      </h3>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 whitespace-pre-line">{content}</p>
      )}
    </div>
  );
}

interface GrammarSectionProps {
  title: string;
  explanation: GrammarExplanation;
  questions: QuizQuestion[];
}

export function GrammarSection({ title, explanation, questions }: GrammarSectionProps) {
  const [showExplanation, setShowExplanation] = useState(true);
  const [showPractice, setShowPractice] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => {
              setShowExplanation(true);
              setShowPractice(false);
            }}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              showExplanation
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Book className="mr-2 h-5 w-5" />
            Explanation
          </button>
          <button
            onClick={() => {
              setShowExplanation(false);
              setShowPractice(true);
            }}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              showPractice
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <PenTool className="mr-2 h-5 w-5" />
            Practice
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
          
          {showExplanation && (
            <div>
              <ExplanationSection
                title="When to Use"
                arabicTitle="متى نستخدم"
                content={explanation.whenToUse}
              />
              <ExplanationSection
                title="How to Use"
                arabicTitle="كيف نستخدم"
                content={explanation.howToUse}
              />
              <ExplanationSection
                title="Examples"
                arabicTitle="أمثلة"
                content={explanation.examples}
              />
              <ExplanationSection
                title="Common Mistakes"
                arabicTitle="الأخطاء الشائعة"
                content={explanation.commonMistakes}
              />
              <ExplanationSection
                title="Tips"
                arabicTitle="نصائح"
                content={explanation.tips}
              />
              <ExplanationSection
                title="Additional Notes"
                arabicTitle="ملاحظات إضافية"
                content={explanation.additionalNotes}
              />
            </div>
          )}

          {showPractice && questions && (
            <PracticeSection questions={questions} />
          )}
        </div>
      </div>
    </div>
  );
}