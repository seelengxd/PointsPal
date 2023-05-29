import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Rating, Slide, Stack, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { MerchantType } from '../../../../../api/MerchantService/MerchantService';
import ReviewCard, { Review } from './ReviewCard';


type Props = {
  open: boolean;
  handleClose: () => void;
  merchant: MerchantType;
  additionDetails: {
    description: string;
    location: string;
    label: string;
  }
};



const MerchantDialog = ({ open, handleClose, merchant, additionDetails }: Props) => {
    const reviews: Review[] = [
        {
          "id": 1,
          "name": "John",
          "rating": 4,
          "description": "Great experience! The food was delicious."
        },
        {
          "id": 2,
          "name": "Emily",
          "rating": 5,
          "description": "Excellent service and amazing ambiance. Highly recommended!"
        },
        {
          "id": 3,
          "name": "David",
          "rating": 3.5,
          "description": "Decent food but the prices were a bit high."
        },
        {
          "id": 4,
          "name": "Sarah",
          "rating": 4.8,
          "description": "Absolutely loved the presentation of the dishes. They tasted as good as they looked!"
        },
        {
          "id": 5,
          "name": "Michael",
          "rating": 2,
          "description": "Disappointing experience. The food was bland and the service was slow."
        },
        {
          "id": 6,
          "name": "Emma",
          "rating": 4.5,
          "description": "Friendly staff and a good variety of options on the menu."
        },
        {
          "id": 7,
          "name": "Alex",
          "rating": 4.2,
          "description": "The portions were small, but the flavors were outstanding."
        },
        {
          "id": 8,
          "name": "Sophia",
          "rating": 5,
          "description": "A hidden gem! The restaurant had a cozy atmosphere and the food was divine."
        },
        {
          "id": 9,
          "name": "Daniel",
          "rating": 3.7,
          "description": "Average experience. Nothing particularly memorable."
        },
        {
          "id": 10,
          "name": "Olivia",
          "rating": 4.6,
          "description": "The desserts were the highlight of the meal. Definitely worth trying!"
        }
      ];
       


  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>; // eslint-disable-line
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>{merchant.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description' >
            <Stack spacing={2}>
            <Typography>{additionDetails.description}</Typography>
            <Typography>{additionDetails.location}</Typography>
            <Chip className="mr-2 w-max" label={additionDetails.label} color="primary" />
            <Stack spacing={3} className='h-40'>
                <Typography variant="h6">Overall Ratings</Typography>
                <Rating value={3}/>
                <Stack spacing={2}>
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
                </Stack>

            </Stack>
            </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MerchantDialog;
