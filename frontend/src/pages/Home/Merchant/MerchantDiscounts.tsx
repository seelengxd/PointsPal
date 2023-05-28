import { Button, Grid, Stack, Typography } from '@mui/material';

const MerchantDiscounts = () => {
  const discounts = [
    {
      id: 1,
      name: 'Discount 20% OFF',
      description: 'Description 1',
      startDate: '2021-01-01',
      endDate: '2021-01-31',
      link: 'https://www.google.com',
    },
    {
      id: 2,
      name: 'Discount 50% OFF',
      description: 'Description 2',
      startDate: '2021-01-01',
      endDate: '2021-01-31',
      link: 'https://www.google.com',
    },
  ];

  return (
    <>
      <Stack className='w-full border-2 rounded-lg p-6' spacing={2}>
        <Typography variant='h4'>Discounts</Typography>
        <Stack spacing={1}>
          {discounts.map(discount => (
            <div key={discount.id}>
              <Button className='w-full' variant='contained' color='success' href={discount.link} target='_blank'>
                {discount.name}
              </Button>
            </div>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default MerchantDiscounts;