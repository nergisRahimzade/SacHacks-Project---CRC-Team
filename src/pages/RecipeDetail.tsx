import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Chip, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import pastaCobb from '../assets/pasta-cobb-salad.jpg';
import wheatIcon from '../assets/wheat-icon.png';
import type { Recipe } from '../types/Recipe';

export function RecipeDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe as Recipe | undefined;

  if (!recipe) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5">Recipe not found</Typography>
        <Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
          Back to Recipes
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fdf6ec' }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', width: '100%', height: 380, overflow: 'hidden' }}>
        <IconButton
          onClick={() => navigate('/')}
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 2,
            backgroundColor: 'rgba(255,255,255,0.85)',
            '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Box
          component="img"
          src={pastaCobb}
          alt={recipe.name}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          }}
        />

        {/* Recipe title over image */}
        <Typography
          sx={{
            position: 'absolute',
            bottom: 32,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: '#fff',
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontStyle: 'italic',
            fontSize: { xs: '2rem', sm: '2.8rem' },
            fontWeight: 400,
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            px: 2,
          }}
        >
          {recipe.name}
        </Typography>
      </Box>

      {/* Content Body */}
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          mt: -3,
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#fdf6ec',
          borderRadius: '16px 16px 0 0',
          px: { xs: 3, sm: 5 },
          py: 4,
        }}
      >
        {/* Wheat icon decoration */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box
            component="img"
            src={wheatIcon}
            alt="wheat decoration"
            sx={{ height: 60, opacity: 0.7 }}
          />
        </Box>

        {/* Ingredients Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#3e2723',
              borderBottom: '2px solid #eeb467',
              pb: 1,
              display: 'inline-block',
            }}
          >
            Ingredients
          </Typography>

          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              border: '1px solid #e8d5b7',
              p: 3,
            }}
          >
            {recipe.ingredients.map((ingredient, index) => {
              const isFromPantry = recipe.ingredientsAtThePantry.includes(ingredient);
              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    py: 0.75,
                    borderBottom: index < recipe.ingredients.length - 1 ? '1px solid #f0e6d3' : 'none',
                  }}
                >
                  {isFromPantry
                    ? <CheckCircleIcon sx={{ fontSize: 16, color: '#2e7d32', flexShrink: 0 }} />
                    : <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#c4a066', flexShrink: 0 }} />
                  }
                  <Typography sx={{ fontSize: '0.95rem', color: '#4e342e', flex: 1 }}>
                    {ingredient}
                  </Typography>
                  {isFromPantry && (
                    <Chip
                      label="At the Pantry"
                      size="small"
                      sx={{
                        fontSize: '0.7rem',
                        height: 22,
                        backgroundColor: '#e8f5e9',
                        color: '#2e7d32',
                        border: '1px solid #a5d6a7',
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Preparation Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#3e2723',
              borderBottom: '2px solid #eeb467',
              pb: 1,
              display: 'inline-block',
            }}
          >
            Preparation
          </Typography>

          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              border: '1px solid #e8d5b7',
              p: 3,
            }}
          >
            {recipe.preparation.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: 2,
                  py: 1.5,
                  borderBottom: index < recipe.preparation.length - 1 ? '1px solid #f0e6d3' : 'none',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: '#eeb467',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: '#3e2723',
                    flexShrink: 0,
                    mt: 0.25,
                  }}
                >
                  {index + 1}
                </Box>
                <Typography sx={{ fontSize: '0.95rem', color: '#4e342e', lineHeight: 1.7 }}>
                  {step}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
