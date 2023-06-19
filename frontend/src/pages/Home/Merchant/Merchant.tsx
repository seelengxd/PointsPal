import { Card, CardHeader, CircularProgress, Stack, Typography, Rating } from '@mui/material';
import Banner from '../../../component/commons/Banner';
import MerchantDiscounts from './MerchantDiscounts/MerchantDiscounts';
import TopBar from '../../../component/TopBar';
import { MerchantService, MerchantType } from '../../../api/MerchantService/MerchantService';
import { useLocation } from 'react-router';
import SubscriptionButton from './SubscriptionButton/SubscriptionButton';
import MerchantCard from './MerchantCard/MerchantCard';
import MerchantDescription from './MerchantDescription/MerchantDescription';

const Merchant = () => {
  const location = useLocation();
  const { data: merchant, loading, error } = MerchantService.getMerchantsById(parseInt(location.pathname.split('/').pop() ?? '-1'));
  const title = (
    <>
      <Typography variant='h5'>
        Join <strong>{merchant?.name}</strong> as a member to unlock exclusive discounts and rewards
      </Typography>
    </>
  );

  return (
    <>
      {loading && <CircularProgress />}
      {error && <Typography variant='h2'>{error.message}</Typography>}
      {!loading && merchant && (
        <>
          <TopBar />
          <Banner imageUrl={merchant?.image} />
          <Stack className='p-10' spacing={4}>
            <Typography variant='h3'>{merchant?.name}</Typography>
            <Rating value={3} size='medium' />
            <SubscriptionButton isSubscribed={merchant?.type == 1 ?? false} merchant={merchant} />
            <MerchantDescription merchant={merchant} />
            {merchant.type == 1 ? (
              <>
                <MerchantCard />
                <MerchantDiscounts discounts={merchant?.discounts ?? []} />
              </>
            ) : (
              <>
                <Card>
                  <CardHeader title={title} sx={{ textAlign: 'center', color: 'grey', backgroundColor: '#eee' }} />
                </Card>
              </>
            )}
          </Stack>
        </>
      )}
    </>
  );
};

export default Merchant;
