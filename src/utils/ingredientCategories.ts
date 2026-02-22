const categoryMap: Record<string, string> = {
  // Proteins
  "Bacon": "Proteins",
  "Tuna": "Proteins",
  "Chicken": "Proteins",
  "Turkey": "Proteins",
  "Pork": "Proteins",
  "Eggs": "Proteins",

  // Vegetables
  "Iceberg Lettuce": "Vegetables",
  "Tomatoes": "Vegetables",
  "Tomato": "Vegetables",
  "Green Onions": "Vegetables",
  "Corn": "Vegetables",
  "Cucumber": "Vegetables",
  "Bell Pepper": "Vegetables",
  "Arugula": "Vegetables",
  "Red Onion": "Vegetables",
  "Onion": "Vegetables",
  "Broccoli": "Vegetables",
  "Green Beans": "Vegetables",
  "Bok Choy": "Vegetables",
  "Poblano Peppers": "Vegetables",
  "Leeks": "Vegetables",
  "Turnips": "Vegetables",
  "Carrots": "Vegetables",
  "Eggplant": "Vegetables",
  "Scallions": "Vegetables",
  "Spinach": "Vegetables",
  "Radish": "Vegetables",
  "Radishes": "Vegetables",
  "Jalapeno": "Vegetables",
  "Butternut Squash": "Vegetables",
  "Sweet Potato": "Vegetables",
  "Red Peppers": "Vegetables",
  "Okra": "Vegetables",
  "Moringa Leaves": "Vegetables",

  // Fruits
  "Lime": "Fruits",
  "Lemon": "Fruits",
  "Pear": "Fruits",
  "Persimmons": "Fruits",
  "Avocado": "Fruits",
  "Pomegranate Seeds": "Fruits",

  // Grains & Pasta
  "Pasta Elbows": "Grains & Pasta",
  "Pasta": "Grains & Pasta",
  "Bread": "Grains & Pasta",
  "Rice": "Grains & Pasta",
  "Sushi Rice": "Grains & Pasta",
  "Basmati Rice": "Grains & Pasta",
  "Spaghetti": "Grains & Pasta",
  "Orzo": "Grains & Pasta",
  "Udon Noodles": "Grains & Pasta",
  "Nori": "Grains & Pasta",

  // Dairy
  "Blue Cheese": "Dairy",
  "Parmesan Cheese": "Dairy",
  "Cotija Cheese": "Dairy",
  "Cheese": "Dairy",
  "Butter": "Dairy",
  "Cream": "Dairy",

  // Sauces & Condiments
  "Ranch Dressing": "Sauces & Condiments",
  "Tomato Basil Sauce": "Sauces & Condiments",
  "Mayonnaise": "Sauces & Condiments",
  "Alfredo Sauce": "Sauces & Condiments",
  "Soy Sauce": "Sauces & Condiments",
  "Oyster Sauce": "Sauces & Condiments",
  "Panang Curry Paste": "Sauces & Condiments",
  "Balsamic Vinegar": "Sauces & Condiments",
  "Apple Cider Vinegar": "Sauces & Condiments",
  "Peanut Butter": "Sauces & Condiments",
  "Honey": "Sauces & Condiments",

  // Oils
  "Oil": "Oils",
  "Olive Oil": "Oils",
  "Canola Oil": "Oils",
  "Sesame Oil": "Oils",

  // Spices & Herbs
  "Basil": "Spices & Herbs",
  "Chili Powder": "Spices & Herbs",
  "Chili": "Spices & Herbs",
  "Cilantro": "Spices & Herbs",
  "Oregano": "Spices & Herbs",
  "Garlic Powder": "Spices & Herbs",
  "Onion Powder": "Spices & Herbs",
  "Paprika": "Spices & Herbs",
  "Ginger": "Spices & Herbs",
  "Salt": "Spices & Herbs",
  "Parsley": "Spices & Herbs",
  "Bay Leaf": "Spices & Herbs",
  "Bay Leaves": "Spices & Herbs",
  "Garlic": "Spices & Herbs",
  "Poppyseeds": "Spices & Herbs",
  "Cumin": "Spices & Herbs",
  "Curry Leaves": "Spices & Herbs",
  "Turmeric": "Spices & Herbs",
  "Coconut": "Spices & Herbs",

  // Legumes
  "Beans": "Legumes",
  "Chickpeas": "Legumes",
  "Black Beans": "Legumes",
  "Lima Beans": "Legumes",

  // Broths
  "Chicken Broth": "Broths",
  "Broth": "Broths",
};

const categoryOrder = [
  "Proteins",
  "Vegetables",
  "Fruits",
  "Grains & Pasta",
  "Dairy",
  "Legumes",
  "Sauces & Condiments",
  "Oils",
  "Spices & Herbs",
  "Broths",
];

export function categorizeIngredients(ingredients: string[]): Record<string, string[]> {
  const categories: Record<string, string[]> = {};

  for (const category of categoryOrder) {
    categories[category] = [];
  }

  for (const ingredient of ingredients) {
    const category = categoryMap[ingredient] || "Other";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(ingredient);
  }

  // Remove empty categories
  for (const key of Object.keys(categories)) {
    if (categories[key].length === 0) {
      delete categories[key];
    }
  }

  return categories;
}
