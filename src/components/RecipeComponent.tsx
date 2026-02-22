import { Button, Card, CardContent, CardMedia, Chip, Typography, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import type { Recipe } from "../types/Recipe";
import { getRecipeDescription } from "../utils/recipeDescriptions";
import { getRecipeImage } from "../utils/recipeImages";

interface RecipeComponentProps {
  recipe: Recipe;
  matchCount?: number;
  showMatch?: boolean;
}

function getMatchInfo(count: number): { label: string; color: string; bg: string } | null {
  if (count >= 3) return { label: '✦ Perfect Match', color: '#fff', bg: '#567F64' };
  if (count === 2) return { label: '✦ Great Match', color: '#3e2723', bg: '#F4B300' };
  if (count === 1) return { label: '✦ Good Match', color: '#fff', bg: '#E37B61' };
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
        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', borderRadius: 3, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
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
              sx={{ height: 180, objectFit: 'cover', objectPosition: 'center' }}
              image={getRecipeImage(recipe.name)}
              title={recipe.name}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography className="recipe-name" variant="h6" sx={{ fontWeight: 600, fontFamily: "'Rubik', sans-serif", color: '#3e2723' }}>
                {recipe.name}
              </Typography>
              <Typography className="recipe-description" variant="body2" sx={{ color: '#BB8457', mt: 0.5, fontFamily: "'Rubik', sans-serif" }}>
                {getRecipeDescription(recipe.name)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ px: 2, pb: 2 }}>
            <Button
              variant="outlined"
              onClick={handleClick}
              sx={{
                borderRadius: '20px',
                borderColor: '#F4B300',
                color: '#3e2723',
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: "'Rubik', sans-serif",
                px: 3,
                '&:hover': {
                  borderColor: '#BB8457',
                  backgroundColor: '#FDF6EC',
                },
              }}
            >
              View Recipe
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}