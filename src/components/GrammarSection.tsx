import { useState } from 'react';
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
    <div className="mb-8 text-center">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center justify-center">
        <span>{title}</span>
        <span className="text-gray-600 dark:text-gray-400 ml-2 text-lg"> ({arabicTitle})</span>
      </h3>
      {Array.isArray(content) ? (
        <ul className="list-none space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{content}</p>
      )}
    </div>
  );
}

interface GrammarSectionProps {
  explanation: GrammarExplanation;
  questions: QuizQuestion[];
}

export function GrammarSection({ explanation, questions }: GrammarSectionProps) {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* When to Use Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 
          rounded-xl shadow-md p-6 backdrop-blur-sm border border-white/10 dark:border-white/5">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">When to Use</h3>
          <div className="space-y-2">
            {Array.isArray(explanation.whenToUse) ? (
              explanation.whenToUse.map((use, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300">• {use}</p>
              ))
            ) : (
              <p className="text-gray-700 dark:text-gray-300">{explanation.whenToUse}</p>
            )}
          </div>
        </div>

        {/* How to Use Card */}
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 
          rounded-xl shadow-md p-6 backdrop-blur-sm border border-white/10 dark:border-white/5">
          <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">How to Use</h3>
          <div className="space-y-2">
            {Array.isArray(explanation.howToUse) ? (
              explanation.howToUse.map((use, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300">• {use}</p>
              ))
            ) : (
              <p className="text-gray-700 dark:text-gray-300">{explanation.howToUse}</p>
            )}
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 
        rounded-xl shadow-md p-6 mb-8 backdrop-blur-sm border border-white/10 dark:border-white/5">
        <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {explanation.examples.map((example, index) => (
            <div key={index} className="bg-white/50 dark:bg-gray-800/30 rounded-lg p-3">
              <p className="text-gray-700 dark:text-gray-300">{example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 
        rounded-xl shadow-md p-6 mb-8 backdrop-blur-sm border border-white/10 dark:border-white/5">
        <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Common Mistakes</h3>
        <ul className="list-disc pl-5 space-y-2">
          {explanation.commonMistakes.map((mistake, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{mistake}</li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 
        rounded-xl shadow-md p-6 mb-8 backdrop-blur-sm border border-white/10 dark:border-white/5">
        <h3 className="text-xl font-semibold mb-4 text-amber-600 dark:text-amber-400">Tips</h3>
        <ul className="list-disc pl-5 space-y-2">
          {explanation.tips.map((tip, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{tip}</li>
          ))}
        </ul>
      </div>

      {/* Additional Notes */}
      <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 
        rounded-xl shadow-md p-6 mb-8 backdrop-blur-sm border border-white/10 dark:border-white/5">
        <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Additional Notes</h3>
        <div className="space-y-2">
          {Array.isArray(explanation.additionalNotes) ? (
            explanation.additionalNotes.map((note, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300">• {note}</p>
            ))
          ) : (
            <p className="text-gray-700 dark:text-gray-300">{explanation.additionalNotes}</p>
          )}
        </div>
      </div>

      {/* Arabic Translation */}
      <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 
        rounded-xl shadow-md p-6 mb-12 backdrop-blur-sm border border-white/10 dark:border-white/5">
        <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-400">Arabic Translation</h3>
        <p className="text-gray-700 dark:text-gray-300 text-right">{explanation.arabicTranslation}</p>
      </div>

      {/* Practice Questions */}
      {questions.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practice Questions</h3>
          {questions.map((question, index) => (
            <div key={question.id} className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 
              dark:to-slate-900/20 rounded-xl shadow-md p-6 backdrop-blur-sm border border-white/10 dark:border-white/5">
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">{index + 1}. {question.question}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option) => (
                  <button
                    key={option}
                    className="text-left p-4 rounded-lg bg-white/50 dark:bg-gray-800/30 hover:bg-blue-50 
                      dark:hover:bg-blue-900/20 transition-colors duration-200"
                    onClick={() => {/* Add answer handling logic */}}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}