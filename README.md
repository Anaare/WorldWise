# WorldWise 🗺️

A dynamic travel journal web app that lets users pin places they've visited on an interactive map, leave notes, and view geolocation-based data. Built with Vite and React, it features fake authentication, routing, and geolocation with Leaflet maps.

🔗 **Live Demo on Vercel**  
[🔗 Live Demo on Vercel](https://world-wise-chi-mauve.vercel.app/)  
📂 [GitHub Repository](https://github.com/Anaare/WorldWise.git)

---

## ✨ Features

✅ **Authentication**

- Fake login system using hardcoded credentials
- User context persists login state
- Protected routes with conditional access

🗺️ **Map with Geolocation**

- Integrated Leaflet.js for interactive map UI
- Automatically centers map based on user's location
- Custom pins and markers for user-added locations

📍 **Location Management**

- Add a city, visit date, and notes to pinned locations
- Clickable map to set new markers
- Locations saved in local state (no backend)

🧭 **Routing**

- Built with React Router
- Includes protected routes and nested views

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Maps**: Leaflet.js
- **State Management**: React Context API
- **Routing**: React Router
- **Linting**: ESLint
- **Deployment**: Netlify

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Anaare/WorldWise.git
cd WorldWise
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## 🌍 Usage

- Log in using fake credentials
- Allow browser access to your location
- Click on the map to pin a city
- Add a visit date and notes
- View all pinned locations and edit notes
