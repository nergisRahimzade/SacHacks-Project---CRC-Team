import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import pastaCobb from '../assets/pasta-cobb-salad.jpg';

export function RecipeComponent() {
  return (
    <>
      <div className="recipe-card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, objectFit: 'cover' }}
            image={pastaCobb}
            id="1"
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