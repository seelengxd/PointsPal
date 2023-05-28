import { Grid, Stack, Typography } from '@mui/material';
import Banner from '../../../component/commons/Banner';
import MerchantDiscounts from './MerchantDiscounts';
import MerchantLevel from './MerchantLevel';
import TopBar from '../../../component/TopBar';

const Merchant = () => {
  const merchantName = 'Bobo King';

  const imgLinks: string[] = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  ];

  return (
    <>
      <TopBar/>
      <Banner imageUrl={imgLinks[0]} />
      <Stack className='p-10' spacing={4}>
        <Typography variant='h2'>{merchantName}</Typography>
        <MerchantLevel />
        <MerchantDiscounts />
      </Stack>
    </>
  );
};

export default Merchant;
