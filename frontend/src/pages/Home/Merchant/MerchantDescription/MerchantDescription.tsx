import { Button, Card, CardActions, Chip, Grid, Rating, Stack, Typography } from '@mui/material';
import { MerchantType } from '../../../../api/MerchantService/MerchantService';
import { useState } from 'react';
import MerchantDialog from './MerchantDialog/MerchantDialog';

type Props = {
  merchant: MerchantType;
};

const MerchantDescription = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const description = `Welcome to the ${props.merchant.name}, your ultimate destination for a delightful culinary experience. As you step inside our store, you'll be greeted by the enticing aromas and a visually captivating display of an extensive range of delectable treats. ${props.merchant.name} aims to cater to every taste bud, offering an array of culinary delights to satisfy diverse palates.`;
  const location = '123 Kuta Street, Kuta, Singapore 80361';
  const label = 'Food';

  return (
    <>
      <Card className='p-8 relative drop-shadow'>
        <Stack spacing={2}>
          <Typography noWrap variant='h5'>
            {description}
          </Typography>
          <Typography className='text-silver' noWrap variant='h5'>
            {location}
          </Typography>
          <Grid container className='justify-start w-1/2'>
            <Chip label={label} color='primary' />
          </Grid>
          <Button className='absolute bottom-0 right-0' variant='outlined' onClick={handleClickOpen}>
            Learn More
          </Button>
        </Stack>
      </Card>
      {open && (
        <MerchantDialog
          open={open}
          handleClose={handleClose}
          merchant={props.merchant}
          additionDetails={{ description: description, location: location, label: label }}
        />
      )}
    </>
  );
};

export default MerchantDescription;
