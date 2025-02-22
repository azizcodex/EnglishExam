import { QuizQuestion } from '../types';

export const nounQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: "Which word is a noun in: 'The tall tree grows quickly'?",
    options: ['grows', 'quickly', 'tree', 'tall'],
    correctAnswer: 'tree'
  },
  {
    id: '2',
    question: "Identify the noun in: 'She reads books in the library'",
    options: ['reads', 'books', 'she', 'in'],
    correctAnswer: 'books'
  },
  {
    id: '3',
    question: "Select the proper noun: 'john lives in paris with his cat'",
    options: ['john', 'lives', 'cat', 'with'],
    correctAnswer: 'john'
  },
  {
    id: '4',
    question: "Which is an abstract noun?",
    options: ['happiness', 'table', 'phone', 'run'],
    correctAnswer: 'happiness'
  },
  {
    id: '5',
    question: "Choose the collective noun:",
    options: ['flock', 'bird', 'fly', 'wing'],
    correctAnswer: 'flock'
  }
];

export const modalVerbQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: "Choose the correct modal verb: 'You ___ wear a seatbelt while driving.'",
    options: ['must', 'might', 'could', 'would'],
    correctAnswer: 'must'
  },
  {
    id: '2',
    question: "Select the correct form: 'She ___ speak three languages.'",
    options: ['can', 'cans', 'could to', 'might to'],
    correctAnswer: 'can'
  },
  {
    id: '3',
    question: "Which is correct? '___ you help me with this?'",
    options: ['Could', 'Must', 'Shall to', 'Would to'],
    correctAnswer: 'Could'
  },
  {
    id: '4',
    question: "Choose the correct negative: 'They ___ come to the party.'",
    options: ['might not', 'not might', 'don\'t might', 'mightn\'t to'],
    correctAnswer: 'might not'
  },
  {
    id: '5',
    question: "Select the correct past form: 'I ___ swim when I was young.'",
    options: ['could', 'can', 'must', 'shall'],
    correctAnswer: 'could'
  }
];

export const verbTenseQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: "Choose the correct tense: 'She ___ to school every day.'",
    options: ['goes', 'is going', 'has gone', 'went'],
    correctAnswer: 'goes'
  },
  {
    id: '2',
    question: "What tense is: 'They have been working'?",
    options: ['Present Perfect Continuous', 'Past Continuous', 'Present Continuous', 'Past Perfect'],
    correctAnswer: 'Present Perfect Continuous'
  },
  {
    id: '3',
    question: "Select the correct form: 'By next week, I ___ the project.'",
    options: ['will have finished', 'will finish', 'am finishing', 'have finished'],
    correctAnswer: 'will have finished'
  },
  {
    id: '4',
    question: "Identify the tense: 'I was reading when you called.'",
    options: ['Past Continuous', 'Past Simple', 'Present Perfect', 'Past Perfect'],
    correctAnswer: 'Past Continuous'
  },
  {
    id: '5',
    question: "Choose the correct form: 'She ___ here since 2010.'",
    options: ['has lived', 'lives', 'is living', 'lived'],
    correctAnswer: 'has lived'
  }
];