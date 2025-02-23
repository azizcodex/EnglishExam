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
  },
  {
    id: 'n1',
    question: 'Which word is a common noun in the sentence: "Sarah visited London last summer"?',
    options: ['Sarah', 'London', 'summer', 'visited'],
    correctAnswer: 'summer',
    explanation: 'Summer is a common noun as it refers to a season. Sarah and London are proper nouns.'
  },
  {
    id: 'n2',
    question: 'Which of these is a collective noun?',
    options: ['flock', 'bird', 'fly', 'wing'],
    correctAnswer: 'flock',
    explanation: 'A flock is a collective noun as it refers to a group of animals (usually birds).'
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

export const canAndCouldQuestions: QuizQuestion[] = [
  {
    id: 'cc1',
    question: 'Choose the correct form: "___ you swim when you were six?"',
    options: ['Can', 'Could', 'May', 'Might'],
    correctAnswer: 'Could',
    explanation: 'Use "could" for past ability.'
  },
  {
    id: 'cc2',
    question: 'Select the correct request: "___ you help me with this bag?"',
    options: ['Could', 'Can to', 'Might to', 'Would to'],
    correctAnswer: 'Could',
    explanation: '"Could" is more polite than "can" for requests.'
  }
];

export const mayAndMightQuestions: QuizQuestion[] = [
  {
    id: 'mm1',
    question: 'Which is more formal for asking permission?',
    options: ['May I come in?', 'Might I come in?', 'Can I come in?', 'Could I come in?'],
    correctAnswer: 'May I come in?',
    explanation: '"May" is the most formal way to ask for permission.'
  },
  {
    id: 'mm2',
    question: 'Choose the correct possibility: "It ___ rain tomorrow."',
    options: ['may', 'may to', 'might to', 'mighted'],
    correctAnswer: 'may',
    explanation: 'Use the base form after may/might.'
  }
];

export const willAndWouldQuestions: QuizQuestion[] = [
  {
    id: 'ww1',
    question: 'Which shows a spontaneous decision?',
    options: [
      'I will help you.',
      'I would help you.',
      'I might help you.',
      'I may help you.'
    ],
    correctAnswer: 'I will help you.',
    explanation: '"Will" is used for spontaneous decisions and promises.'
  },
  {
    id: 'ww2',
    question: 'Complete the sentence: "When I was young, I ___ play in the park every day."',
    options: ['will', 'would', 'were', 'had'],
    correctAnswer: 'would',
    explanation: '"Would" is used for past habits.'
  }
];

export const shallAndShouldQuestions: QuizQuestion[] = [
  {
    id: 'ss1',
    question: 'Which is correct for giving advice?',
    options: [
      'You should study more.',
      'You shall study more.',
      'You would study more.',
      'You might study more.'
    ],
    correctAnswer: 'You should study more.',
    explanation: '"Should" is used for giving advice.'
  },
  {
    id: 'ss2',
    question: 'Which is a formal suggestion?',
    options: [
      'Shall we dance?',
      'Will we dance?',
      'Would we dance?',
      'Should we dance?'
    ],
    correctAnswer: 'Shall we dance?',
    explanation: '"Shall" is used for formal suggestions, especially in questions.'
  }
];

export const mustAndHaveToQuestions: QuizQuestion[] = [
  {
    id: 'mh1',
    question: 'Which expresses personal obligation?',
    options: [
      'I must finish this today.',
      'I have to finish this today.',
      'I need finish this today.',
      'I ought finish this today.'
    ],
    correctAnswer: 'I must finish this today.',
    explanation: '"Must" expresses personal obligation or strong determination.'
  },
  {
    id: 'mh2',
    question: 'Choose the correct past form: "Yesterday, I ___ wake up early."',
    options: [
      'had to',
      'must',
      'must have',
      'having to'
    ],
    correctAnswer: 'had to',
    explanation: 'Use "had to" as the past form of "must" for obligation.'
  }
];

export const needAndOughtToQuestions: QuizQuestion[] = [
  {
    id: 'no1',
    question: 'Complete the sentence: "You ___ to be more careful."',
    options: [
      'ought',
      'need',
      'must',
      'shall'
    ],
    correctAnswer: 'ought',
    explanation: '"Ought to" expresses moral obligation or advisability.'
  },
  {
    id: 'no2',
    question: 'Which is correct? "You ___ study harder."',
    options: [
      'need to',
      'need',
      'needs to',
      'needing to'
    ],
    correctAnswer: 'need to',
    explanation: '"Need to" is commonly used as a semi-modal verb.'
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

export const pronounQuestions: QuizQuestion[] = [
  {
    id: 'p1',
    question: 'Choose the correct pronoun: "___ gave the book to John and ___."',
    options: ['I...him', 'me...he', 'I...he', 'me...him'],
    correctAnswer: 'I...him',
    explanation: 'Use "I" as the subject pronoun and "him" as the object pronoun.'
  },
  {
    id: 'p2',
    question: 'Which is a reflexive pronoun?',
    options: ['he', 'his', 'himself', 'him'],
    correctAnswer: 'himself',
    explanation: 'Reflexive pronouns end in -self (singular) or -selves (plural).'
  }
];

export const articleQuestions: QuizQuestion[] = [
  {
    id: 'a1',
    question: 'Choose the correct article: "I saw ___ elephant at ___ zoo."',
    options: ['a...the', 'an...the', 'the...a', 'an...a'],
    correctAnswer: 'an...the',
    explanation: 'Use "an" before vowel sounds and "the" for specific places.'
  },
  {
    id: 'a2',
    question: 'Which sentence correctly uses articles?',
    options: [
      'He is best player in team.',
      'He is the best player in the team.',
      'He is a best player in a team.',
      'He is best player in a team.'
    ],
    correctAnswer: 'He is the best player in the team.',
    explanation: 'Use "the" with superlatives and specific groups.'
  }
];

export const adjectiveQuestions: QuizQuestion[] = [
  {
    id: 'adj1',
    question: 'In "The big red house", what is the correct order of adjectives?',
    options: [
      'red big house',
      'house big red',
      'big red house',
      'red house big'
    ],
    correctAnswer: 'big red house',
    explanation: 'Size adjectives come before color adjectives.'
  },
  {
    id: 'adj2',
    question: 'Which is the correct comparative form?',
    options: [
      'more bigger',
      'more big',
      'bigger',
      'most big'
    ],
    correctAnswer: 'bigger',
    explanation: 'Use -er for one-syllable adjectives in comparisons.'
  }
];

export const adverbQuestions: QuizQuestion[] = [
  {
    id: 'adv1',
    question: 'Which word in "She sings beautifully" is an adverb?',
    options: ['She', 'sings', 'beautifully', 'None of these'],
    correctAnswer: 'beautifully',
    explanation: 'Beautifully describes how she sings (modifies the verb).'
  },
  {
    id: 'adv2',
    question: 'Choose the sentence with the correct adverb placement:',
    options: [
      'He quick ran to the store.',
      'He ran quick to the store.',
      'He ran to the store quick.',
      'He ran quickly to the store.'
    ],
    correctAnswer: 'He ran quickly to the store.',
    explanation: 'Use the -ly form for most adverbs of manner.'
  }
];

export const prepositionQuestions: QuizQuestion[] = [
  {
    id: 'prep1',
    question: 'Choose the correct preposition: "She arrived ___ noon ___ Monday."',
    options: ['at...in', 'at...on', 'in...on', 'on...at'],
    correctAnswer: 'at...on',
    explanation: 'Use "at" for specific times and "on" for days.'
  },
  {
    id: 'prep2',
    question: 'Which preposition is correct: "He is afraid ___ spiders."',
    options: ['from', 'of', 'at', 'with'],
    correctAnswer: 'of',
    explanation: 'The correct collocation is "afraid of".'
  }
];

export const conjunctionQuestions: QuizQuestion[] = [
  {
    id: 'conj1',
    question: 'Which is a coordinating conjunction (FANBOYS)?',
    options: ['because', 'although', 'but', 'unless'],
    correctAnswer: 'but',
    explanation: 'BUT is one of the FANBOYS coordinating conjunctions.'
  },
  {
    id: 'conj2',
    question: 'Complete the correlative conjunction: "Neither Tom ___ Jerry came to the party."',
    options: ['or', 'nor', 'and', 'but'],
    correctAnswer: 'nor',
    explanation: 'Neither...nor is a correlative conjunction pair.'
  }
];

export const passiveVoiceQuestions: QuizQuestion[] = [
  {
    id: 'pv1',
    question: 'Transform to passive: "They build houses"',
    options: [
      'Houses are built by them',
      'Houses is built by them',
      'Houses were build by them',
      'Houses are build by them'
    ],
    correctAnswer: 'Houses are built by them',
    explanation: 'Use the appropriate form of "be" + past participle'
  },
  {
    id: 'pv2',
    question: 'Which sentence is in passive voice?',
    options: [
      'The cat chases the mouse',
      'The mouse is chased by the cat',
      'The mouse runs away',
      'The cat is chasing'
    ],
    correctAnswer: 'The mouse is chased by the cat',
    explanation: 'Passive voice puts the object first and uses "be + past participle"'
  }
];

export const reportedSpeechQuestions: QuizQuestion[] = [
  {
    id: 'rs1',
    question: 'Change to reported speech: "I am happy" → He said...',
    options: [
      'he is happy',
      'he was happy',
      'he were happy',
      'he has been happy'
    ],
    correctAnswer: 'he was happy',
    explanation: 'Present tense changes to past in reported speech'
  },
  {
    id: 'rs2',
    question: 'Report this question: "Do you like coffee?"',
    options: [
      'He asked do I like coffee',
      'He asked if I liked coffee',
      'He asked did I like coffee',
      'He asked if I like coffee'
    ],
    correctAnswer: 'He asked if I liked coffee',
    explanation: 'Questions become statements and tenses move back'
  }
];

export const questionFormationQuestions: QuizQuestion[] = [
  {
    id: 'qf1',
    question: 'Choose the correct question form:',
    options: [
      'Where you are going?',
      'Where are you going?',
      'Where going you are?',
      'Where you going are?'
    ],
    correctAnswer: 'Where are you going?',
    explanation: 'Question word + auxiliary + subject + main verb'
  },
  {
    id: 'qf2',
    question: 'Select the correct yes/no question:',
    options: [
      'Do she like pizza?',
      'Does she likes pizza?',
      'Does she like pizza?',
      'Is she likes pizza?'
    ],
    correctAnswer: 'Does she like pizza?',
    explanation: 'Use does/do + base form of verb for present simple questions'
  }
];

export const negativeStatementsQuestions: QuizQuestion[] = [
  {
    id: 'ns1',
    question: 'Choose the correct negative form:',
    options: [
      'I not like coffee',
      'I don\'t likes coffee',
      'I don\'t like coffee',
      'I no like coffee'
    ],
    correctAnswer: 'I don\'t like coffee',
    explanation: 'Use don\'t/doesn\'t + base form of verb'
  },
  {
    id: 'ns2',
    question: 'Which is NOT a correct negative sentence?',
    options: [
      'I haven\'t seen him',
      'I don\'t have no money',
      'She isn\'t coming',
      'They never go there'
    ],
    correctAnswer: 'I don\'t have no money',
    explanation: 'Avoid double negatives in English'
  }
];

export const imperativeSentencesQuestions: QuizQuestion[] = [
  {
    id: 'is1',
    question: 'Which is a correct imperative sentence?',
    options: [
      'You open the door',
      'Open the door',
      'To open the door',
      'Opening the door'
    ],
    correctAnswer: 'Open the door',
    explanation: 'Imperatives start with the base form of the verb'
  },
  {
    id: 'is2',
    question: 'Choose the correct negative imperative:',
    options: [
      'No talk in class',
      'Not talk in class',
      'Don\'t talk in class',
      'Don\'t talking in class'
    ],
    correctAnswer: 'Don\'t talk in class',
    explanation: 'Use don\'t + base form for negative imperatives'
  }
];

export const presentSimpleQuestions: QuizQuestion[] = [
  {
    id: 'ps1',
    question: 'Choose the correct form: "She ___ tennis every weekend."',
    options: ['play', 'plays', 'is playing', 'playing'],
    correctAnswer: 'plays',
    explanation: 'Third person singular needs -s in Present Simple'
  },
  {
    id: 'ps2',
    question: 'Which sentence expresses a general truth?',
    options: [
      'The sun rises in the east',
      'The sun is rising now',
      'The sun has risen',
      'The sun rose yesterday'
    ],
    correctAnswer: 'The sun rises in the east',
    explanation: 'Present Simple is used for general truths and facts'
  }
];

export const presentContinuousQuestions: QuizQuestion[] = [
  {
    id: 'pc1',
    question: 'Select the correct form: "Look! It ___ right now."',
    options: ['rains', 'is raining', 'has rained', 'rain'],
    correctAnswer: 'is raining',
    explanation: 'Present Continuous is used for actions happening now'
  },
  {
    id: 'pc2',
    question: 'Which verb CANNOT be used in continuous form?',
    options: ['love', 'play', 'run', 'walk'],
    correctAnswer: 'love',
    explanation: 'Stative verbs like "love" are not used in continuous form'
  }
];

export const presentPerfectQuestions: QuizQuestion[] = [
  {
    id: 'pp1',
    question: 'Choose the correct form: "I ___ this book three times."',
    options: ['read', 'have read', 'am reading', 'reads'],
    correctAnswer: 'have read',
    explanation: 'Present Perfect is used for past actions with present relevance'
  },
  {
    id: 'pp2',
    question: 'Which time expression is NOT used with Present Perfect?',
    options: ['yesterday', 'just', 'already', 'yet'],
    correctAnswer: 'yesterday',
    explanation: 'Specific past time expressions cannot be used with Present Perfect'
  }
];

export const presentPerfectContinuousQuestions: QuizQuestion[] = [
  {
    id: 'ppc1',
    question: 'Select the correct form: "She ___ English for six months."',
    options: [
      'learns',
      'has been learning',
      'is learning',
      'has learning'
    ],
    correctAnswer: 'has been learning',
    explanation: 'Present Perfect Continuous shows duration of ongoing action'
  },
  {
    id: 'ppc2',
    question: 'Which sentence emphasizes duration?',
    options: [
      'I have been waiting for an hour',
      'I have waited for an hour',
      'I wait for an hour',
      'I waited for an hour'
    ],
    correctAnswer: 'I have been waiting for an hour',
    explanation: 'Present Perfect Continuous emphasizes the duration of an action'
  }
];

export const pastSimpleQuestions: QuizQuestion[] = [
  {
    id: 'pts1',
    question: 'Choose the correct form: "They ___ to Paris last summer."',
    options: ['go', 'went', 'have gone', 'had gone'],
    correctAnswer: 'went',
    explanation: 'Past Simple is used for completed actions in the past'
  },
  {
    id: 'pts2',
    question: 'Which time expression can be used with Past Simple?',
    options: ['yesterday', 'yet', 'since', 'for'],
    correctAnswer: 'yesterday',
    explanation: 'Past Simple is used with specific past time expressions'
  }
];

export const pastContinuousQuestions: QuizQuestion[] = [
  {
    id: 'ptc1',
    question: 'Complete the sentence: "When the phone rang, I ___ dinner."',
    options: [
      'was cooking',
      'cooked',
      'have cooked',
      'am cooking'
    ],
    correctAnswer: 'was cooking',
    explanation: 'Past Continuous shows an action in progress in the past'
  },
  {
    id: 'ptc2',
    question: 'Which sentence shows an interrupted action?',
    options: [
      'While I was sleeping, the burglar came',
      'I slept for eight hours',
      'I had slept well',
      'I have slept enough'
    ],
    correctAnswer: 'While I was sleeping, the burglar came',
    explanation: 'Past Continuous is used for actions interrupted by another past action'
  }
];

export const pastPerfectQuestions: QuizQuestion[] = [
  {
    id: 'ptp1',
    question: 'Choose the correct form: "When I arrived, they ___ already ___ dinner."',
    options: [
      'had...finished',
      'have...finished',
      'were...finishing',
      'did...finish'
    ],
    correctAnswer: 'had...finished',
    explanation: 'Past Perfect shows an action completed before another past action'
  },
  {
    id: 'ptp2',
    question: 'Which sentence uses Past Perfect correctly?',
    options: [
      'She had lived in Paris before she moved to London',
      'She has lived in Paris before she moved to London',
      'She was living in Paris before she moved to London',
      'She lived in Paris before she moved to London'
    ],
    correctAnswer: 'She had lived in Paris before she moved to London',
    explanation: 'Past Perfect is used for an action completed before another past action'
  }
];

export const pastPerfectContinuousQuestions: QuizQuestion[] = [
  {
    id: 'ptpc1',
    question: 'Select the correct form: "They ___ for three hours before the bus came."',
    options: [
      'had been waiting',
      'were waiting',
      'had waited',
      'have been waiting'
    ],
    correctAnswer: 'had been waiting',
    explanation: 'Past Perfect Continuous shows duration before another past action'
  },
  {
    id: 'ptpc2',
    question: 'Which situation uses Past Perfect Continuous correctly?',
    options: [
      'She was tired because she had been running',
      'She was tired because she had run',
      'She was tired because she was running',
      'She was tired because she ran'
    ],
    correctAnswer: 'She was tired because she had been running',
    explanation: 'Past Perfect Continuous shows a past action affecting another past situation'
  }
];

export const futureSimpleQuestions: QuizQuestion[] = [
  {
    id: 'fs1',
    question: 'Choose the correct spontaneous decision:',
    options: [
      'I will help you with that',
      'I am going to help you with that',
      'I help you with that',
      'I am helping you with that'
    ],
    correctAnswer: 'I will help you with that',
    explanation: 'Will is used for spontaneous decisions made at the moment of speaking'
  },
  {
    id: 'fs2',
    question: 'Which is correct? "If it rains, I ___ stay at home."',
    options: [
      'will',
      'am going to',
      'shall',
      'would'
    ],
    correctAnswer: 'will',
    explanation: 'Will is used in the main clause of first conditional sentences'
  }
];

export const futureContinuousQuestions: QuizQuestion[] = [
  {
    id: 'fc1',
    question: 'Complete: "This time tomorrow, I ___ on a beach."',
    options: [
      'will be lying',
      'will lie',
      'am lying',
      'will have lain'
    ],
    correctAnswer: 'will be lying',
    explanation: 'Future Continuous shows an action in progress at a specific future time'
  },
  {
    id: 'fc2',
    question: 'Which shows a future arrangement in progress?',
    options: [
      'I will be working late tomorrow',
      'I will work late tomorrow',
      'I work late tomorrow',
      'I am working late tomorrow'
    ],
    correctAnswer: 'I will be working late tomorrow',
    explanation: 'Future Continuous shows future arrangements in progress'
  }
];

export const futurePerfectQuestions: QuizQuestion[] = [
  {
    id: 'fp1',
    question: 'Choose: "By next year, they ___ the bridge."',
    options: [
      'will have finished',
      'will finish',
      'will be finishing',
      'have finished'
    ],
    correctAnswer: 'will have finished',
    explanation: 'Future Perfect shows completion before a specific future time'
  },
  {
    id: 'fp2',
    question: 'Which time expression works with Future Perfect?',
    options: [
      'by next week',
      'last week',
      'now',
      'at present'
    ],
    correctAnswer: 'by next week',
    explanation: 'Future Perfect is used with time expressions starting with "by" + future time'
  }
];

export const futurePerfectContinuousQuestions: QuizQuestion[] = [
  {
    id: 'fpc1',
    question: 'Select: "By June, I ___ here for ten years."',
    options: [
      'will have been working',
      'will be working',
      'will work',
      'will have worked'
    ],
    correctAnswer: 'will have been working',
    explanation: 'Future Perfect Continuous shows duration up to a future point'
  },
  {
    id: 'fpc2',
    question: 'Which emphasizes duration up to a future point?',
    options: [
      'In 2025, they will have been living here for 20 years',
      'In 2025, they will have lived here for 20 years',
      'In 2025, they will live here for 20 years',
      'In 2025, they will be living here for 20 years'
    ],
    correctAnswer: 'In 2025, they will have been living here for 20 years',
    explanation: 'Future Perfect Continuous emphasizes the duration of an action up to a future point'
  }
];

export const zeroConditionalQuestions: QuizQuestion[] = [
  {
    id: 'zc1',
    question: 'Complete the sentence: "If ice ___ to zero degrees, it ___."',
    options: [
      'heats, melts',
      'heated, melted',
      'heats, will melt',
      'will heat, will melt'
    ],
    correctAnswer: 'heats, melts',
    explanation: 'Zero conditional uses present simple in both clauses for general truths'
  },
  {
    id: 'zc2',
    question: 'Which sentence is a correct zero conditional?',
    options: [
      'When water boils, it turns to steam',
      'If water will boil, it turns to steam',
      'When water boils, it will turn to steam',
      'If water boiled, it would turn to steam'
    ],
    correctAnswer: 'When water boils, it turns to steam',
    explanation: 'Zero conditional expresses scientific facts using present simple in both parts'
  }
];

export const firstConditionalQuestions: QuizQuestion[] = [
  {
    id: 'fc1',
    question: 'Choose the correct first conditional: "If it ___ tomorrow, we ___ to the beach."',
    options: [
      'rains, won\'t go',
      'will rain, won\'t go',
      'rains, don\'t go',
      'will rain, don\'t go'
    ],
    correctAnswer: 'rains, won\'t go',
    explanation: 'First conditional uses present simple after if and will in the result clause'
  },
  {
    id: 'fc2',
    question: 'Which sentence is a correct first conditional?',
    options: [
      'If you study hard, you will pass',
      'If you will study hard, you will pass',
      'If you studied hard, you will pass',
      'If you study hard, you would pass'
    ],
    correctAnswer: 'If you study hard, you will pass',
    explanation: 'Never use will in the if-clause of first conditional'
  }
];

export const secondConditionalQuestions: QuizQuestion[] = [
  {
    id: 'sc1',
    question: 'Complete: "If I ___ rich, I ___ buy a yacht."',
    options: [
      'was, would',
      'were, would',
      'am, will',
      'had been, would have'
    ],
    correctAnswer: 'were, would',
    explanation: 'Second conditional uses were (not was) and would for hypothetical situations'
  },
  {
    id: 'sc2',
    question: 'Which is NOT a correct second conditional?',
    options: [
      'If I won the lottery, I would travel the world',
      'If she were here, she would help us',
      'If I will win the lottery, I would travel',
      'If he had more time, he would study French'
    ],
    correctAnswer: 'If I will win the lottery, I would travel',
    explanation: 'Don\'t use will in the if-clause of second conditional'
  }
];

export const thirdConditionalQuestions: QuizQuestion[] = [
  {
    id: 'tc1',
    question: 'Choose the correct form: "If you ___ earlier, you ___ the train."',
    options: [
      'had left, would have caught',
      'left, would have caught',
      'had left, would catch',
      'would have left, would have caught'
    ],
    correctAnswer: 'had left, would have caught',
    explanation: 'Third conditional uses past perfect and would have + past participle'
  },
  {
    id: 'tc2',
    question: 'Which sentence shows correct third conditional usage?',
    options: [
      'If I had studied harder, I would have passed',
      'If I studied harder, I would have passed',
      'If I had studied harder, I would pass',
      'If I would have studied harder, I would have passed'
    ],
    correctAnswer: 'If I had studied harder, I would have passed',
    explanation: 'Third conditional expresses regret about the past using had + past participle'
  }
];

export const independentClauseQuestions: QuizQuestion[] = [
  {
    id: 'ic1',
    question: 'Which is a complete independent clause?',
    options: [
      'When the rain stops',
      'The children played in the park',
      'Running quickly to school',
      'Because it was late'
    ],
    correctAnswer: 'The children played in the park',
    explanation: 'An independent clause must have a subject and verb and express a complete thought'
  },
  {
    id: 'ic2',
    question: 'How many independent clauses are in: "I love pizza, and my sister prefers pasta"?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '2',
    explanation: 'Both "I love pizza" and "my sister prefers pasta" are independent clauses'
  }
];

export const dependentClauseQuestions: QuizQuestion[] = [
  {
    id: 'dc1',
    question: 'Which is a dependent clause?',
    options: [
      'While I was sleeping',
      'The dog barks loudly',
      'Trees grow tall',
      'Birds fly south'
    ],
    correctAnswer: 'While I was sleeping',
    explanation: 'A dependent clause cannot stand alone and often begins with a subordinating conjunction'
  },
  {
    id: 'dc2',
    question: 'Identify the dependent clause: "Before the sun sets, we should go home."',
    options: [
      'Before the sun sets',
      'we should go home',
      'Both are dependent',
      'Neither is dependent'
    ],
    correctAnswer: 'Before the sun sets',
    explanation: 'The clause starting with "before" depends on the main clause to make sense'
  }
];

export const adjectiveClauseQuestions: QuizQuestion[] = [
  {
    id: 'ac1',
    question: 'Which sentence contains an adjective clause?',
    options: [
      'The book that I bought yesterday is interesting',
      'The red book is interesting',
      'I bought the book yesterday',
      'The book was interesting'
    ],
    correctAnswer: 'The book that I bought yesterday is interesting',
    explanation: '"that I bought yesterday" is an adjective clause modifying "book"'
  },
  {
    id: 'ac2',
    question: 'Which word introduces an adjective clause?',
    options: ['who', 'but', 'and', 'or'],
    correctAnswer: 'who',
    explanation: 'Relative pronouns like "who" often introduce adjective clauses'
  }
];

export const gerundPhraseQuestions: QuizQuestion[] = [
  {
    id: 'gp1',
    question: 'Identify the gerund phrase:',
    options: [
      'Reading books improves vocabulary',
      'The red book',
      'To read books',
      'She reads books'
    ],
    correctAnswer: 'Reading books improves vocabulary',
    explanation: '"Reading books" is a gerund phrase functioning as the subject'
  },
  {
    id: 'gp2',
    question: 'Which sentence uses a gerund phrase as an object?',
    options: [
      'She enjoys swimming in the ocean',
      'To swim is fun',
      'The swimming pool is full',
      'She swims well'
    ],
    correctAnswer: 'She enjoys swimming in the ocean',
    explanation: '"swimming in the ocean" is a gerund phrase acting as the object'
  }
];

export const participlePhrasesQuestions: QuizQuestion[] = [
  {
    id: 'pp1',
    question: 'Which sentence contains a participle phrase?',
    options: [
      'Running to catch the bus, John dropped his phone',
      'John runs to catch the bus',
      'To run is good exercise',
      'Running is good exercise'
    ],
    correctAnswer: 'Running to catch the bus, John dropped his phone',
    explanation: '"Running to catch the bus" is a participle phrase modifying "John"'
  },
  {
    id: 'pp2',
    question: 'Find the sentence with a past participle phrase:',
    options: [
      'Exhausted from the race, she sat down',
      'She was exhausted',
      'To exhaust oneself',
      'Being exhausted'
    ],
    correctAnswer: 'Exhausted from the race, she sat down',
    explanation: '"Exhausted from the race" is a past participle phrase'
  }
];

export const verbalQuestions: QuizQuestion[] = [
  {
    id: 'v1',
    question: 'Which is an infinitive phrase?',
    options: [
      'To win the race',
      'Winning the race',
      'Won the race',
      'Wins the race'
    ],
    correctAnswer: 'To win the race',
    explanation: 'An infinitive phrase begins with "to" followed by the base form of the verb'
  },
  {
    id: 'v2',
    question: 'Identify the verbal in: "The written report was excellent."',
    options: [
      'written',
      'report',
      'was',
      'excellent'
    ],
    correctAnswer: 'written',
    explanation: '"written" is a past participle used as an adjective'
  }
];

export const adverbialClauseQuestions: QuizQuestion[] = [
  {
    id: 'advc1',
    question: 'Which sentence contains an adverbial clause of time?',
    options: [
      'When the bell rings, students leave the classroom',
      'The students who study hard pass the exam',
      'I know that he is smart',
      'This is the book I bought'
    ],
    correctAnswer: 'When the bell rings, students leave the classroom',
    explanation: '"When the bell rings" is an adverbial clause showing time'
  },
  {
    id: 'advc2',
    question: 'Identify the adverbial clause of reason:',
    options: [
      'Because it was raining, we stayed home',
      'If it rains, we will stay home',
      'Although it rained, we went out',
      'We stayed home while it rained'
    ],
    correctAnswer: 'Because it was raining, we stayed home',
    explanation: '"Because it was raining" explains the reason for staying home'
  }
];

export const nounClauseQuestions: QuizQuestion[] = [
  {
    id: 'nc1',
    question: 'Which sentence contains a noun clause?',
    options: [
      'What she said surprised everyone',
      'The book which I read was interesting',
      'When he arrives, we will leave',
      'The old house on the hill'
    ],
    correctAnswer: 'What she said surprised everyone',
    explanation: '"What she said" is a noun clause functioning as the subject'
  },
  {
    id: 'nc2',
    question: 'Find the noun clause in: "I believe that she will succeed."',
    options: [
      'that she will succeed',
      'I believe',
      'she will',
      'will succeed'
    ],
    correctAnswer: 'that she will succeed',
    explanation: '"that she will succeed" is a noun clause acting as the object of believe'
  }
];