# English Learning Hub

A comprehensive web application for learning English grammar, vocabulary, reading, and listening skills.

## Application Structure

### Main Sections
1. Grammar
2. Vocabulary
3. Reading
4. Listening

### Detailed Grammar Section Structure

#### 1. Parts of Speech
- Nouns
- Pronouns
- Articles
- Adjectives
- Adverbs
- Prepositions
- Conjunctions

#### 2. Sentence Basics
- Subject
- Subject and Verb Agreement
- Direct Object
- Word Order
- Punctuation
- Capitalization
- Intransitive Verbs
- Linking Verbs
- Indirect Objects
- Types of Sentences
- Prepositional Phrase

#### 3. Clauses and Phrases
- Independent Clauses
- Dependent Clauses
- Adjective Clauses
- Adverbial Clauses
- Noun Clauses
- Relative Clauses
- Gerund Phrases
- Participle Phrases
- Verbals

#### 4. Voice and Structure
- Passive vs Active Voice
- Reported Speech
- Question Formation
- Negative Statements
- Imperative Sentences

#### 5. Modal Verbs
- Can and Could
- May and Might
- Will and Would
- Shall and Should
- Must and Have to
- Need and Ought to

#### 6. Tenses
- Present Simple
- Present Continuous
- Present Perfect
- Present Perfect Continuous
- Past Simple
- Past Continuous
- Past Perfect
- Past Perfect Continuous
- Future Simple
- Going to Future
- Future Continuous
- Future Perfect
- Future Perfect Continuous

#### 7. Comparisons & Quantifiers
- Superlatives
- Quantifiers
- Tag Questions
- Determiners

#### 8. Phrasal Verbs & Idioms
- Common Phrasal Verbs
- Essential Idioms
- Common Expressions

#### 9. Conditionals
- Zero Conditional
- First Conditional
- Second Conditional
- Third Conditional
- Mixed Conditionals

### Vocabulary Section
- Phrasal Verbs
- Academic Words
- Weather Terms
- Educational Terms

### Reading & Listening Sections
Both sections include three proficiency levels:
- Beginner
- Intermediate
- Advanced

## Technical Stack
- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide Icons

## Design Patterns & Architecture

### 1. Component-Based Architecture
- Follows React's component-based architecture
- Components are modular and reusable
- Each component has a single responsibility

### 2. Container/Presentational Pattern
- Container components (e.g., SectionPage, GrammarCategoryPage) handle logic and data
- Presentational components (e.g., CategoryCard, FlashCard) focus on UI rendering
- Clear separation between business logic and presentation

### 3. Context Pattern
- Uses React Context (ThemeContext) for global state management
- Manages theme preferences across the application
- Avoids prop drilling for shared state

### 4. Route-Based Code Organization
- Routes define the application structure
- Each major feature has its dedicated route
- Nested routing for hierarchical content (e.g., grammar categories and subcategories)

### 5. Type-Guard Pattern
- Uses TypeScript type guards (isGrammarCategory) for type safety
- Ensures proper type checking at runtime
- Improves code reliability and maintainability

### 6. Composition Pattern
- Components are composed of smaller, focused components
- Favors composition over inheritance
- Enables flexible component reuse

### 7. Hooks Pattern
- Uses React hooks (useState, useNavigate, useParams)
- Custom hooks for shared logic (useTheme)
- Functional component-based approach

### 8. Data Flow Pattern
- Unidirectional data flow
- Props down, events up
- Predictable state management

## Features
- Dark/Light mode toggle
- Responsive design
- Interactive navigation
- Category-based learning structure
- Progress tracking (coming soon)
- Interactive exercises (coming soon)

## File Structure
```
src/
├── components/
│   ├── CategoryCard.tsx
│   ├── FlashCard.tsx
│   └── VocabSection.tsx
├── context/
│   └── ThemeContext.tsx
├── data/
│   └── vocabCategories.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Navigation Structure
- Home (`/`)
- Grammar Section (`/grammar`)
  - Category Pages (`/grammar/:categoryTitle`)
  - Subcategory Pages (`/grammar/:categoryTitle/:subCategoryTitle`)
- Vocabulary Section (`/vocabulary`)
  - Category Pages (`/vocabulary/:categoryName`)
- Reading Section (`/reading`)
  - Level Pages (`/reading/:level`)
- Listening Section (`/listening`)
  - Level Pages (`/listening/:level`)

## Component Hierarchy
```
App
├── Header (with theme toggle)
└── Main Content
    ├── HomePage
    ├── SectionPage
    ├── GrammarCategoryPage
    ├── GrammarSubCategoryPage
    ├── VocabCategoryPage
    ├── ReadingLevelPage
    └── ListeningLevelPage
```

## Future Enhancements
- User authentication and profiles
- Progress tracking
- Interactive exercises
- Quiz system
- Achievement badges
- Social learning features
- Content management system
- Mobile app version

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Contributing
Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details. 