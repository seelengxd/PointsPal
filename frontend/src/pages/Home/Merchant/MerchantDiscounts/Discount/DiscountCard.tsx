import { Button } from '@mui/material';
import { useState } from 'react';
import DiscountDialog from './DiscountDialog/DiscountDialog';
import { Discount } from '../../../../../api/MerchantService/MerchantService';

type Props = {
  discount: Discount;
};

const DiscountCard = ({ discount }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div key={discount.id}>
        <Button className='w-full' variant='contained' color='success' onClick={handleClickOpen}>
          {discount.title}
        </Button>
        {open && <DiscountDialog open={open} handleClose={handleClose} discount={discount} />}
      </div>
    </>
  );
};

export default DiscountCard;
