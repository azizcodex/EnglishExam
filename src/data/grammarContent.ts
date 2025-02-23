import { GrammarExplanation } from '../types';

export const nounExplanation: GrammarExplanation = {
  whenToUse: `Nouns are used to name or identify:
- People (teacher, doctor, friend)
- Places (school, park, city)
- Things (book, computer, car)
- Ideas (love, happiness, freedom)
- Animals (cat, dog, bird)`,
  
  howToUse: `Nouns can be used in several ways:
1. As the subject of a sentence
2. As the object of a verb
3. As the object of a preposition
4. As a possessive form
5. With articles (a, an, the)`,
  
  examples: [
    "The teacher (subject) explained the lesson.",
    "I read a book (object) yesterday.",
    "The cat is on the table (object of preposition).",
    "John's (possessive) car is red.",
    "An apple (with article) a day keeps the doctor away."
  ],
  
  commonMistakes: [
    "Using plural forms incorrectly (childs instead of children)",
    "Confusing countable and uncountable nouns (furnitures instead of furniture)",
    "Incorrect article usage (an university instead of a university)",
    "Wrong possessive forms (the book of Jack instead of Jack's book)",
    "Mixing singular verbs with plural nouns (The books is... instead of The books are...)"
  ],
  
  tips: [
    "Learn the common irregular plural forms",
    "Memorize whether nouns are countable or uncountable",
    "Practice using articles correctly",
    "Pay attention to subject-verb agreement",
    "Learn the proper use of apostrophes for possession"
  ],
  
  additionalNotes: [
    "Some nouns can be both countable and uncountable with different meanings",
    "Collective nouns can take singular or plural verbs depending on context",
    "Compound nouns are formed by combining two or more words",
    "Abstract nouns represent ideas, qualities, or states",
    "Proper nouns always start with a capital letter"
  ],
  arabicTranslation: "قواعد الأسماء"
};

export const modalVerbsExplanation: GrammarExplanation = {
  whenToUse: `Modal verbs are used to express:
- Ability (can, could)
- Permission (may, can)
- Obligation (must, should)
- Possibility (might, could)
- Necessity (have to, need to)`,

  howToUse: `Modal verbs follow these rules:
1. Always followed by the base form of the verb
2. No -s in third person singular
3. Questions formed by inverting modal and subject
4. Negatives formed by adding 'not' after modal`,

  examples: [
    "She can speak three languages.",
    "You must finish your homework.",
    "They might come to the party.",
    "Could you help me, please?",
    "We should study more."
  ],

  commonMistakes: [
    "Using 'to' after modal verbs (must to go)",
    "Adding -s for third person (he cans)",
    "Using two modal verbs together (must can)",
    "Confusing may and might",
    "Using present perfect with 'must' for past deduction"
  ],

  tips: [
    "Remember modals express attitude/opinion",
    "Learn the differences between similar modals",
    "Practice negative and question forms",
    "Study the past forms of modals",
    "Learn common modal expressions"
  ],

  additionalNotes: [
    "Some modals have past forms (can → could)",
    "Modal verbs can express different meanings",
    "Semi-modals like 'have to' follow different rules",
    "Modal verbs are always auxiliary verbs",
    "The meaning can change based on context"
  ],
  arabicTranslation: "الأفعال المساعدة"
};

export const verbTensesExplanation: GrammarExplanation = {
  whenToUse: `Verb tenses are used to show:
- When an action happens (present, past, future)
- Whether it's ongoing or completed
- How actions relate to each other in time
- Regular vs irregular patterns
- Habits and repeated actions`,

  howToUse: `Verb tenses follow these patterns:
1. Simple tenses for facts and habits
2. Continuous tenses for ongoing actions
3. Perfect tenses for completed actions
4. Perfect continuous for duration
5. Future forms for planned actions`,

  examples: [
    "I work here (Present Simple)",
    "She is working now (Present Continuous)",
    "They have worked all day (Present Perfect)",
    "We had been working (Past Perfect Continuous)",
    "He will work tomorrow (Future Simple)"
  ],

  commonMistakes: [
    "Mixing present perfect and past simple",
    "Wrong auxiliary verbs in questions",
    "Incorrect irregular verb forms",
    "Using present continuous for habits",
    "Wrong time markers with tenses"
  ],

  tips: [
    "Learn the basic structure of each tense",
    "Practice irregular verbs regularly",
    "Use time markers appropriately",
    "Study the differences between similar tenses",
    "Focus on one tense at a time"
  ],

  additionalNotes: [
    "Some verbs are not used in continuous forms",
    "Perfect tenses connect different time periods",
    "Future can be expressed in multiple ways",
    "Context determines tense choice",
    "Some tenses have multiple uses"
  ],
  arabicTranslation: "الأزمنة"
};

export const conditionalsExplanation: GrammarExplanation = {
  whenToUse: `Conditionals are used to express:
- Real possibilities (First conditional)
- Unreal present/future (Second conditional)
- Unreal past (Third conditional)
- General truths (Zero conditional)
- Mixed time references`,

  howToUse: `Conditional sentences have two parts:
1. If clause (condition)
2. Main clause (result)
3. Different tense combinations
4. Modal verbs in result clauses
5. Unless as alternative to if not`,

  examples: [
    "If it rains, I will stay home (First)",
    "If I had money, I would travel (Second)",
    "If I had studied, I would have passed (Third)",
    "If you heat ice, it melts (Zero)",
    "Unless you hurry, you'll be late"
  ],

  commonMistakes: [
    "Wrong tense combinations",
    "Using will in if-clauses",
    "Confusing second and third conditionals",
    "Forgetting comma between clauses",
    "Mixed conditionals errors"
  ],

  tips: [
    "Learn the structure of each conditional",
    "Practice forming questions",
    "Use unless appropriately",
    "Study mixed conditionals",
    "Remember time references"
  ],

  additionalNotes: [
    "Conditionals can be mixed for different times",
    "Modal verbs add different meanings",
    "Some variations are possible",
    "Context determines conditional type",
    "Inversion can replace if in third conditional"
  ],
  arabicTranslation: "الجمل الشرطية"
};

export const zeroConditionalExplanation: GrammarExplanation = {
  whenToUse: "Used for general truths, scientific facts, and situations that are always true if certain conditions are met",
  howToUse: "If/When + present simple, present simple. Both parts use present simple tense",
  examples: [
    "If you heat water to 100°C, it boils.",
    "When it rains, the ground gets wet.",
    "If plants don't get water, they die.",
    "Ice melts if you heat it."
  ],
  commonMistakes: [
    "Using will in the result clause",
    "Using different tenses in the two parts",
    "Confusing with first conditional",
    "Using past tense for general truths"
  ],
  tips: [
    "Think of scientific facts",
    "Use for 'always true' situations",
    "Both clauses are in present simple",
    "Can use 'when' instead of 'if'"
  ],
  additionalNotes: [
    "Also called 'factual conditional'",
    "Used for habits and routines",
    "Expresses cause and effect",
    "Common in scientific writing"
  ],
  arabicTranslation: "الشرط الصفري"
};

export const firstConditionalExplanation: GrammarExplanation = {
  whenToUse: "Used for real or possible situations in the future and their likely results",
  howToUse: "If + present simple, will + base form. First part uses present simple, second part uses will/going to",
  examples: [
    "If it rains tomorrow, I will stay at home.",
    "If you study hard, you will pass the exam.",
    "I'll give you a call if I have time.",
    "If you don't hurry, you'll miss the bus."
  ],
  commonMistakes: [
    "Using will in the if-clause",
    "Using present continuous instead of simple",
    "Wrong word order in result clause",
    "Using would instead of will"
  ],
  tips: [
    "Use present simple after if",
    "Never use will in if-clause",
    "Can use unless instead of if not",
    "Result clause can use other modals"
  ],
  additionalNotes: [
    "Expresses realistic possibilities",
    "Used for likely future events",
    "Can use imperative in result clause",
    "Shows cause and effect relationship"
  ],
  arabicTranslation: "الشرط الأول"
};

export const secondConditionalExplanation: GrammarExplanation = {
  whenToUse: "Used for unreal or imaginary situations in the present/future and their hypothetical results",
  howToUse: "If + past simple, would + base form. First part uses past simple (hypothetical), second part uses would",
  examples: [
    "If I had a million dollars, I would buy a house.",
    "If I were you, I would study harder.",
    "What would you do if you won the lottery?",
    "If he spoke English, he would get the job."
  ],
  commonMistakes: [
    "Using was instead of were",
    "Using would in if-clause",
    "Mixing with first conditional",
    "Wrong form after would"
  ],
  tips: [
    "Use were for all persons after if",
    "Think of unlikely situations",
    "Can use could/might in result",
    "Expresses wishes and dreams"
  ],
  additionalNotes: [
    "Less likely than first conditional",
    "Often used for advice (If I were you...)",
    "Used for impossible situations",
    "Shows speaker's doubt about possibility"
  ],
  arabicTranslation: "الشرط الثاني"
};

export const thirdConditionalExplanation: GrammarExplanation = {
  whenToUse: "Used for impossible situations in the past and their hypothetical past results",
  howToUse: "If + past perfect, would have + past participle. Expresses regret about past situations",
  examples: [
    "If I had studied harder, I would have passed the exam.",
    "If you had told me, I would have helped you.",
    "She would have come if you had invited her.",
    "If it hadn't rained, we would have gone to the beach."
  ],
  commonMistakes: [
    "Wrong form of have in result clause",
    "Using wrong past participles",
    "Confusing with second conditional",
    "Missing 'have' in result clause"
  ],
  tips: [
    "Always about the past",
    "Expresses regret/criticism",
    "Could have/might have possible in result",
    "Both parts refer to past time"
  ],
  additionalNotes: [
    "Used for past regrets",
    "Cannot change the situation now",
    "Often expresses criticism",
    "Shows speaker's wishful thinking about past"
  ],
  arabicTranslation: "الشرط الثالث"
};

export const clausesAndPhrasesExplanation: GrammarExplanation = {
  whenToUse: `Clauses and phrases are used for:
- Combining ideas (coordination)
- Showing relationships (subordination)
- Adding detail (modification)
- Creating complex sentences
- Expressing complete thoughts`,

  howToUse: `Different types serve different purposes:
1. Independent clauses stand alone
2. Dependent clauses need main clauses
3. Phrases modify other elements
4. Punctuation rules apply
5. Word order matters`,

  examples: [
    "While I was sleeping, the phone rang.",
    "The man who lives next door is friendly.",
    "Running quickly, she caught the bus.",
    "I like coffee, but I don't like tea.",
    "Before the movie started, we bought popcorn."
  ],

  commonMistakes: [
    "Sentence fragments",
    "Comma splices",
    "Misplaced modifiers",
    "Wrong relative pronouns",
    "Faulty parallelism"
  ],

  tips: [
    "Identify main and subordinate clauses",
    "Use appropriate conjunctions",
    "Check for complete thoughts",
    "Place modifiers correctly",
    "Maintain parallel structure"
  ],

  additionalNotes: [
    "Clauses contain subject and verb",
    "Phrases lack subject or verb or both",
    "Different types serve different purposes",
    "Word order affects meaning",
    "Punctuation rules are important"
  ],
  arabicTranslation: "الجمل والعبارات"
};

export const sentenceBasicsExplanation: GrammarExplanation = {
  whenToUse: `Sentence basics are essential for:
- Expressing complete thoughts
- Creating clear communication
- Varying sentence structure
- Building paragraphs
- Maintaining flow`,

  howToUse: `Basic sentences require:
1. Subject and predicate
2. Proper punctuation
3. Clear word order
4. Agreement rules
5. Logical connection`,

  examples: [
    "The cat sleeps. (Simple)",
    "She sings and dances. (Compound)",
    "When it rains, I stay inside. (Complex)",
    "The tall tree sways in the wind.",
    "They arrived early but left late."
  ],

  commonMistakes: [
    "Missing subjects or verbs",
    "Run-on sentences",
    "Subject-verb disagreement",
    "Wrong word order",
    "Unclear pronoun reference"
  ],

  tips: [
    "Check for complete thoughts",
    "Vary sentence structure",
    "Use proper punctuation",
    "Maintain clear references",
    "Read aloud to check flow"
  ],

  additionalNotes: [
    "Every sentence needs main elements",
    "Different types serve different purposes",
    "Word order affects meaning",
    "Punctuation aids understanding",
    "Structure affects style"
  ],
  arabicTranslation: "أساسيات الجملة"
};

export const verbalsExplanation: GrammarExplanation = {
  whenToUse: `Verbals are used to:
- Add variety to writing
- Create concise expressions
- Show action as nouns
- Modify other words
- Connect ideas`,

  howToUse: `Three main types:
1. Infinitives (to + verb)
2. Gerunds (-ing form as noun)
3. Participles (-ing/-ed as adjectives)
4. Verbal phrases
5. Modifying functions`,

  examples: [
    "To swim is fun. (Infinitive)",
    "Reading helps learning. (Gerund)",
    "The sleeping cat purrs. (Participle)",
    "Having finished work, she left.",
    "The task to complete was difficult."
  ],

  commonMistakes: [
    "Dangling modifiers",
    "Wrong form choice",
    "Misplaced phrases",
    "Incorrect parallel structure",
    "Confusing gerunds and participles"
  ],

  tips: [
    "Identify verbal type",
    "Check for logical connection",
    "Maintain parallel structure",
    "Place modifiers correctly",
    "Use appropriate form"
  ],

  additionalNotes: [
    "Verbals combine verb and other functions",
    "Position affects meaning",
    "Different types have different uses",
    "Context determines choice",
    "Multiple forms possible"
  ],
  arabicTranslation: "المشتقات الفعلية"
};

export const nounsExplanation: GrammarExplanation = {
  whenToUse: [
    "Nouns are used to name people, places, things, or ideas",
    "They can be subjects or objects in sentences",
    "Used to show possession with ('s)",
  ],
  howToUse: [
    "Common nouns name general items (book, city, teacher)",
    "Proper nouns name specific items and start with capital letters (London, Mary, iPhone)",
    "Collective nouns name groups (team, family, flock)",
    "Abstract nouns name ideas or concepts (love, freedom, happiness)",
  ],
  examples: [
    "The cat (common noun) sat on the mat.",
    "Sarah (proper noun) lives in Paris (proper noun).",
    "The team (collective noun) won the championship.",
    "Love (abstract noun) is a powerful emotion.",
  ],
  commonMistakes: [
    "Forgetting to capitalize proper nouns",
    "Using incorrect plural forms (childs instead of children)",
    "Confusing possessive forms (its vs it's)",
  ],
  tips: [
    "If you can put 'a' or 'the' before it, it's probably a noun",
    "Nouns can be made plural by adding -s or -es (with some exceptions)",
    "Proper nouns always start with capital letters",
  ],
  additionalNotes: "Nouns can function as both subjects and objects in sentences. They can also be modified by adjectives and articles.",
  arabicTranslation: "الأسماء"
};

export const pronounsExplanation: GrammarExplanation = {
  whenToUse: [
    "Used to replace nouns to avoid repetition",
    "When referring to people or things already mentioned",
    "To make sentences more concise and natural",
  ],
  howToUse: [
    "Personal pronouns (I, you, he, she, it, we, they)",
    "Possessive pronouns (mine, yours, his, hers, ours, theirs)",
    "Relative pronouns (who, which, that)",
    "Reflexive pronouns (myself, yourself, himself, etc.)",
  ],
  examples: [
    "John gave Mary the book. He gave it to her.",
    "This car is mine, not yours.",
    "The person who called earlier left a message.",
    "She blamed herself for the mistake.",
  ],
  commonMistakes: [
    "Using subjective pronouns as objects (between you and I)",
    "Incorrect pronoun-antecedent agreement",
    "Misusing who/whom",
  ],
  tips: [
    "Make sure pronouns clearly refer to their antecedents",
    "Check if you're using the right case (subject vs object)",
    "Use who for people and which for things",
  ],
  additionalNotes: "Pronouns must agree in number and gender with their antecedents. Be careful with indefinite pronouns.",
  arabicTranslation: "الضمائر"
};

export const articlesExplanation: GrammarExplanation = {
  whenToUse: [
    "Use 'a/an' for non-specific singular nouns",
    "Use 'the' for specific nouns",
    "Use 'the' for unique items or when context is clear",
  ],
  howToUse: [
    "Use 'a' before consonant sounds",
    "Use 'an' before vowel sounds",
    "Use 'the' for specific references",
    "Some nouns don't need articles (zero article)",
  ],
  examples: [
    "I need a pen. (any pen)",
    "I saw an elephant at the zoo.",
    "The sun is bright today.",
    "Life is beautiful. (zero article)",
  ],
  commonMistakes: [
    "Using 'a' before vowel sounds",
    "Using articles with uncountable nouns",
    "Overusing 'the' with general concepts",
  ],
  tips: [
    "Listen to the sound, not just the letter, when choosing a/an",
    "Think about whether the noun is specific or general",
    "Remember that some languages use articles differently",
  ],
  additionalNotes: "Articles are often one of the most challenging aspects for English learners, especially if their native language doesn't use articles.",
  arabicTranslation: "أدوات التعريف"
};

export const adjectivesExplanation: GrammarExplanation = {
  whenToUse: [
    "To describe or modify nouns",
    "To compare qualities between things",
    "To specify which one you mean",
  ],
  howToUse: [
    "Place before nouns (attributive position)",
    "After linking verbs (predicative position)",
    "Use comparative form for comparing two things",
    "Use superlative form for comparing three or more things",
  ],
  examples: [
    "The red car is fast.",
    "The weather is beautiful.",
    "This cake is better than that one.",
    "Mount Everest is the highest mountain.",
  ],
  commonMistakes: [
    "Incorrect order of multiple adjectives",
    "Wrong comparative/superlative forms",
    "Using adjectives instead of adverbs",
  ],
  tips: [
    "Remember OSASCOMP order (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose)",
    "Add -er for comparatives and -est for superlatives of short adjectives",
    "Use more/most for longer adjectives",
  ],
  additionalNotes: "Adjectives in English don't change form to match the noun they modify (unlike some other languages).",
  arabicTranslation: "الصفات"
};

export const adverbsExplanation: GrammarExplanation = {
  whenToUse: [
    "To modify verbs (how something is done)",
    "To modify adjectives (degree of quality)",
    "To modify other adverbs",
    "To show time, place, manner, or degree",
  ],
  howToUse: [
    "Add -ly to most adjectives to form adverbs",
    "Place according to what they modify",
    "Use as intensifiers or downtoners",
  ],
  examples: [
    "She dances beautifully.",
    "The test was incredibly difficult.",
    "He runs very fast.",
    "They arrived early yesterday.",
  ],
  commonMistakes: [
    "Confusing adjectives and adverbs",
    "Wrong placement in sentences",
    "Using double negatives",
  ],
  tips: [
    "If it describes how, when, where, or to what extent, it's probably an adverb",
    "Most adverbs can move around in a sentence",
    "Not all adverbs end in -ly",
  ],
  additionalNotes: "The position of adverbs can change the meaning or emphasis of a sentence. Be careful with frequency adverbs in present simple tense.",
  arabicTranslation: "الظروف"
};

export const prepositionsExplanation: GrammarExplanation = {
  whenToUse: [
    "To show relationships in space or time",
    "To connect nouns to other parts of the sentence",
    "To show how things are related",
  ],
  howToUse: [
    "Place before nouns or pronouns",
    "Use appropriate preposition for specific relationships",
    "Consider common phrases and collocations",
  ],
  examples: [
    "The book is on the table.",
    "We'll meet at 3 o'clock.",
    "She lives in London.",
    "He's thinking about the future.",
  ],
  commonMistakes: [
    "Using wrong prepositions with specific verbs",
    "Translating prepositions directly from other languages",
    "Unnecessary prepositions at the end of questions",
  ],
  tips: [
    "Learn prepositional phrases as complete units",
    "Pay attention to verb + preposition combinations",
    "Practice with common time and place expressions",
  ],
  additionalNotes: "Prepositions can be tricky because they often don't translate directly between languages. Focus on learning common combinations.",
  arabicTranslation: "حروف الجر"
};

export const conjunctionsExplanation: GrammarExplanation = {
  whenToUse: [
    "To connect words, phrases, or clauses",
    "To show relationships between ideas",
    "To make compound and complex sentences",
  ],
  howToUse: [
    "Coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so)",
    "Subordinating conjunctions (because, although, if, when)",
    "Correlative conjunctions (both...and, either...or)",
  ],
  examples: [
    "I like tea and coffee.",
    "She'll come if it doesn't rain.",
    "Either you go, or I go.",
    "Both the movie and the book were good.",
  ],
  commonMistakes: [
    "Missing commas with coordinating conjunctions",
    "Incorrect word order after subordinating conjunctions",
    "Mixing up correlative conjunction pairs",
  ],
  tips: [
    "Remember FANBOYS for coordinating conjunctions",
    "Use commas before coordinating conjunctions in compound sentences",
    "Pay attention to verb agreement with correlative conjunctions",
  ],
  additionalNotes: "Conjunctions are essential for creating complex, sophisticated sentences. They help show logical relationships between ideas.",
  arabicTranslation: "حروف العطف"
};

export const subjectExplanation: GrammarExplanation = {
  whenToUse: "Used to identify who or what is performing the action, indicate what the sentence is about, and maintain clear sentence structure",
  howToUse: "Place the subject before the verb in statements. Can be a noun, pronoun, or noun phrase. Every complete sentence needs a subject (except commands)",
  examples: [
    "The dog (subject) barks loudly.",
    "She (subject) reads many books.",
    "The tall tree in my garden (subject phrase) provides shade."
  ],
  commonMistakes: [
    "Missing subjects in sentences",
    "Confusing subjects in complex sentences",
    "Not identifying the complete subject phrase"
  ],
  tips: [
    "Ask 'who or what is doing the action?'",
    "Look for the noun before the main verb",
    "Remember some subjects can be implied (in commands)"
  ],
  additionalNotes: [
    "The subject is a crucial part of any complete sentence",
    "It works together with the predicate to express a complete thought",
    "The subject determines the verb form in agreement"
  ],
  arabicTranslation: "الفاعل"
};

export const subjectVerbAgreementExplanation: GrammarExplanation = {
  whenToUse: "Used when connecting subjects with their verbs, with singular and plural subjects, and with compound subjects",
  howToUse: "Match singular subjects with singular verbs, plural subjects with plural verbs, and compound subjects joined by 'and' take plural verbs",
  examples: [
    "The cat sleeps (singular subject and verb).",
    "The cats sleep (plural subject and verb).",
    "Tom and Jerry are (compound subject) friends."
  ],
  commonMistakes: [
    "Confusion with collective nouns",
    "Mistakes with intervening phrases",
    "Problems with indefinite pronouns"
  ],
  tips: [
    "Identify the true subject (ignore words in between)",
    "Be careful with collective nouns",
    "Watch for compound subjects"
  ],
  additionalNotes: [
    "Subject-verb agreement is essential for grammatical accuracy",
    "Pay attention to complex subjects",
    "Consider notional agreement with collective nouns"
  ],
  arabicTranslation: "التطابق بين الفعل والفاعل"
};

export const directObjectExplanation: GrammarExplanation = {
  whenToUse: "Used to show what receives the action of the verb, with transitive verbs, and to complete the meaning of an action",
  howToUse: "Place after the verb, can be a noun, pronoun, or noun phrase, and must have a transitive verb",
  examples: [
    "She reads a book (direct object).",
    "He threw the ball (direct object).",
    "I understand the concept (direct object)."
  ],
  commonMistakes: [
    "Confusing direct and indirect objects",
    "Using wrong pronouns as objects",
    "Missing objects with transitive verbs"
  ],
  tips: [
    "Ask 'what?' or 'whom?' after the verb",
    "Look for the receiver of the action",
    "Check if the verb is transitive"
  ],
  additionalNotes: [
    "Direct objects are essential with transitive verbs",
    "They help complete the meaning of sentences",
    "They can be replaced by object pronouns"
  ],
  arabicTranslation: "المفعول به المباشر"
};

export const wordOrderExplanation: GrammarExplanation = {
  whenToUse: "Used to create grammatically correct sentences, maintain clear communication, and in different types of sentences",
  howToUse: "Follow Subject-Verb-Object pattern in statements, use Auxiliary-Subject-Verb in questions, and place modifiers close to what they modify",
  examples: [
    "She (S) reads (V) books (O).",
    "Do (Aux) you (S) like (V) coffee?",
    "The red car (proper modifier placement)."
  ],
  commonMistakes: [
    "Using verb before subject in statements",
    "Incorrect placement of adjectives",
    "Wrong position of adverbs"
  ],
  tips: [
    "Remember SVO pattern for basic sentences",
    "Keep modifiers close to modified words",
    "Study question formation patterns"
  ],
  additionalNotes: [
    "Word order is crucial in English",
    "It affects meaning more than in some other languages",
    "Different sentence types have different patterns"
  ],
  arabicTranslation: "ترتيب الكلمات"
};

export const punctuationExplanation: GrammarExplanation = {
  whenToUse: "Used to separate ideas and clauses, mark the end of sentences, and clarify relationships between ideas",
  howToUse: "Use periods for end of statements, commas to separate items and clauses, and question marks for questions",
  examples: [
    "I love reading books.",
    "She bought apples, oranges, and bananas.",
    "Where are you going?"
  ],
  commonMistakes: [
    "Missing commas in series",
    "Incorrect use of semicolons",
    "Run-on sentences"
  ],
  tips: [
    "Use commas to avoid confusion",
    "Check for complete sentences",
    "Learn basic punctuation rules"
  ],
  additionalNotes: [
    "Proper punctuation helps readers understand meaning",
    "Different punctuation marks serve different purposes",
    "Punctuation affects tone and pacing"
  ],
  arabicTranslation: "علامات الترقيم"
};

export const capitalizationExplanation: GrammarExplanation = {
  whenToUse: "Used at the beginning of sentences, with proper nouns and names, and in titles and headings",
  howToUse: "Capitalize first letter of sentences, names of people, places, brands, and important words in titles",
  examples: [
    "John lives in London.",
    "The Great Wall of China",
    "Star Wars: A New Hope"
  ],
  commonMistakes: [
    "Forgetting to capitalize proper nouns",
    "Random capitalization mid-sentence",
    "Inconsistent capitalization in titles"
  ],
  tips: [
    "Always capitalize 'I'",
    "Check for proper nouns",
    "Follow title capitalization rules"
  ],
  additionalNotes: [
    "Proper capitalization shows attention to detail",
    "Helps identify specific names and places",
    "Rules vary for different types of writing"
  ],
  arabicTranslation: "الأحرف الكبيرة"
};

export const intransitiveVerbsExplanation: GrammarExplanation = {
  whenToUse: "Used when the action doesn't transfer to an object, to show complete actions, and to describe states",
  howToUse: "Use without direct objects, often with adverbs or prepositional phrases, to show complete actions",
  examples: [
    "The baby sleeps peacefully.",
    "Birds fly in the sky.",
    "He arrived late."
  ],
  commonMistakes: [
    "Adding direct objects",
    "Confusing with transitive verbs",
    "Wrong verb patterns"
  ],
  tips: [
    "Check if the verb needs an object",
    "Look for complete meaning without objects",
    "Learn common intransitive verbs"
  ],
  additionalNotes: [
    "Intransitive verbs express complete actions",
    "They don't need direct objects",
    "Many verbs can be both transitive and intransitive"
  ],
  arabicTranslation: "الأفعال اللازمة"
};

export const linkingVerbsExplanation: GrammarExplanation = {
  whenToUse: "Used to connect subjects with their characteristics, show states of being, and describe conditions",
  howToUse: "Use forms of 'be', sensory verbs, and connect to predicate adjectives or nouns",
  examples: [
    "She is happy.",
    "The food smells delicious.",
    "They become doctors."
  ],
  commonMistakes: [
    "Using action verbs instead of linking verbs",
    "Wrong verb forms",
    "Confusing linking and helping verbs"
  ],
  tips: [
    "Look for descriptions after the verb",
    "Check if the verb shows state not action",
    "Learn common linking verbs"
  ],
  additionalNotes: [
    "Linking verbs connect subjects to descriptions",
    "They show states rather than actions",
    "Common linking verbs include forms of 'be', seem, appear"
  ],
  arabicTranslation: "الأفعال الرابطة"
};

export const indirectObjectsExplanation: GrammarExplanation = {
  whenToUse: "Used to show who receives the direct object, with verbs of giving or telling, and to indicate beneficiaries",
  howToUse: "Place between verb and direct object, can be replaced by to/for phrases, use with specific verbs",
  examples: [
    "She gave him (indirect) a book (direct).",
    "I sent Mary (indirect) the letter (direct).",
    "They showed us (indirect) the way (direct)."
  ],
  commonMistakes: [
    "Confusing direct and indirect objects",
    "Wrong word order",
    "Using wrong pronouns"
  ],
  tips: [
    "Ask 'to whom?' or 'for whom?'",
    "Check if there's also a direct object",
    "Learn verbs that take indirect objects"
  ],
  additionalNotes: [
    "Indirect objects show who benefits from the action",
    "They always come with direct objects",
    "Can be rewritten using prepositional phrases"
  ],
  arabicTranslation: "المفعول به غير المباشر"
};

export const typesOfSentencesExplanation: GrammarExplanation = {
  whenToUse: "Used to express different types of ideas, vary writing style, and achieve different communication purposes",
  howToUse: "Use declarative for statements, interrogative for questions, imperative for commands, and exclamatory for strong emotions",
  examples: [
    "The sun is bright. (declarative)",
    "What time is it? (interrogative)",
    "Please sit down. (imperative)",
    "What a beautiful day! (exclamatory)"
  ],
  commonMistakes: [
    "Wrong punctuation for sentence types",
    "Mixing sentence types inappropriately",
    "Incomplete sentences"
  ],
  tips: [
    "Match punctuation to sentence type",
    "Use appropriate tone for each type",
    "Vary sentence types in writing"
  ],
  additionalNotes: [
    "Different sentence types serve different purposes",
    "Help express ideas more effectively",
    "Make writing more interesting and varied"
  ],
  arabicTranslation: "أنواع الجمل"
};

export const prepositionalPhraseExplanation: GrammarExplanation = {
  whenToUse: "Used to show relationships in time or space, add detail to sentences, and modify nouns or verbs",
  howToUse: "Start with a preposition, include object of preposition, and place near words they modify",
  examples: [
    "The book on the table is mine.",
    "She works in the morning.",
    "They walked through the park."
  ],
  commonMistakes: [
    "Wrong preposition choice",
    "Dangling prepositions",
    "Too many prepositional phrases"
  ],
  tips: [
    "Keep phrases close to modified words",
    "Avoid overusing prepositional phrases",
    "Check for clear relationships"
  ],
  additionalNotes: [
    "Prepositional phrases add important details",
    "They show relationships between words",
    "Can function as adjectives or adverbs"
  ],
  arabicTranslation: "شبه الجملة"
};

export const canAndCouldExplanation: GrammarExplanation = {
  whenToUse: "Used to express ability, permission, possibility, and polite requests. 'Can' for present/future and 'could' for past or more polite requests",
  howToUse: "Use the base form of the main verb after can/could. For negatives, add 'not'. For questions, put can/could before the subject",
  examples: [
    "I can speak French. (ability)",
    "Could you help me, please? (polite request)",
    "It can be cold in winter. (possibility)",
    "She could swim when she was five. (past ability)"
  ],
  commonMistakes: [
    "Using 'to' after can/could (I can to speak)",
    "Using -ing form after can/could",
    "Confusing could and would",
    "Using past tense after could"
  ],
  tips: [
    "Use 'could' for more polite requests",
    "Remember 'can' changes to 'could' in the past",
    "Don't use 'can' for future arrangements",
    "Use 'could have' for past possibilities"
  ],
  additionalNotes: [
    "Can/could have different meanings based on context",
    "Could is more tentative than can",
    "Both are used in conditional sentences"
  ],
  arabicTranslation: "يستطيع و استطاع"
};

export const mayAndMightExplanation: GrammarExplanation = {
  whenToUse: "Used to express possibility, permission (formal), and polite suggestions. Both indicate a lower probability than 'will'",
  howToUse: "Use the base form of the main verb after may/might. 'May' is more formal than 'might'. Both can be used for present/future possibility",
  examples: [
    "It may rain tomorrow. (possibility)",
    "May I come in? (formal permission)",
    "You might want to try this. (suggestion)",
    "She might be at home. (present possibility)"
  ],
  commonMistakes: [
    "Using 'to' after may/might",
    "Confusing may and might",
    "Using in conditional sentences incorrectly",
    "Wrong word order in questions"
  ],
  tips: [
    "Use 'may' for formal permission",
    "'Might' is slightly less certain than 'may'",
    "Both can be used with 'have' for past possibility",
    "Remember the negative forms: may not, might not"
  ],
  additionalNotes: [
    "May is more formal than might",
    "Both express possibility but not certainty",
    "Can be used interchangeably in many cases"
  ],
  arabicTranslation: "قد و ربما"
};

export const willAndWouldExplanation: GrammarExplanation = {
  whenToUse: "Used for future actions, predictions, promises (will) and past habits, hypothetical situations, polite requests (would)",
  howToUse: "Use base form after will/would. 'Will' for future predictions and promises, 'would' for past habits and conditionals",
  examples: [
    "I will help you tomorrow. (promise)",
    "Would you like some tea? (polite offer)",
    "She would always bring cookies. (past habit)",
    "I would go if I had time. (conditional)"
  ],
  commonMistakes: [
    "Using 'will' in if-clauses",
    "Confusing would and had",
    "Wrong form after would rather",
    "Mixing up sequence of tenses"
  ],
  tips: [
    "Use 'will' for spontaneous decisions",
    "'Would' for polite requests and offers",
    "Remember 'would rather' structures",
    "Notice the contracted forms: 'll, 'd"
  ],
  additionalNotes: [
    "Will shows more certainty than other modals",
    "Would is the past form of will",
    "Both used in different conditional types"
  ],
  arabicTranslation: "سوف و كان"
};

export const shallAndShouldExplanation: GrammarExplanation = {
  whenToUse: "Used for suggestions, obligations, and expectations. 'Shall' for formal suggestions/offers, 'should' for advice and duty",
  howToUse: "Use base form after shall/should. 'Shall' mainly in questions for suggestions, 'should' for recommendations and obligations",
  examples: [
    "Shall we dance? (suggestion)",
    "You should study more. (advice)",
    "I should have called. (past regret)",
    "What shall I do? (asking for suggestion)"
  ],
  commonMistakes: [
    "Confusing shall and will",
    "Using should in conditional results",
    "Wrong form after should have",
    "Misusing shall in statements"
  ],
  tips: [
    "'Shall' is formal and less common",
    "Use 'should' for giving advice",
    "'Should have' for past recommendations",
    "Remember negative forms: shouldn't, shan't"
  ],
  additionalNotes: [
    "Should is more common than shall",
    "Shall is mainly used in British English",
    "Should can express probability"
  ],
  arabicTranslation: "يجب و ينبغي"
};

export const mustAndHaveToExplanation: GrammarExplanation = {
  whenToUse: "Used for strong obligations, necessity, and logical deduction. 'Must' for personal obligation, 'have to' for external obligation",
  howToUse: "Use base form after must, 'to' after have. 'Must' doesn't change form, 'have to' changes for person/tense",
  examples: [
    "I must finish this today. (personal obligation)",
    "You have to wear a uniform. (external rule)",
    "She must be tired. (logical conclusion)",
    "We had to wait an hour. (past obligation)"
  ],
  commonMistakes: [
    "Using must in the past",
    "Wrong form after have to",
    "Confusing must not and don't have to",
    "Incorrect question formation"
  ],
  tips: [
    "Must doesn't have a past form",
    "Use 'had to' for past obligation",
    "Notice the difference in negatives",
    "Remember must for deductions"
  ],
  additionalNotes: [
    "Must shows more personal involvement",
    "Have to is more objective",
    "Different meanings in negative form"
  ],
  arabicTranslation: "يجب و يتوجب"
};

export const needAndOughtToExplanation: GrammarExplanation = {
  whenToUse: "Used for necessity, obligation, and advisability. 'Need' for necessity, 'ought to' for moral obligation or logical expectation",
  howToUse: "Need can be modal or main verb. 'Ought to' always followed by base form. Both used for advice and obligation",
  examples: [
    "Need I come early? (modal verb)",
    "You ought to see a doctor. (advice)",
    "I don't need to go. (main verb)",
    "They ought to have arrived. (past expectation)"
  ],
  commonMistakes: [
    "Forgetting 'to' after ought",
    "Confusing need and must",
    "Wrong question formation",
    "Incorrect negative forms"
  ],
  tips: [
    "Remember 'ought to' is always with 'to'",
    "Need can be used both ways",
    "Ought to is formal and less common",
    "Learn negative forms of both"
  ],
  additionalNotes: [
    "Need is more flexible than ought to",
    "Ought to is becoming less common",
    "Both used for logical expectations"
  ],
  arabicTranslation: "يحتاج و ينبغي"
};

export const passiveVsActiveVoiceExplanation: GrammarExplanation = {
  whenToUse: "Used to emphasize the action receiver rather than the doer. Active voice for direct, clear statements, passive voice when the doer is unknown or unimportant",
  howToUse: "Active: Subject + Verb + Object. Passive: Object + be + Past Participle (+ by + Subject). Use appropriate tense of 'be' verb",
  examples: [
    "Active: The cat chases the mouse.",
    "Passive: The mouse is chased by the cat.",
    "Active: They built this house in 1990.",
    "Passive: This house was built in 1990."
  ],
  commonMistakes: [
    "Forgetting to change the verb form in passive",
    "Wrong form of 'be' verb",
    "Using passive when active is clearer",
    "Omitting 'by' phrase when needed"
  ],
  tips: [
    "Ask 'who does what to whom'",
    "Use passive when actor is unknown/unimportant",
    "Keep active voice for clearer writing",
    "Remember tense changes in passive"
  ],
  additionalNotes: [
    "Passive voice makes writing more formal",
    "Common in scientific/academic writing",
    "Not all verbs can be passive"
  ],
  arabicTranslation: "المبني للمعلوم والمجهول"
};

export const reportedSpeechExplanation: GrammarExplanation = {
  whenToUse: "Used to report what someone said without quoting exactly. When relating past conversations or statements indirectly",
  howToUse: "Change pronouns, time expressions, and verb tenses appropriately. Move tenses one step back in time. Adjust demonstratives and time expressions",
  examples: [
    "Direct: 'I am happy' → Reported: He said he was happy",
    "Direct: 'I will come' → Reported: She said she would come",
    "Direct: 'Have you seen it?' → Reported: He asked if I had seen it",
    "Direct: 'Don't go!' → Reported: She told me not to go"
  ],
  commonMistakes: [
    "Forgetting to change pronouns",
    "Wrong tense backshift",
    "Incorrect reporting verb",
    "Not changing time expressions"
  ],
  tips: [
    "Remember reporting verb tenses",
    "Change time words appropriately",
    "Adjust pronouns to new viewpoint",
    "Learn common reporting verbs"
  ],
  additionalNotes: [
    "Some statements don't need backshift",
    "Use different reporting verbs for effect",
    "Modal verbs change in specific ways"
  ],
  arabicTranslation: "الكلام المنقول"
};

export const questionFormationExplanation: GrammarExplanation = {
  whenToUse: "Used to gather information, make requests, or express doubt. Different types for different information needs",
  howToUse: "Yes/No questions: Auxiliary + Subject + Main Verb. Wh-questions: Question Word + Auxiliary + Subject + Main Verb",
  examples: [
    "Do you like coffee? (yes/no)",
    "Where do you live? (wh-question)",
    "Have you finished? (present perfect)",
    "What time does the train leave? (present simple)"
  ],
  commonMistakes: [
    "Missing auxiliary verbs",
    "Wrong word order",
    "Incorrect question word",
    "Not using do/does/did support"
  ],
  tips: [
    "Remember QUASM word order",
    "Use correct auxiliary for tense",
    "Choose appropriate question word",
    "Check subject-verb agreement"
  ],
  additionalNotes: [
    "Different types for different purposes",
    "Intonation affects meaning",
    "Tag questions follow specific patterns"
  ],
  arabicTranslation: "تكوين الأسئلة"
};

export const negativeStatementsExplanation: GrammarExplanation = {
  whenToUse: "Used to express the opposite of affirmative statements. To deny, refuse, or show absence of something",
  howToUse: "Add 'not' after auxiliary verb. Use don't/doesn't/didn't with main verbs. Use never, no, none, etc. for other negatives",
  examples: [
    "I do not like coffee.",
    "She isn't coming to the party.",
    "They have never been there.",
    "There is no milk left."
  ],
  commonMistakes: [
    "Double negatives",
    "Wrong auxiliary verb",
    "Incorrect word order",
    "Using ain't"
  ],
  tips: [
    "Avoid double negatives",
    "Use appropriate auxiliary",
    "Learn negative adverbs",
    "Remember contracted forms"
  ],
  additionalNotes: [
    "Different tenses need different structures",
    "Some words are inherently negative",
    "Formal vs informal negatives"
  ],
  arabicTranslation: "النفي"
};

export const imperativeSentencesExplanation: GrammarExplanation = {
  whenToUse: "Used to give commands, make requests, give instructions, or offer advice. For direct communication of desired actions",
  howToUse: "Start with base verb form. Add 'please' for politeness. Use 'don't' for negative commands. Can add 'do' for emphasis",
  examples: [
    "Close the door.",
    "Please be quiet.",
    "Don't touch that!",
    "Do be careful."
  ],
  commonMistakes: [
    "Adding subject unnecessarily",
    "Wrong verb form",
    "Forgetting please in requests",
    "Incorrect negative form"
  ],
  tips: [
    "Be direct but polite",
    "Use base form of verb",
    "Add please when appropriate",
    "Consider context for tone"
  ],
  additionalNotes: [
    "Can show varying degrees of force",
    "Used in many everyday situations",
    "Different forms for different purposes"
  ],
  arabicTranslation: "الجمل الأمرية"
};

export const presentSimpleExplanation: GrammarExplanation = {
  whenToUse: "Used for habits, repeated actions, permanent situations, general truths, and timetabled events",
  howToUse: "Subject + base form of verb (add -s/-es for third person singular). Use do/does for questions and negatives",
  examples: [
    "I work in London. (permanent situation)",
    "The sun rises in the east. (general truth)",
    "She plays tennis every weekend. (habit)",
    "The train leaves at 6 PM. (timetabled event)"
  ],
  commonMistakes: [
    "Forgetting -s/-es in third person singular",
    "Using it for temporary actions",
    "Wrong auxiliary verb in questions",
    "Double negatives"
  ],
  tips: [
    "Use time expressions like always, never, usually, often",
    "Remember third person singular rules",
    "Use do/does for questions and negatives",
    "Think of regular, repeated actions"
  ],
  additionalNotes: [
    "Different from Present Continuous",
    "Used for factual statements",
    "Can express future with timetables"
  ],
  arabicTranslation: "المضارع البسيط"
};

export const presentContinuousExplanation: GrammarExplanation = {
  whenToUse: "Used for actions happening now, temporary situations, planned future arrangements, and changing situations",
  howToUse: "Subject + am/is/are + present participle (-ing form). Use contracted forms in informal speech",
  examples: [
    "I am studying right now. (current action)",
    "She is living with her parents temporarily. (temporary situation)",
    "They are moving house next week. (future arrangement)",
    "The climate is getting warmer. (changing situation)"
  ],
  commonMistakes: [
    "Using it with stative verbs",
    "Wrong form of be verb",
    "Forgetting -ing",
    "Using it for habits"
  ],
  tips: [
    "Use time expressions like now, at the moment",
    "Check if the verb can be continuous",
    "Remember stative verbs exceptions",
    "Think of temporary or ongoing actions"
  ],
  additionalNotes: [
    "Not used with stative verbs",
    "Can express future arrangements",
    "Shows temporary nature of actions"
  ],
  arabicTranslation: "المضارع المستمر"
};

export const presentPerfectExplanation: GrammarExplanation = {
  whenToUse: "Used for past actions with present results, experiences up to now, unfinished time periods, and recent events",
  howToUse: "Subject + have/has + past participle. Use time expressions like just, already, yet, ever, never, since, for",
  examples: [
    "I have finished my homework. (completed action with present result)",
    "She has lived here for ten years. (unfinished time period)",
    "Have you ever visited Paris? (life experience)",
    "They have just arrived. (recent event)"
  ],
  commonMistakes: [
    "Confusing with Past Simple",
    "Wrong auxiliary verb",
    "Using wrong time expressions",
    "Incorrect past participle forms"
  ],
  tips: [
    "Think about connection to present",
    "Learn irregular past participles",
    "Use appropriate time expressions",
    "Focus on result or experience"
  ],
  additionalNotes: [
    "Connects past to present",
    "Different from Past Simple",
    "Often used with unfinished time"
  ],
  arabicTranslation: "المضارع التام"
};

export const presentPerfectContinuousExplanation: GrammarExplanation = {
  whenToUse: "Used for actions that started in the past and continue to now, emphasizing duration and temporary nature",
  howToUse: "Subject + have/has been + present participle (-ing). Often used with for/since",
  examples: [
    "I have been working here for six months. (ongoing action)",
    "She has been studying English since 2020. (duration)",
    "They have been waiting for an hour. (temporary situation)",
    "How long have you been learning piano? (duration question)"
  ],
  commonMistakes: [
    "Confusing with Present Perfect",
    "Wrong auxiliary verbs",
    "Using with stative verbs",
    "Wrong time expressions"
  ],
  tips: [
    "Focus on duration of action",
    "Use with for/since",
    "Think about temporary nature",
    "Consider visible results"
  ],
  additionalNotes: [
    "Emphasizes duration of action",
    "Shows temporary nature",
    "Often implies visible results"
  ],
  arabicTranslation: "المضارع التام المستمر"
};

export const pastSimpleExplanation: GrammarExplanation = {
  whenToUse: "Used for completed actions in the past, series of completed actions, and past habits or states",
  howToUse: "Subject + past form of verb (-ed for regular verbs). Use did for questions and negatives",
  examples: [
    "I worked yesterday. (completed action)",
    "She went to school, studied, and came home. (series of actions)",
    "We lived in Paris for five years. (past state)",
    "Did you visit Rome last summer? (question)"
  ],
  commonMistakes: [
    "Wrong irregular verb forms",
    "Using present perfect instead",
    "Double past marking",
    "Wrong question formation"
  ],
  tips: [
    "Learn irregular verbs",
    "Use time expressions like yesterday, last week",
    "Remember questions need 'did'",
    "Think of finished actions"
  ],
  additionalNotes: [
    "Most common past tense",
    "Used for definite past time",
    "Clear time reference needed"
  ],
  arabicTranslation: "الماضي البسيط"
};

export const pastContinuousExplanation: GrammarExplanation = {
  whenToUse: "Used for actions in progress at a specific time in the past, and background actions interrupted by other events",
  howToUse: "Subject + was/were + present participle (-ing). Often used with while/when",
  examples: [
    "I was sleeping when you called. (interrupted action)",
    "They were playing tennis at 3 PM. (action in progress)",
    "What were you doing last night? (past action in progress)",
    "While she was cooking, the phone rang. (interrupted action)"
  ],
  commonMistakes: [
    "Wrong form of be verb",
    "Confusing with Past Simple",
    "Using with stative verbs",
    "Wrong time references"
  ],
  tips: [
    "Use for background actions",
    "Think of actions in progress",
    "Remember was/were rules",
    "Use with while/when"
  ],
  additionalNotes: [
    "Shows duration in past",
    "Often used with interruptions",
    "Creates background scene"
  ],
  arabicTranslation: "الماضي المستمر"
};

export const pastPerfectExplanation: GrammarExplanation = {
  whenToUse: "Used for actions completed before another past action or time, expressing the 'past of the past'",
  howToUse: "Subject + had + past participle. Often used in reported speech and third conditional",
  examples: [
    "I had finished work before she called. (earlier past action)",
    "They had never seen snow before moving to Canada. (experience before past)",
    "After he had eaten, he went to bed. (sequence of events)",
    "She wished she had studied harder. (past regret)"
  ],
  commonMistakes: [
    "Confusing with Past Simple",
    "Unnecessary use when order is clear",
    "Wrong past participle forms",
    "Missing time reference"
  ],
  tips: [
    "Think of earlier past actions",
    "Use for reported speech backshift",
    "Remember sequence of events",
    "Use with before/after/by the time"
  ],
  additionalNotes: [
    "Shows earlier past actions",
    "Important for complex narratives",
    "Used in third conditionals"
  ],
  arabicTranslation: "الماضي التام"
};

export const pastPerfectContinuousExplanation: GrammarExplanation = {
  whenToUse: "Used for actions that continued up to a specific time in the past, emphasizing duration and cause of past result",
  howToUse: "Subject + had been + present participle (-ing). Often used with for/since before past time",
  examples: [
    "I had been working for six hours when she called. (duration before past)",
    "They had been living there for years before they moved. (long action up to past)",
    "She was tired because she had been running. (cause of past state)",
    "How long had you been waiting when I arrived? (duration question)"
  ],
  commonMistakes: [
    "Confusing with Past Perfect",
    "Wrong auxiliary verbs",
    "Using with stative verbs",
    "Unclear time references"
  ],
  tips: [
    "Focus on duration before past",
    "Think about cause and effect",
    "Use for/since appropriately",
    "Consider visible past results"
  ],
  additionalNotes: [
    "Emphasizes duration in past",
    "Shows cause of past result",
    "Less common than Past Perfect"
  ],
  arabicTranslation: "الماضي التام المستمر"
};

export const futureSimpleExplanation: GrammarExplanation = {
  whenToUse: "Used for predictions, spontaneous decisions, promises, threats, and offers",
  howToUse: "Subject + will/shall + base form of verb. 'Going to' for planned future or evident predictions",
  examples: [
    "I will help you with that. (spontaneous decision)",
    "It's going to rain. (prediction based on evidence)",
    "The meeting will start at 9 AM. (future fact)",
    "I'll never speak to him again! (promise/threat)"
  ],
  commonMistakes: [
    "Using will in time clauses",
    "Confusing will and going to",
    "Wrong form after will",
    "Unnecessary future in both clauses"
  ],
  tips: [
    "Use will for spontaneous decisions",
    "Going to for plans/likely events",
    "Remember time clause rules",
    "Consider level of certainty"
  ],
  additionalNotes: [
    "Multiple ways to express future",
    "Choice depends on situation",
    "Shows different levels of certainty"
  ],
  arabicTranslation: "المستقبل البسيط"
};

export const futureContinuousExplanation: GrammarExplanation = {
  whenToUse: "Used for actions in progress at a specific time in the future, or for predicted or planned future activities",
  howToUse: "Subject + will be + present participle (-ing). Often used with time expressions",
  examples: [
    "This time tomorrow, I will be flying to Paris. (future action in progress)",
    "She will be working late tonight. (planned future)",
    "Will you be using the car later? (future arrangement)",
    "They will be studying when you arrive. (predicted future state)"
  ],
  commonMistakes: [
    "Wrong form after will be",
    "Using with stative verbs",
    "Confusing with Simple Future",
    "Unclear time reference"
  ],
  tips: [
    "Think of actions in progress",
    "Use specific future times",
    "Consider duration aspect",
    "Remember continuous verb rules"
  ],
  additionalNotes: [
    "Shows future progression",
    "Less definite than Simple Future",
    "Often used for polite questions"
  ],
  arabicTranslation: "المستقبل المستمر"
};

export const futurePerfectExplanation: GrammarExplanation = {
  whenToUse: "Used for actions that will be completed before a specific time in the future",
  howToUse: "Subject + will have + past participle. Often used with by/before + future time",
  examples: [
    "I will have finished the report by tomorrow. (completion before future time)",
    "By 2025, she will have graduated. (future completion point)",
    "They will have moved house before Christmas. (action before future event)",
    "How long will you have worked here by then? (duration up to future)"
  ],
  commonMistakes: [
    "Wrong form after will have",
    "Unclear time reference",
    "Confusing with Future Simple",
    "Unnecessary complexity"
  ],
  tips: [
    "Use clear future time markers",
    "Think of completed future actions",
    "Remember by/before usage",
    "Consider completion point"
  ],
  additionalNotes: [
    "Shows future completion",
    "Needs specific future reference",
    "Often used in formal contexts"
  ],
  arabicTranslation: "المستقبل التام"
};

export const futurePerfectContinuousExplanation: GrammarExplanation = {
  whenToUse: "Used for actions that will continue up to a specific point in the future, emphasizing duration",
  howToUse: "Subject + will have been + present participle (-ing). Used with for/by + future time",
  examples: [
    "By next month, I will have been working here for ten years. (duration up to future)",
    "She will have been teaching for 20 years by 2025. (future duration)",
    "They will have been traveling for six months when they return. (duration of future action)",
    "How long will you have been studying when you graduate? (duration question)"
  ],
  commonMistakes: [
    "Complex structure errors",
    "Wrong time expressions",
    "Using with stative verbs",
    "Unnecessary complexity"
  ],
  tips: [
    "Focus on duration up to future",
    "Use clear time references",
    "Consider progressive aspect",
    "Use for/by appropriately"
  ],
  additionalNotes: [
    "Emphasizes future duration",
    "Least common future tense",
    "Mostly used in formal contexts"
  ],
  arabicTranslation: "المستقبل التام المستمر"
};