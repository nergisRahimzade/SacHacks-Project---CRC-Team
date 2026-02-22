# The Pantry Recipe Website
 
The Pantry Recipe Website is a responsive and easy-to-use website for people who wants to search recipes or for people who have ingredients but don't know what to cook.

This project was build for a 24-hour hackathon.

---

## Features

- Search recipes
- Filter recipes by choosing ingredients
- Look through instructions of the recipes
- Bubble notification popup when 3 or more ingredients are chosen to show options based on how many of the chosen ingredients the recipe contains

---

## Tech Stack

- React
- TypeScript
- CSS
- Google API

---

## Architecture / How It Works

- The project is component-based
- The project also uses React hooks useState, useEffect, useMemo for state management and rendering purposes
- State flows from parent to child components
- The project also uses Google API to fetch data from a Google Sheet
- The project uses MUI as a Reacct UI component library
- This project was created with Vite as a frontend build tool and development server

---

## Installation

1. Clone the repository:
   
    ```bash
    git clone https://github.com/nergisRahimzade/SacHacks-Project---CRC-Team
    ```
2. Install dependencies:
   
   ```bash
    npm install
    ```

3. Start development server:

  ```bash
  npm run dev
  ```

---

## Challenges & Lessons Learned

- Integration of Google Sheet data using Google API
- Using integrated data to render components
- Integrating filtering logic
- Creating a highly-responsive UI for search and filtering operations

---

## Future Improvements

- Add backend to the project
- Have a search history of recipes
- Have a wider database 
- Filter recipes according to categories like cuisine, dietary preferances
- Have a recommendation system according to past searched recipes

---

## Author

Nergiz Rahimzade
Computer Science Student @ Cosumnes River College
Github: https://github.com/nergisRahimzade