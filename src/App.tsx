import { useState } from 'react';
import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import {
  Book,
  BookOpen,
  Headphones,
  SplitSquareHorizontal,
  Quote,
  ArrowBigRight,
  ArrowRight,
  Combine,
  FolderSymlink,
  GitMerge,
  MessageCircle,
  HelpCircle,
  XCircle,
  Command,
  SwitchCamera,
  MessageSquare,
  CheckCircle2,
  CircleEqual,
  BadgeCheck,
  CircleDot,
  CircleOff,
  Menu,
  ArrowLeft,
  Sun,
  Moon
} from 'lucide-react';

import { CategoryCard } from './components/CategoryCard';
import { VocabSection } from './components/VocabSection';
import { useTheme } from './context/ThemeContext';

import {
  GrammarCategory,
  Section,
  VocabSectionType,
  VocabCard
} from './types';

import {
  phrasalVerbs,
  academicWords,
  weatherTerms,
  educationalTerms
} from './data/vocabCategories';

const sections: Section[] = [
  {
    id: 'grammar',
    title: 'Grammar',
    icon: Book,
    description: 'Master English grammar rules and structures',
    categories: [
      {
        title: 'Parts of Speech',
        icon: Book,
        subCategories: [
          'Nouns',
          'Pronouns',
          'Articles',
          'Adjectives',
          'Adverbs',
          'Prepositions',
          'Conjunctions'
        ]
      },
      {
        title: 'Sentence Basics',
        icon: MessageCircle,
        subCategories: [
          { title: 'Subject', icon: CheckCircle2 },
          { title: 'Subject and Verb Agreement', icon: CheckCircle2 },
          { title: 'Direct Object', icon: CheckCircle2 },
          { title: 'Word Order', icon: CheckCircle2 },
          { title: 'Punctuation', icon: CheckCircle2 },
          { title: 'Capitalization', icon: CheckCircle2 },
          { title: 'Intransitive Verbs', icon: CheckCircle2 },
          { title: 'Linking Verbs', icon: CheckCircle2 },
          { title: 'Indirect Objects', icon: CheckCircle2 },
          { title: 'Types of Sentences', icon: CheckCircle2 },
          { title: 'Prepositional Phrase', icon: CheckCircle2 }
        ]
      },
      {
        title: 'Clauses and Phrases',
        icon: MessageCircle,
        subCategories: [
          { title: 'Independent Clauses', icon: SplitSquareHorizontal },
          { title: 'Dependent Clauses', icon: FolderSymlink },
          { title: 'Adjective Clauses', icon: Quote },
          { title: 'Adverbial Clauses', icon: ArrowBigRight },
          { title: 'Noun Clauses', icon: Combine },
          { title: 'Relative Clauses', icon: GitMerge },
          { title: 'Gerund Phrases', icon: ArrowRight },
          { title: 'Participle Phrases', icon: ArrowRight },
          { title: 'Verbals', icon: ArrowRight }
        ]
      },
      {
        title: 'Voice and Structure',
        icon: MessageCircle,
        subCategories: [
          { title: 'Passive vs Active Voice', icon: SwitchCamera },
          { title: 'Reported Speech', icon: MessageSquare },
          { title: 'Question Formation', icon: HelpCircle },
          { title: 'Negative Statements', icon: XCircle },
          { title: 'Imperative Sentences', icon: Command }
        ]
      },
      {
        title: 'Modal Verbs',
        icon: CheckCircle2,
        subCategories: [
          { title: 'Can and Could', icon: HelpCircle },
          { title: 'May and Might', icon: CircleEqual },
          { title: 'Will and Would', icon: BadgeCheck },
          { title: 'Shall and Should', icon: CircleDot },
          { title: 'Must and Have to', icon: CheckCircle2 },
          { title: 'Need and Ought to', icon: CircleOff }
        ]
      },
      {
        title: 'Tenses',
        icon: MessageCircle,
        subCategories: [
          { title: 'Present Simple', icon: CheckCircle2 },
          { title: 'Present Continuous', icon: CheckCircle2 },
          { title: 'Present Perfect', icon: CheckCircle2 },
          { title: 'Present Perfect Continuous', icon: CheckCircle2 },
          { title: 'Past Simple', icon: CheckCircle2 },
          { title: 'Past Continuous', icon: CheckCircle2 },
          { title: 'Past Perfect', icon: CheckCircle2 },
          { title: 'Past Perfect Continuous', icon: CheckCircle2 },
          { title: 'Future Simple', icon: CheckCircle2 },
          { title: 'Going to Future', icon: CheckCircle2 },
          { title: 'Future Continuous', icon: CheckCircle2 },
          { title: 'Future Perfect', icon: CheckCircle2 },
          { title: 'Future Perfect Continuous', icon: CheckCircle2 }
        ]
      },
      {
        title: 'Comparisons & Quantifiers',
        icon: GitMerge,
        subCategories: [
          { title: 'Superlatives', icon: CheckCircle2 },
          { title: 'Quantifiers', icon: CheckCircle2 },
          { title: 'Tag Questions', icon: CheckCircle2 },
          { title: 'Determiners', icon: CheckCircle2 }
        ]
      },
      {
        title: 'Phrasal Verbs & Idioms',
        icon: Book,
        subCategories: [
          { title: 'Common Phrasal Verbs', icon: CheckCircle2 },
          { title: 'Essential Idioms', icon: CheckCircle2 },
          { title: 'Common Expressions', icon: CheckCircle2 }
        ]
      },
      {
        title: 'Conditionals',
        icon: GitMerge,
        subCategories: [
          { title: 'Zero Conditional', icon: CircleDot },
          { title: 'First Conditional', icon: CircleDot },
          { title: 'Second Conditional', icon: CircleDot },
          { title: 'Third Conditional', icon: CircleDot },
          { title: 'Mixed Conditionals', icon: CircleDot }
        ]
      }
    ]
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary',
    icon: BookOpen,
    description: 'Build your English vocabulary',
    categories: [
      { name: 'Phrasal Verbs', color: 'blue' },
      { name: 'Academic Words', color: 'purple' },
      { name: 'Weather Terms', color: 'green' },
      { name: 'Educational Terms', color: 'orange' }
    ]
  },
  {
    id: 'reading',
    title: 'Reading',
    icon: BookOpen,
    description: 'Improve your reading comprehension',
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 'listening',
    title: 'Listening',
    icon: Headphones,
    description: 'Improve your listening comprehension',
    levels: ['beginner', 'intermediate', 'advanced']
  }
];

const getVocabContent = (category: string): VocabCard[] => {
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

function HomePage({ sections }: { sections: Section[] }) {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {sections.map((section) => (
        <CategoryCard
          key={section.id}
          title={section.title}
          description={section.description}
          onClick={() => navigate(`/${section.id}`)}
          accentColor="blue"
          icon={section.icon}
        />
      ))}
    </div>
  );
}

function SectionPage() {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const selectedSectionData = sections.find(section => section.id === sectionId);

  if (!selectedSectionData) {
    return <div>Section not found</div>;
  }

  if (sectionId === 'vocabulary') {
    return (
      <>
        <Link
          to="/"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {(selectedSectionData.categories || []).map((category: any) => (
            <CategoryCard
              key={category.name}
              title={category.name}
              description="Click to start learning"
              onClick={() => navigate(`/${sectionId}/${category.name}`)}
              accentColor={category.color}
            />
          ))}
        </div>
      </>
    );
  }

  if (sectionId === 'listening' || sectionId === 'reading') {
    return (
      <>
        <Link
          to="/"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        <div className="flex items-center justify-center space-x-3 mb-8">
          <selectedSectionData.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {selectedSectionData.title}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          {selectedSectionData.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {selectedSectionData.levels?.map((level) => (
            <CategoryCard
              key={level}
              title={level.charAt(0).toUpperCase() + level.slice(1)}
              description={`Practice ${sectionId} exercises`}
              onClick={() => navigate(`/${sectionId}/${level}`)}
              accentColor="blue"
              icon={selectedSectionData.icon}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Link
        to="/"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>
      <div className="flex items-center justify-center space-x-3 mb-8">
        <selectedSectionData.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {selectedSectionData.title}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        {selectedSectionData.description}
      </p>
      {selectedSectionData.categories && (
        <>
          <div className="mb-8 w-full">
            <div className="bg-[#1e293b] rounded-lg p-6 shadow-lg max-w-6xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Comp Exam</h3>
                  <p className="text-gray-300 text-lg mt-1">Practice comprehensive grammar exercises and tests</p>
                </div>
                <button 
                  className="px-6 py-3 bg-[#3b82f6] hover:bg-blue-600 text-white text-lg font-medium rounded-lg transition-colors"
                  onClick={() => navigate('/grammar/comp-exam')}
                >
                  Start Practice
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {selectedSectionData.categories.map((category: any) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description="Click to start learning"
                onClick={() => navigate(`/${sectionId}/${category.title}`)}
                accentColor="blue"
                icon={category.icon}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

function VocabCategoryPage() {
  const { categoryName } = useParams();
  
  return (
    <>
      <Link
        to="/vocabulary"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Categories
      </Link>
      <VocabSection
        title={categoryName || ''}
        cards={getVocabContent(categoryName || '')}
      />
    </>
  );
}

function ReadingLevelPage() {
  const { level } = useParams();
  const capitalizedLevel = level ? level.charAt(0).toUpperCase() + level.slice(1) : '';
  
  return (
    <>
      <Link
        to="/reading"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Levels
      </Link>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {capitalizedLevel} Level Reading
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Reading exercises for {level} level will be displayed here.
          </p>
        </div>
      </div>
    </>
  );
}

function ListeningLevelPage() {
  const { level } = useParams();
  const capitalizedLevel = level ? level.charAt(0).toUpperCase() + level.slice(1) : '';
  
  return (
    <>
      <Link
        to="/listening"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Levels
      </Link>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {capitalizedLevel} Level Listening
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Listening exercises for {level} level will be displayed here.
          </p>
        </div>
      </div>
    </>
  );
}

function isGrammarCategory(cat: string | GrammarCategory | VocabSectionType): cat is GrammarCategory {
  return typeof cat === 'object' && 'title' in cat && 'subCategories' in cat;
}

function GrammarCategoryPage() {
  const { categoryTitle } = useParams();
  const navigate = useNavigate();
  const grammarSection = sections.find(section => section.id === 'grammar');
  const category = grammarSection?.categories?.find((cat): cat is GrammarCategory => 
    isGrammarCategory(cat) && cat.title === categoryTitle
  );

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Link
        to="/grammar"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Grammar
      </Link>
      <div className="flex items-center justify-center space-x-3 mb-8">
        {category.icon && <category.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {category.subCategories?.map((subCategory: string | { title: string; icon?: any }) => (
          <CategoryCard
            key={typeof subCategory === 'string' ? subCategory : subCategory.title}
            title={typeof subCategory === 'string' ? subCategory : subCategory.title}
            description="Learn more"
            onClick={() => navigate(`/grammar/${category.title}/${typeof subCategory === 'string' ? subCategory : subCategory.title}`)}
            accentColor="blue"
            icon={typeof subCategory === 'string' ? undefined : subCategory.icon}
          />
        ))}
      </div>
    </>
  );
}

function GrammarSubCategoryPage() {
  const { categoryTitle, subCategoryTitle } = useParams();
  const grammarSection = sections.find(section => section.id === 'grammar');
  const category = grammarSection?.categories?.find((cat): cat is GrammarCategory => 
    isGrammarCategory(cat) && cat.title === categoryTitle
  );
  const subCategory = category?.subCategories?.find((sub: string | { title: string; icon?: any }) => 
    (typeof sub === 'string' ? sub : sub.title) === subCategoryTitle
  );

  if (!category || !subCategory) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Link
        to={`/grammar/${category.title}`}
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to {category.title}
      </Link>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {typeof subCategory === 'string' ? subCategory : subCategory.title}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Grammar content for {typeof subCategory === 'string' ? subCategory : subCategory.title} will be displayed here.
          </p>
        </div>
      </div>
    </>
  );
}

function CompExamPage() {
  return (
    <>
      <Link
        to="/grammar"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Grammar
      </Link>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <GitMerge className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Comprehensive Grammar Exam
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-2xl mx-auto">
          Test your knowledge across all grammar topics with comprehensive exercises and assessments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Practice Tests</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Complete practice tests covering all grammar topics. Track your progress and identify areas for improvement.
            </p>
            <div className="space-y-4">
              <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Practice Test
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Command className="h-5 w-5 mr-2" />
                View Previous Results
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Mock Exam</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Take a timed mock exam under test conditions. Get detailed feedback and performance analysis.
            </p>
            <div className="space-y-4">
              <button className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 mr-2" />
                Start Mock Exam
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <SplitSquareHorizontal className="h-5 w-5 mr-2" />
                View Past Exams
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Exam Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300">Tests Completed</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300">Average Score</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">0%</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300">Time Spent</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">0h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 ${theme}`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Menu className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">English Learning Hub</h1>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-yellow-500" />
              ) : (
                <Moon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage sections={sections} />} />
          <Route path="/:sectionId" element={<SectionPage />} />
          <Route path="/vocabulary/:categoryName" element={<VocabCategoryPage />} />
          <Route path="/reading/:level" element={<ReadingLevelPage />} />
          <Route path="/listening/:level" element={<ListeningLevelPage />} />
          <Route path="/grammar/:categoryTitle" element={<GrammarCategoryPage />} />
          <Route path="/grammar/comp-exam" element={<CompExamPage />} />
          <Route path="/grammar/:categoryTitle/:subCategoryTitle" element={<GrammarSubCategoryPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;