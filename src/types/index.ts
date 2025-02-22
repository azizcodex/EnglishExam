export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface VocabCard {
  id: string;
  word: string;
  meaning: string;
  examples: string[];
  arabicTranslation: string;
  status?: 'learning' | 'memorized';
}

export interface VocabCategory {
  id: string;
  title: string;
  description: string;
  cards: VocabCard[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  content: string;
}

export interface GrammarExplanation {
  whenToUse: string;
  howToUse: string;
  examples: string[];
  commonMistakes: string[];
  tips: string[];
  additionalNotes: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}