import type { LucideIcon } from 'lucide-react';

export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface VocabCard {
  id: string;
  word: string;
  meaning: string;
  examples: string[];
  arabicTranslation: string;
  status?: 'learning' | 'memorized';
}

export interface VocabItem {
  name: string;
  color: string;
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
  whenToUse: string | string[];
  howToUse: string | string[];
  examples: string[];
  commonMistakes: string[];
  tips: string[];
  additionalNotes: string | string[];
  arabicTranslation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface SubCategory {
  title: string;
  icon?: LucideIcon;
}

export interface TenseGroup {
  title: string;
  icon: LucideIcon;
  tenses: SubCategory[];
}

export interface VocabSectionType {
  name: string;
  color: string;
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  categories?: Array<GrammarCategory | VocabSectionType | string>;
  levels?: Level[];
}

export interface GrammarCategory {
  title: string;
  icon?: LucideIcon;
  subCategories?: Array<SubCategory | string | TenseGroup>;
}

export interface VocabSectionProps {
  title: string;
  cards: VocabCard[];
}

export interface PhraseInfo {
  title: string;
  icon: LucideIcon;
  definition: string;
  example: string;
  usage: string;
}