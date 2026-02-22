// Eagerly import all recipe images from assets
const imageModules = import.meta.glob<string>(
  '../assets/*.{jpg,png}',
  { eager: true, import: 'default' }
);

// Build a lookup: filename (without extension) → resolved image URL
const imagesBySlug: Record<string, string> = {};
for (const [path, url] of Object.entries(imageModules)) {
  const filename = path.split('/').pop()?.replace(/\.(jpg|png)$/, '') ?? '';
  imagesBySlug[filename] = url;
}

// Convert a recipe name to a slug matching the image filename
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Manual overrides for recipe names whose slug doesn't match the filename
const slugOverrides: Record<string, string> = {
  'Pasta Salad with Tomato Basil Sauce and Cheese': 'pasta-salad-with-tomato-and-basil-sauce',
  'Vegetable Hand Rolls (Temaki)': 'vegetable-hand-roles-temaki',
};

// Fallback image slug
const FALLBACK_SLUG = 'pasta-cobb-salad';

/**
 * Returns the resolved image URL for a given recipe name.
 * Falls back to pasta-cobb-salad if no matching image is found.
 */
export function getRecipeImage(recipeName: string): string {
  const override = slugOverrides[recipeName];
  if (override && imagesBySlug[override]) {
    return imagesBySlug[override];
  }

  const slug = toSlug(recipeName);
  return imagesBySlug[slug] ?? imagesBySlug[FALLBACK_SLUG] ?? '';
}
