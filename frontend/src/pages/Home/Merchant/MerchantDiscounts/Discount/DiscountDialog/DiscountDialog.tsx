import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { Discount } from '../../../../../../api/MerchantService/MerchantService';

type Props = {
  open: boolean;
  handleClose: () => void;
  discount: Discount;
};

const DiscountDialog = ({ open, handleClose, discount }: Props) => {
  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>; // eslint-disable-line
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>{discount.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          Are you sure you want to activate the discount coupon? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Activate</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DiscountDialog;
