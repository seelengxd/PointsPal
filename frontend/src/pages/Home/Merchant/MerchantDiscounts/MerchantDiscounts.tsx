import { Stack, Typography } from '@mui/material';

import { Discount } from '../../../../api/MerchantService/MerchantService';
import DiscountCard from './Discount/DiscountCard';

type Props = {
  discounts: Discount[];
};

const MerchantDiscounts = ({ discounts }: Props) => {
  return (
    <>
      <Stack className='w-full border-2 rounded-lg p-6' spacing={2}>
        <Typography variant='h4'>Discounts</Typography>
        <Stack spacing={1}>
          {discounts.map(discount => (
            <DiscountCard key={discount.id} discount={discount} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default MerchantDiscounts;
