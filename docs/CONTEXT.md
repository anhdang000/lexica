# Lexica – Mobile Dictionary & Vocabulary Learning App

Lexica is a next-generation mobile dictionary app designed not only to provide comprehensive multi-language dictionary lookup but also to help users build and retain vocabulary through personalized note cards, a spaced repetition system, and topic-based organization. The following document details the app’s flow, core features, and additional functionalities to deliver an engaging and highly personalized learning experience.

---
## Tech Stack:
- Frontend: React Native with TypeScript, Expo, and Expo Router
- Backend/Database: Supabase
- UI Framework: React Native Paper
- AI Processing: Gemini

---

## 1. Core Features

### 1.1. Dictionary Lookup
- **Multi-Language Support:** Lookup words in various languages with detailed definitions, synonyms, antonyms, etymology, and usage examples.
- **Audio Pronunciation:** Native speaker audio for each word.
- **Advanced Search:** Includes voice search and filtering by language or region.

### 1.2. Personalized Vocabulary Note Cards
- **Custom Flashcards:** 
  - Word/phrase, definition, example sentences.
  - Audio pronunciation and visual aids (images or icons).
  - Custom tags (e.g., “Business”, “Travel”).
- **User Annotations:** Add personal notes to each card.
- **Difficulty Rating & Review History:** Rate difficulty and record the last review date.

### 1.3. Spaced Repetition Learning System
- **Adaptive Review Scheduler:** Uses spaced repetition algorithms to schedule reviews based on user performance.
- **Customizable Review Intervals:** Adjust settings for review frequency.
- **Push Notifications:** Reminders to review vocabulary at optimal times.

### 1.4. Topic-Based Organization
- **Color-Coded Categories:** Visually distinct topics such as Business, Academic, Travel, etc.
- **Filtering & Sorting:** Filter cards by topics, tags, or difficulty and sort by date, alphabetical order, or frequency.
- **Card Preview Thumbnails:** Quick look at flashcard content in the library.

---

## 2. Detailed User Flow

### 2.1. Login/Authentication Screen
- **Options:**
  - Email/password login.
  - Social media integration (Google, Facebook, Apple).
  - New user sign-up.
- **Additional Enhancements:**
  - Password recovery and multi-factor authentication.
  - “Remember me” option for convenience.

### 2.2. Onboarding Screens
- **User Introduction:**
  - Input user name/nickname.
  - Select learning purpose (IELTS, TOEIC, Professional, General).
- **Interest & Topic Selection:**
  - Choose topics of interest (Business, Academic, Travel, etc.).
  - Option to select multiple topics and set priorities.
- **Target Language Selection:**
  - Select primary and additional target languages.
- **Tutorial & Notifications Setup:**
  - Brief interactive guide/video to showcase core features.
  - Prompt to configure notification preferences (e.g., review reminders).

### 2.3. Home Screen Design
- **Prominent Search Bar:**
  - Integrated language selector for dictionary lookup.
- **Quick Access Widgets:**
  - **Recent Searches:** Easily revisit previous lookups.
  - **Word of the Day:** Highlight a new word daily.
  - **Study Progress Dashboard:** Visual display of review streaks, upcoming reviews, and overall progress.
- **Extra Features:**
  - Motivational tips and language trivia.
  - Calendar view for scheduling study sessions.

### 2.4. Library Screen
- **Organization:**
  - Topic-based grouping with color-coded tags.
  - Grid or list view of flashcards.
- **Filtering & Sorting:**
  - Filter by topic, custom tags, and difficulty.
  - Sort by date added, alphabetical order, or frequency of review.
- **Enhanced Functionality:**
  - Bookmark favorite cards.
  - Batch actions (e.g., edit, delete multiple cards).

### 2.5. Note Card Detail Screen
- **Display Elements:**
  - Word/phrase, definition, and example sentences.
  - Audio playback for pronunciation.
  - Custom tags and user-added notes.
  - Visual indicators for difficulty rating and review dates.
- **User Interactions:**
  - Edit, share, or mark as reviewed.
  - Option to add images or multimedia.
- **Additional Options:**
  - “Flag” difficult words for extra review.
  - Share individual cards via social media or export as PDF.

---

## 3. Notifications & Reminders
- **Daily Review Alerts:** Push notifications reminding users to review vocabulary.
- **Custom Scheduling:** Let users set custom reminder times.
- **Streak & Milestone Alerts:** Celebrate learning milestones with badges and rewards.

---

## 4. Design Requirements

- **Modern & Clean Interface:** Minimalistic design with ample whitespace.
- **Intuitive Navigation:** Easy-to-access menus and clear icons.
- **Responsive Design:** Optimized for smartphones, tablets, and various screen sizes.
- **Dark/Light Mode Support:** Toggle for user preference.
- **Color-Coded Topic Categories:** Distinct colors for quick visual identification.
- **Accessibility Features:** High contrast, text scaling, and voice-over integration.

---

## 5. Screen Mockups & User Interaction Flow (Descriptions)

### 5.1. Login/Authentication Screen
- **Mockup Description:**
  - Clean, uncluttered login form with email/password fields.
  - Social media login buttons prominently displayed.
  - “Sign Up” link for new users and a “Forgot Password?” link.
- **User Interaction Flow:**
  - User selects login method → Enters credentials → Proceeds to onboarding or home screen.

### 5.2. Onboarding Screens
- **Mockup Description:**
  - Series of screens with progress indicators.
  - Interactive selections for name, learning purpose, topics, and target language.
  - Notification setup prompt with toggle switches.
- **User Interaction Flow:**
  - User inputs data → Selects interests/topics → Configures notifications → Completes onboarding and lands on the Home Screen.

### 5.3. Home Screen
- **Mockup Description:**
  - Central search bar with language selector.
  - Widgets for “Word of the Day,” “Recent Searches,” and a progress dashboard.
  - Bottom navigation bar for Home, Library, Progress, and Settings.
- **User Interaction Flow:**
  - User can immediately search for a word, check progress, or navigate to other sections.

### 5.4. Library Screen
- **Mockup Description:**
  - Grid view of flashcards with preview thumbnails.
  - Collapsible filter and sort menus.
  - Floating action button (FAB) for adding new cards.
- **User Interaction Flow:**
  - User applies filters/sorts → Browses flashcards → Taps a card for details.

### 5.5. Note Card Detail Screen
- **Mockup Description:**
  - Detailed view of the vocabulary card.
  - Editable fields for word, definition, examples, and tags.
  - Buttons for editing, sharing, and marking reviews.
- **User Interaction Flow:**
  - User taps a card → Views details → Edits/shares/marks as reviewed → Returns to Library.

---

## 6. Conclusion

Lexica is designed to merge the functionalities of a multi-language dictionary with advanced, personalized vocabulary learning tools. By integrating traditional lookup features with modern spaced repetition, contextual organization, and enhanced interactivity (including notifications, gamification, and social elements), Lexica stands out as a comprehensive tool for learners at all levels. This detailed flow and feature set provides a robust blueprint for development, ensuring a user-friendly, engaging, and effective learning experience.

*Prepared by: Aryan*  
*Date: March 2025*