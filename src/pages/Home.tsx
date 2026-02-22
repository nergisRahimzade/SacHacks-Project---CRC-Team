import thePantryLogo from '../assets/the-pantry-logo.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Checkbox, Collapse, FormControlLabel, FormGroup, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useEffect, useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { RecipeComponent } from '../components/RecipeComponent';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { fetchRecipes } from '../services/fetchRecipes';
import type { Recipe } from '../types/Recipe';
import { categorizeIngredients } from '../utils/ingredientCategories';

export function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);
  const [allIngredientNames, setAllIngredientNames] = useState<string[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const categorizedIngredients = useMemo(
    () => categorizeIngredients(allIngredientNames),
    [allIngredientNames]
  );

  const filteredRecipes = useMemo(() => {
    let recipes = recipesData;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      recipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.ingredientNames.some((ing) => ing.toLowerCase().includes(query))
      );
    }

    if (checkedIngredients.size > 0) {
      recipes = recipes.filter((recipe) =>
        recipe.ingredientNames.some((ingredient) => checkedIngredients.has(ingredient))
      );
    }

    return recipes;
  }, [recipesData, checkedIngredients, searchQuery]);

  useEffect(() => {
    fetchRecipes().then(({ recipesData, allIngredientNames }) => {
      setRecipesData(recipesData);
      setAllIngredientNames(allIngredientNames);
    });
  }, []);

  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  }

  const handleCategoryClick = (category: string) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleIngredientToggle = (ingredient: string) => {
    setCheckedIngredients((prev) => {
      const next = new Set(prev);
      if (next.has(ingredient)) {
        next.delete(ingredient);
      } else {
        next.add(ingredient);
      }
      return next;
    });
  };

  return (
    <div className='container'>
      <div className='header-container'>
        <div className='top-bar' />

        <div className='header'>
          <div className='left-header'>
            <IconButton onClick={handleClick} aria-label="open filters" sx={{ color: '#3e2723' }}>
              <MenuIcon />
            </IconButton>

            <Drawer open={openDrawer} onClose={handleClose}>
              <Box sx={{ width: 280 }}>
                <List
                  subheader={
                    <ListItemButton sx={{ py: 1.5 }}>
                      <ListItemIcon>
                        <SoupKitchenIcon />
                      </ListItemIcon>
                      <ListItemText primary="Ingredients" primaryTypographyProps={{ fontWeight: 'bold' }} />
                    </ListItemButton>
                  }
                >
                  {checkedIngredients.size > 0 && (
                    <Button
                      size="small"
                      onClick={() => setCheckedIngredients(new Set())}
                      sx={{ ml: 3, mb: 1, textTransform: 'none', fontSize: '0.8rem', color: '#E37B61' }}
                    >
                      Reset Filters
                    </Button>
                  )}
                  {Object.entries(categorizedIngredients).map(([category, ingredients]) => (
                    <div key={category}>
                      <ListItemButton onClick={() => handleCategoryClick(category)} sx={{ pl: 3 }}>
                        <ListItemText primary={category} primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }} />
                        {openCategories[category] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openCategories[category]} timeout="auto" unmountOnExit>
                        <FormGroup sx={{ pl: 5 }}>
                          {ingredients.map((ingredient) => (
                            <FormControlLabel
                              key={ingredient}
                              control={
                                <Checkbox
                                  size="small"
                                  checked={checkedIngredients.has(ingredient)}
                                  onChange={() => handleIngredientToggle(ingredient)}
                                  sx={{
                                    color: '#D0BB86',
                                    '&.Mui-checked': { color: '#567F64' },
                                  }}
                                />
                              }
                              label={ingredient}
                              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
                            />
                          ))}
                        </FormGroup>
                      </Collapse>
                    </div>
                  ))}
                </List>
              </Box>
            </Drawer>
          </div>

          <div className='middle-header'>
            <TextField
              fullWidth
              size="small"
              placeholder="Search a recipe"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  fontFamily: "'Rubik', sans-serif",
                  '& fieldset': { borderColor: '#D0BB86' },
                  '&:hover fieldset': { borderColor: '#BB8457' },
                  '&.Mui-focused fieldset': { borderColor: '#F4B300' },
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'action.active' }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>

          <div className='right-header'>
            <img className='logo' src={thePantryLogo} alt="the-pantry-logo" />
          </div>
        </div>
      </div>

      <h2 className='section-title'>Recommended Recipes</h2>

      <div className='main-body-container'>
        {filteredRecipes.map((recipe) => {
          const matchCount = recipe.ingredientNames.filter((ing) => checkedIngredients.has(ing)).length;
          return (
            <RecipeComponent
              key={recipe.name}
              recipe={recipe}
              matchCount={matchCount}
              showMatch={checkedIngredients.size >= 3}
            />
          );
        })}
      </div>
    </div>
  )
}
