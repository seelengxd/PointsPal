import { Button } from '@mui/material';
import { useState } from 'react';

const SubscriptionButton = () => {
  const [subscription, setSubscription] = useState(false);

  const handleSubscription = () => {
    setSubscription(!subscription);
  };

  return (
    <Button className='w-max self-end' variant='contained' color={subscription ? 'primary' : 'success'} onClick={handleSubscription}>
      {subscription ? 'Cancel Subscription' : 'Subscribe'}
    </Button>
  );
};

export default SubscriptionButton;
