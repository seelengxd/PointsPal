import { Stack, Typography } from '@mui/material';
import Banner from '../../../component/commons/Banner';
import MerchantDiscounts from './MerchantDiscounts/MerchantDiscounts';
import MerchantLevel from './MerchantLevel';
import { MerchantService } from '../../../api/MerchantService/MerchantService';

const Merchant = () => {
  const { data, loading, error } = MerchantService.getMerchants();

  const merchant = data?.[0] ?? null;
  console.log(merchant);

  return (
    <>
      <h1>Merchant</h1>
      <Banner imageUrl={merchant?.image} />
      <Stack className='p-10' spacing={4}>
        <Typography variant='h2'>{merchant?.name}</Typography>
        <MerchantLevel />
        <MerchantDiscounts />
      </Stack>
    </>
  );
};

export default Merchant;
