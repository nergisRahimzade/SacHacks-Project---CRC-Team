import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import pastaCobb from '../assets/pasta-cobb-salad.jpg';
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
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Button
        onClick={() => navigate('/')}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, textTransform: 'none' }}
      >
        Back to Recipes
      </Button>

      <Paper elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Box
          component="img"
          src={pastaCobb}
          alt={recipe.name}
          sx={{ width: '100%', height: 300, objectFit: 'cover' }}
        />

        <Box sx={{ p: 3 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            {recipe.name}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Ingredients Section */}
          <Typography variant="h5" fontWeight={500} gutterBottom>
            Ingredients
          </Typography>

          <List dense>
            {recipe.ingredients.map((ingredient, index) => {
              const isFromPantry = recipe.ingredientsAtThePantry.includes(ingredient);
              return (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    {isFromPantry
                      ? <CheckCircleIcon sx={{ fontSize: 16, color: '#2e7d32' }} />
                      : <FiberManualRecordIcon sx={{ fontSize: 8, color: '#666' }} />
                    }
                  </ListItemIcon>
                  <ListItemText
                    primary={ingredient}
                    primaryTypographyProps={{ fontSize: '0.95rem' }}
                  />
                  {isFromPantry && (
                    <Chip label="At the Pantry" size="small" color="success" variant="outlined" sx={{ fontSize: '0.7rem', height: 22 }} />
                  )}
                </ListItem>
              );
            })}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Preparation Section */}
          <Typography variant="h5" fontWeight={500} gutterBottom>
            Preparation
          </Typography>

          <List>
            {recipe.preparation.map((step, index) => (
              <ListItem key={index} sx={{ alignItems: 'flex-start', py: 1 }}>
                <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                  <Chip
                    label={index + 1}
                    size="small"
                    sx={{
                      backgroundColor: '#eeb467',
                      color: '#333',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      height: 24,
                      width: 24,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={step}
                  primaryTypographyProps={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
}
