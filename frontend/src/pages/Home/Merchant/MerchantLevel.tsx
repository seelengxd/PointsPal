import { Stack, Typography } from '@mui/material';
import ExperienceBar from './ExperienceBar/ExperienceBar';

const MerchantLevel = () => {
  const tier = 'Silver';
  const nextTier = 'Gold';
  const experience = { curr: 62, max: 100 };

  return (
    <>
      <Stack className='w-full border-2 rounded-lg p-6' spacing={2}>
        <Typography variant='h4'>
          Tier <span className='text-silver'>{tier}</span>
        </Typography>
        <Stack spacing={1}>
          <Typography variant='h6' className='text-end'>
            $38 to <span className='text-gold'>{nextTier}</span>
          </Typography>
          <ExperienceBar progress={experience} />
        </Stack>
      </Stack>
    </>
  );
};

export default MerchantLevel;
