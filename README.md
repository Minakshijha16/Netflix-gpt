# 🎬 Netflix GPT

A Netflix-inspired movie browsing app powered by **Google Gemini AI** for smart movie recommendations, built with React, Redux Toolkit, Tailwind CSS, Firebase, and TMDB API.

## 🌐 Live Demo

**[https://netflix-gpt-2309a.web.app](https://netflix-gpt-2309a.web.app)**

---

## ✨ Features

### 🔐 Authentication
- Sign In / Sign Up with email & password
- Firebase Authentication (with session persistence)
- Auto-redirect: unauthenticated users → Login, authenticated users → Browse
- Auth state listener unsubscribes on component unmount

### 🎥 Browse Page
- **Hero Banner** — Auto-playing muted YouTube trailer of the featured movie
- **Movie Categories** — Now Playing, Popular, Top Rated, Upcoming
- Smooth horizontal scrolling movie rows with mouse-edge scroll
- Movie cards with hover scale animation

### 🤖 GPT / AI Search
- **Google Gemini AI** powered movie recommendation engine
- Type any query (mood, genre, actor, era) → Gemini suggests 5 movies
- Each suggestion is searched in TMDB and displayed as a movie row
- **Multilingual support** — English, Hindi, Spanish, Maithili, Bangla
- Beautiful animated galaxy background (WebGL shader)
- Loading state & error handling on search

### 🌍 Multi-language UI
- Language switcher in the header (visible in GPT Search mode)
- Search placeholder and button text adapt to selected language

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, JSX |
| Styling | Tailwind CSS v4 |
| State Management | Redux Toolkit, React-Redux |
| Routing | React Router DOM v7 |
| Auth & Hosting | Firebase (Auth + Hosting) |
| AI | Google Gemini 1.5 Flash |
| Movie Data | TMDB API |
| Animation | OGL (WebGL Galaxy shader) |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Minakshijha16/Netflix-gpt.git
cd Netflix-gpt
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root:
```env
VITE_GEMINI_KEY=your_google_gemini_api_key_here
```
> Get a free Gemini API key at: https://aistudio.google.com/apikey

### 4. Run locally
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── Login.jsx               # Sign In / Sign Up page
│   ├── Browse.jsx              # Main browse page
│   ├── Header.jsx              # Navbar with GPT toggle + language select
│   ├── Body.jsx                # Router setup
│   ├── MainContainer.jsx       # Hero trailer section
│   ├── BackgroundVideo.jsx     # YouTube iframe trailer
│   ├── VideoTitle.jsx          # Movie title + Play/Info buttons
│   ├── SecondaryContainer.jsx  # All movie category rows
│   ├── MovieList.jsx           # Horizontal scrollable movie row
│   ├── MovieCards.jsx          # Individual movie card
│   ├── GptSearch.jsx           # GPT Search page with galaxy background
│   ├── GptSearchBar.jsx        # AI search bar with Gemini integration
│   ├── GptMovieSuggestion.jsx  # Renders AI-recommended movie lists
│   └── Galaxy.jsx              # WebGL animated star background
├── hooks/
│   ├── useNowPlayingMovies.jsx
│   ├── usePopularMovies.jsx
│   ├── useTopRatedMovies.jsx
│   ├── useUpcomingMovies.jsx
│   └── useTrailerVideo.jsx
└── utils/
    ├── appStore.jsx            # Redux store
    ├── moviesSlice.jsx         # Movies state
    ├── userSlice.jsx           # User auth state
    ├── gptSlice.jsx            # GPT search results state
    ├── configSlice.jsx         # Language config state
    ├── firebase.jsx            # Firebase initialization
    ├── gemini.jsx              # Google Gemini AI client
    ├── constants.jsx           # API keys, CDN URLs, supported languages
    ├── languageConstants.jsx   # Multi-language strings
    └── Validate.jsx            # Form validation
```

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_GEMINI_KEY` | Google Gemini API key for AI movie recommendations |

> The TMDB token and Firebase config are embedded in the project for demo purposes.

---

## 📦 Deployment

Deployed on **Firebase Hosting**:
```bash
npm run build
npx firebase-tools deploy --only hosting
```

---

## 🙏 Credits

- Built with reference from [Namaste React](https://github.com/akshaymarch7/netflix-gpt) by Akshay Saini
- Movie data from [TMDB API](https://www.themoviedb.org/)
- AI powered by [Google Gemini](https://ai.google.dev/)