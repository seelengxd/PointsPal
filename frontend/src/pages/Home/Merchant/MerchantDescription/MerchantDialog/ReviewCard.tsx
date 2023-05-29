import { Card, CardContent, Grid, Rating, Stack, Typography } from '@mui/material';

export interface Review {
    id: number;
    name: string;
    rating: number;
    description: string;
}

type Props = {
    review: Review;
}

const ReviewCard = ({review} : Props) => {
  const { id, name, rating, description } = review;

  return (
    <Card>
      <CardContent>
      <Stack spacing={2}>
        <Stack direction="row" className="w-full">
            <Grid container className="justify-start w-1/2">
                <Typography variant="h6" component="div">
                    {name}
                </Typography>
            </Grid>
            <Grid container className="justify-end w-1/2 items-center" >
                <Rating name="read-only" value={rating} readOnly />
            </Grid>
        </Stack>
        <Typography variant="body2" component="div">
            {description}
        </Typography>
      </Stack>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
