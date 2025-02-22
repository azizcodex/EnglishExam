import { useState } from 'react';
import { Book, Headphones, GraduationCap, BookOpen, Menu, ArrowLeft } from 'lucide-react';
import { CategoryCard } from './components/CategoryCard';
import { LevelBadge } from './components/LevelBadge';
import { VocabSection } from './components/VocabSection';
import { GrammarSection } from './components/GrammarSection';
import { phrasalVerbs, academicWords, weatherTerms, educationalTerms } from './data/vocabCategories';
import { 
  nounExplanation, 
  modalVerbsExplanation, 
  verbTensesExplanation, 
  conditionalsExplanation,
  clausesAndPhrasesExplanation,
  sentenceBasicsExplanation,
  verbalsExplanation
} from './data/grammarContent';
import {
  nounQuestions,
  modalVerbQuestions,
  verbTenseQuestions
} from './data/quizQuestions';
import { Level } from './types';

function App() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  const sections = [
    {
      id: 'grammar',
      title: 'Grammar',
      icon: Book,
      description: 'Master English grammar rules and structures',
      categories: ['Parts of Speech', 'Modal Verbs', 'Verb Tenses', 'Conditionals', 'Clauses and Phrases', 'Sentence Basics', 'Verbals']
    },
    {
      id: 'vocabulary',
      title: 'Vocabulary',
      icon: GraduationCap,
      description: 'Expand your English vocabulary',
      categories: ['Phrasal Verbs', 'Academic Words', 'Weather Terms', 'Educational Terms']
    },
    {
      id: 'reading',
      title: 'Reading',
      icon: BookOpen,
      description: 'Improve your reading comprehension',
      levels: ['beginner', 'intermediate', 'advanced'] as Level[]
    },
    {
      id: 'listening',
      title: 'Listening',
      icon: Headphones,
      description: 'Enhance your listening skills',
      levels: ['beginner', 'intermediate', 'advanced'] as Level[]
    }
  ];

  const getVocabContent = (category: string) => {
    switch (category) {
      case 'Phrasal Verbs':
        return phrasalVerbs;
      case 'Academic Words':
        return academicWords;
      case 'Weather Terms':
        return weatherTerms;
      case 'Educational Terms':
        return educationalTerms;
      default:
        return [];
    }
  };

  const getGrammarContent = (category: string) => {
    switch (category) {
      case 'Parts of Speech':
        return { explanation: nounExplanation, questions: nounQuestions };
      case 'Modal Verbs':
        return { explanation: modalVerbsExplanation, questions: modalVerbQuestions };
      case 'Verb Tenses':
        return { explanation: verbTensesExplanation, questions: verbTenseQuestions };
      case 'Conditionals':
        return { explanation: conditionalsExplanation, questions: [] };
      case 'Clauses and Phrases':
        return { explanation: clausesAndPhrasesExplanation, questions: [] };
      case 'Sentence Basics':
        return { explanation: sentenceBasicsExplanation, questions: [] };
      case 'Verbals':
        return { explanation: verbalsExplanation, questions: [] };
      default:
        return null;
    }
  };

  const handleBack = () => {
    if (selectedSubCategory) {
      setSelectedSubCategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedSection(null);
    }
  };

  const selectedSectionData = sections.find(section => section.id === selectedSection);

  const renderContent = () => {
    if (selectedSection === 'vocabulary' && selectedCategory) {
      const vocabCards = getVocabContent(selectedCategory);
      return <VocabSection title={selectedCategory} cards={vocabCards} />;
    }

    if (selectedSection === 'grammar' && selectedCategory) {
      const grammarContent = getGrammarContent(selectedCategory);
      if (grammarContent) {
        return (
          <GrammarSection 
            title={selectedCategory}
            explanation={grammarContent.explanation}
            questions={grammarContent.questions}
          />
        );
      }
    }

    if (selectedSection || selectedCategory) {
      return (
        <>
          <div className="flex items-center space-x-3 mb-6">
            {selectedSectionData?.icon && (
              <selectedSectionData.icon className="h-8 w-8 text-blue-600" />
            )}
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory || selectedSectionData?.title}
            </h2>
          </div>
          <p className="text-gray-600 mb-8">{selectedSectionData?.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedSectionData?.categories ? (
              selectedSectionData.categories.map((category) => (
                <CategoryCard
                  key={category}
                  title={category}
                  description="Click to start learning"
                  onClick={() => setSelectedCategory(category)}
                />
              ))
            ) : (
              selectedSectionData?.levels.map((level) => (
                <div key={level} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-800">{selectedSectionData.title}</h3>
                      <LevelBadge level={level} />
                    </div>
                    <p className="text-gray-600">Start your {level} {selectedSectionData.title.toLowerCase()} journey</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedSection(section.id)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <section.icon className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <div className="text-sm text-gray-500">
              {section.categories ? (
                `${section.categories.length} topics available`
              ) : (
                `${section.levels.length} difficulty levels`
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Menu className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">English Learning Hub</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {(selectedSection || selectedCategory || selectedSubCategory) && (
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to {selectedSubCategory ? 'Parts of Speech' : selectedCategory ? 'Categories' : 'All Sections'}
          </button>
        )}

        {renderContent()}
      </main>
    </div>
  );
}

export default App;