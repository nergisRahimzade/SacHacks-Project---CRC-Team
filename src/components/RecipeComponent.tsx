import { Card, CardContent, CardMedia, Chip, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import pastaCobb from '../assets/pasta-cobb-salad.jpg';
import type { Recipe } from "../types/Recipe";
import { getRecipeDescription } from "../utils/recipeDescriptions";

interface RecipeComponentProps {
  recipe: Recipe;
  matchCount?: number;
  showMatch?: boolean;
}

function getMatchInfo(count: number): { label: string; color: string; bg: string } | null {
  if (count >= 3) return { label: '✦ Perfect Match', color: '#fff', bg: '#2e7d32' };
  if (count === 2) return { label: '✦ Great Match', color: '#333', bg: '#fdd835' };
  if (count === 1) return { label: '✦ Good Match', color: '#fff', bg: '#e57373' };
  return null;
}

export function RecipeComponent({ recipe, matchCount = 0, showMatch = false }: RecipeComponentProps) {
  const matchInfo = showMatch ? getMatchInfo(matchCount) : null;
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = encodeURIComponent(recipe.name);
    navigate(`/recipe/${slug}`, { state: { recipe } });
  };

  return (
    <>
      <div className="recipe-card-container">
        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {matchInfo && (
            <Chip
              label={matchInfo.label}
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                zIndex: 1,
                backgroundColor: matchInfo.bg,
                color: matchInfo.color,
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          )}
          <CardActionArea onClick={handleClick} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <CardMedia
              sx={{ height: 140, objectFit: 'cover' }}
              image={pastaCobb}
              title={recipe.name}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography className="recipe-name" variant="h5">
                {recipe.name}
              </Typography>
              <Typography className="recipe-description" variant="body2">
                {getRecipeDescription(recipe.name)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}