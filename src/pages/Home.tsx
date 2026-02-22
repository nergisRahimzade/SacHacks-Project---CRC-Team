import thePantryLogo from '../assets/the-pantry-logo.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuIcon from '@mui/icons-material/Menu';
import { Autocomplete, Checkbox, Collapse, FormControlLabel, FormGroup, TextField } from '@mui/material';

import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { RecipeComponent } from '../components/RecipeComponent';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { fetchRecipes } from '../services/fetchRecipes';
import type { Recipe } from '../types/Recipe';

export function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(true);
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);
  const [allIngredientNames, setAllIngredientNames] = useState<string[]>([]);

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

  const handleCollapseClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <div className='container'>
      <div className='header-container'>
        <div className='top-bar' />

        <div className='header'>
          <div className='left-header'>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Drawer open={openDrawer} onClose={handleClose}>
              <Box sx={{ width: 250 }}>
                {recipesData.map((recipe: Recipe) => (
                  <List id={crypto.randomUUID()}>
                    <ListItem key='ingredients'>
                      <ListItemButton onClick={handleCollapseClick}>
                        <ListItemIcon>
                          <SoupKitchenIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Ingredients'} />
                        {openCollapse ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                        <List>a
                          <FormGroup>
                            {
                              allIngredientNames.map((ingredient) => (
                                <FormControlLabel key={ingredient} control={<Checkbox />} label={ingredient}/>
                              ))
                            }
                          </FormGroup>
                        </List>
                        <ListItemText primary={recipe.name} />
                      </Collapse>
                    </ListItem>
                  </List>
                ))}

              </Box>
            </Drawer>
          </div>

          <div className='middle-header'>
            <Autocomplete
              options={['Soup', 'Rice', 'Egg']}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Search Recipe'
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: 'search'
                    }
                  }}
                />
              )}
            />
          </div>

          <div className='right-header'>
            <img className='logo' src={thePantryLogo} alt="the-pantry-logo"></img>
          </div>
        </div>
      </div>

      <div className='main-body-container'>
        <RecipeComponent />
      </div>
    </div>
  )
}
