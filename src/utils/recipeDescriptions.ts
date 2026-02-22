export const recipeDescriptions: Record<string, string> = {
  "Pasta Cobb Salad": "Crispy bacon and greens with tender elbow pasta",
  "Pasta Salad with Tomato Basil Sauce and Cheese": "Elbows tossed in tomato basil sauce with parmesan",
  "Esquite": "Mexican street corn salad with cotija and lime",
  "Tuna Salad Sandwich": "Classic tuna salad on toasted bread with veggies",
  "Tuna Noodle Casserole": "Creamy tuna and pasta bake with spinach",
  "Tuna Melts on Pepper": "Cheesy tuna melted over crispy bell peppers",
  "Arugula Chickpea Tuna Salad": "Peppery arugula with chickpeas, tuna, and lemon",
  "Spicy Rice Casserole": "Savory egg fried rice with broccoli and ginger",
  "Chicken Panang Curry": "Rich Thai curry with chicken and crisp vegetables",
  "Chili Stuffed Poblano Peppers": "Turkey chili baked inside roasted poblano peppers",
  "Leek, Turnip, and Rice Soup": "Warm leek and turnip soup with tender rice",
  "Vegetable Hand Rolls (Temaki)": "Fresh sushi rolls with cucumber, carrots, and avocado",
  "Eggplant Curry": "Tender eggplant simmered in aromatic curry spices",
  "Pear and Pomegranate Salad": "Sweet pear and pomegranate over fresh spinach",
  "Garlic Clove Spaghetti": "Simple spaghetti with garlic, pork, and green onions",
  "Orzo with Garlicky Spinach": "Buttery orzo with sautéed garlic spinach and balsamic",
  "Udon With Chicken and Garlicky Peanut Dressing": "Thick udon noodles in creamy peanut garlic sauce",
  "Roasted Tomato Avocado Toast": "Charred tomatoes and creamy avocado on crusty bread",
  "Corn Salad with Radishes, Jalapeno, and Lime": "Zesty corn salad with radish, jalapeno, and lime",
  "Butternut Squash Soup": "Velvety smooth butternut squash soup with butter",
  "Butternut Squash Basmati Rice": "Fragrant basmati rice with roasted butternut squash",
  "Chicken, Sweet Potato, and Black Bean Skillet": "Hearty skillet with chicken, sweet potato, and beans",
  "Lima Bean Soup": "Creamy lima bean soup with red peppers",
  "Okra and Chickpeas in Fresh Tomato Sauce Recipe": "Okra and chickpeas simmered in fresh tomato sauce",
  "Creamy Tomato Basil Soup": "Rich and creamy tomato soup with fresh basil",
  "Cilantro Rice": "Light and fluffy rice with cilantro and lemon",
  "Moringa Leaves Stir-Fry (Thoran) with Grate Coconut": "Traditional moringa stir-fry with coconut and curry leaves",
};

export function getRecipeDescription(recipeName: string): string {
  return recipeDescriptions[recipeName] || "Delicious homemade recipe";
}
