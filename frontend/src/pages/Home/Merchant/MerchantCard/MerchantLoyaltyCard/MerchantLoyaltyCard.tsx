import { Grid, Stack, Typography } from '@mui/material';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const MerchantLoyaltyCard = () => {
  const points = 123;
  const mileStones = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];

  return (
    <>
      <Stack className='w-full rounded-lg p-6' spacing={2}>
        <Typography variant='h4'>Loyalty Card</Typography>
        <Stack direction={'row'} spacing={1}>
          <div>{'Points:'}</div>
          <div>{points}</div>
        </Stack>

        <Grid container justifyContent='space-evenly' spacing={2}>
          {mileStones.map(
            (mileStone, index) =>
              mileStone == 1 && (
                <Grid className='!p-0' container item xs={2} key={index}>
                  <HighlightOffIcon className='text-green' />
                </Grid>
              ),
          )}
        </Grid>

        <Grid container justifyContent='space-evenly' spacing={2}>
          {mileStones.map(
            (mileStone, index) =>
              mileStone == 0 && (
                <Grid className='!p-0 !' container item xs={2} key={index}>
                  <PanoramaFishEyeIcon />
                </Grid>
              ),
          )}
        </Grid>
      </Stack>
    </>
  );
};

export default MerchantLoyaltyCard;
