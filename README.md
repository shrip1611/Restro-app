# Restro-app

## Description
A modern, fully responsive restaurant web application built with React and Vite. Browse through a curated menu of vegetarian and non-vegetarian dishes with an intuitive filtering system and beautiful UI powered by Tailwind CSS.

## Features
- 🍽️ Dynamic menu display with reusable card components
- 🔍 Filter dishes by Veg/Non-Veg categories
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite build tool
- 🎨 Modern styling with Tailwind CSS
- 📦 Clean and organized folder structure
- 🔄 React Hooks for state management

## Tech Stack
- **Frontend Framework:** React 18+ (Functional Components)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Data:** Local JSON file
- **Data:** JSONPlaceholder (POST request) 
- **Language:** JavaScript/JSX

## Folder Structure
```
restro-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Menu.jsx
│   │   └── FoodCard.jsx
│   ├── services/
│   │   └── events.json
│   ├── App.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Installation & Setup
1. Clone the repository
    ```bash
    git clone <https://github.com/shrip1611/Restro-app>
    cd Restro-app
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Start the development server
    ```bash
    npm run dev
    ```
4. Build for production
    ```bash
    npm run build
    ```

## How It Works
- The app loads menu items from `services/events.json`
- Menu items are displayed as reusable `MenuCard` components
- Click filter buttons to toggle between Veg and Non-Veg items
- Responsive grid layout adapts to different screen sizes using Tailwind utilities

## Future Enhancements
- 🛒 Shopping cart functionality
- 💳 Payment integration
- 🔐 User authentication
- ⭐ Customer reviews and ratings

## Author
Created by Shriram Pandav.

## License
MIT License - Feel free to use this project for learning and development purposes.
