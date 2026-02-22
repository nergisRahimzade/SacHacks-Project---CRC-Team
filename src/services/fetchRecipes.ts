import type { Recipe } from "../types/Recipe";
import ingredientsList from '../types/constants/plainIngredients.json';

const API_KEY = "AIzaSyAIDfJdRwv0UMOczMrYMVozIxBem9WJbfQ";
const SHEET_ID = "19xtNUbzzMTRQnVfbuq4GbHeQdDugi8Yip3LGkncHqkg";
const RANGE = "Sheet1!A1:E29";

export async function fetchRecipes() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}/?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  const [_headers, ...rows] = data.values;
  const recipesData: Recipe[] = rows.map((recipe: string[], i: number) => ({
    id: crypto.randomUUID(),
    name: recipe[0].trim(),
    ingredients: recipe[1].split('\n').map((i) => i.trim()).filter(Boolean) ?? [],
    ingredientsAtThePantry: recipe[2].split('\n').map((i) => i.trim()).filter(Boolean) ?? [],
    preparation: recipe[3].split('\n').map((i) => i.trim()).filter(Boolean) ?? [],
    ingredientNames: ingredientsList.ingredientsName[i] ?? []
  }));

  const allIngredientNames = [...new Set(recipesData.flatMap((recipe) => recipe.ingredientNames))].sort();

  console.log(recipesData);

  return { recipesData, allIngredientNames };
}