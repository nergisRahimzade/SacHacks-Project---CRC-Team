import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import pastaCobb from '../assets/pasta-cobb-salad.jpg';
import { useEffect } from "react";
import { fetchRecipes } from "../services/fetchRecipes";

export function RecipeComponent() {
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="recipe-card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, objectFit: 'cover' }}
            image={pastaCobb}
            
            title='Pasta Cobb Salad'
          />
          <CardContent>
            <Typography variant="h5">
              Pasta Cobb Salad
            </Typography>
            <Typography variant="body2">
              Tender pasta with smoky bacon, creamy avocado, tangy cheese, irresistibly intriguing flavors.
            </Typography>
          </CardContent>
          <CardActions>
            <Button> Learn More! </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}