# 🍽️ Recipe App

A responsive React application that lets you search for recipes and explore detailed meal information — powered by the [TheMealDB](https://www.themealdb.com/) public API.

---

## ✨ Features

- 🔍 **Search Recipes** — Search meals by name using the live MealDB API
- 🃏 **Meal Cards** — Browse search results displayed as visual cards with images
- 📄 **Recipe Detail Page** — View full meal info including category, area, ingredients, and step-by-step instructions
- 🔗 **Dynamic Routing** — Each meal has its own URL (`/:mealid`) for direct linking
- ⚠️ **Input Validation** — Prompts the user if the search bar is submitted empty

---

## 🛠️ Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Frontend   | React.js (CRA)           |
| Routing    | React Router DOM v6      |
| Styling    | Plain CSS                |
| State Mgmt | React Hooks (useState, useEffect) |
| Data Source | TheMealDB Public API    |

---

## 📁 Project Structure

```
recipe-app/
├── public/
│   └── index.html
├── src/
│   ├── Component/
│   │   ├── Mainpage.js       # Home page with search bar
│   │   ├── Mealcards.js      # Grid of recipe cards
│   │   └── mealinfo.js       # Full recipe detail page
│   ├── App.js                # Route definitions
│   ├── App.css
│   ├── index.js              # Entry point with BrowserRouter
│   └── index.css             # Global styles
├── package.json
└── README.md
```

---

## 🌐 API Used

This app uses the free **[TheMealDB API](https://www.themealdb.com/api.php)**:

| Endpoint | Usage |
|----------|-------|
| `search.php?s={name}` | Search meals by name |
| `lookup.php?i={id}` | Fetch full details of a meal by ID |

No API key is required.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shishir-ssr01/recipe-app.git
   cd recipe-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will run at `http://localhost:3000`.

---

## 🧭 App Flow

```
Home (/)
 └── Search bar → calls TheMealDB API
      └── Results displayed as Meal Cards
           └── "View Recipe" button → navigates to /:mealid
                └── Meal Detail Page shows image, category, area,
                    ingredients list, and full instructions
```

---

## 🧪 Available Scripts

| Command         | Description                       |
|-----------------|-----------------------------------|
| `npm start`     | Runs the app in development mode  |
| `npm run build` | Builds the app for production     |
| `npm test`      | Launches the test runner          |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Shishir** — [@Shishir-ssr01](https://github.com/Shishir-ssr01)

---

> ⭐ If you found this project helpful, please consider giving it a star on GitHub!
