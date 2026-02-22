import './App.css';
import thePantryLogo from './assets/the-pantry-logo.png';
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
import { Autocomplete, TextField } from '@mui/material';

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { RecipeComponent } from './components/RecipeComponent';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className='container'>
      <div className='header-container'>
        <div className='top-bar' />

        <div className='header'>
          <div className='left-header'>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Drawer open={open} onClose={handleClose}>
              <Box sx={{ width: 250 }}>
                <List>
                  <ListItem key='ingredients'>
                    <ListItemButton>
                      <ListItemIcon>
                        <SoupKitchenIcon />
                      </ListItemIcon>
                      <ListItemText primary={'Ingredients'} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem key='Cuisine'>
                    <ListItemButton>
                      <ListItemIcon>
                        <RamenDiningIcon />
                      </ListItemIcon>
                      <ListItemText primary={'Cuisine'} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem key='Dietary Preferances'>
                    <ListItemButton>
                      <ListItemIcon>
                        <FoodBankIcon />
                      </ListItemIcon>
                      <ListItemText primary={'Dietary Preferances'} />
                    </ListItemButton>
                  </ListItem>
                </List>
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

export default App