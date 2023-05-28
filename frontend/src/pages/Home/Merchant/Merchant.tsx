import { CircularProgress, Stack, Typography } from '@mui/material';
import Banner from '../../../component/commons/Banner';
import MerchantDiscounts from './MerchantDiscounts/MerchantDiscounts';
import MerchantLevel from './MerchantLevel';
import { MerchantService } from '../../../api/MerchantService/MerchantService';
import { useLocation } from 'react-router';

const Merchant = () => {
  const location = useLocation();
  const { data: merchant, loading, error } = MerchantService.getMerchantsById(parseInt(location.pathname.split('/').pop() ?? '-1'));

  return (
    <>
      {loading && <CircularProgress />}
      {error && <Typography variant='h2'>{error.message}</Typography>}
      {!loading && merchant && (
        <>
          <Banner imageUrl={merchant?.image} />
          <Stack className='p-10' spacing={4}>
            <Typography variant='h2'>{merchant?.name}</Typography>
            <MerchantLevel />
            <MerchantDiscounts discounts={merchant?.discounts ?? []} />
          </Stack>
        </>
      )}
    </>
  );
};

export default Merchant;
