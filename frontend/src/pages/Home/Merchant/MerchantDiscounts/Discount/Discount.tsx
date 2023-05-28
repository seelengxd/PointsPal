import { Button } from '@mui/material';
import { useState } from 'react';
import DiscountDialog from './DiscountDialog/DiscountDialog';

type Props = {
  discount: { id: number; name: string; description: string; startDate: string; endDate: string; link: string };
};

const Discount = ({ discount }: Props) => {
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
          {discount.name}
        </Button>
        {open && <DiscountDialog open={open} handleClose={handleClose} discount={discount} />}
      </div>
    </>
  );
};

export default Discount;
