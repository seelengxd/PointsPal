import { Button } from '@mui/material';
import { useState } from 'react';
import { MerchantType } from '../../../../api/MerchantService/MerchantService';
import axios from 'axios';

const SubscriptionButton = (props: {isSubscribed: boolean, merchant: MerchantType}) => {
  const [subscription, setSubscription] = useState(props.isSubscribed);

  function onSubscription() {
    // window.location.href = '/merchant'; //dummy code, to replace later
    const fullUrl = process.env.REACT_APP_API_URL + `/merchants/${props.merchant.id}/toggleSubscription`;
    axios
      .get(fullUrl, {withCredentials: true})
      .then(() => axios.get(process.env.REACT_APP_API_URL + '/merchants'))
      .then(() => setSubscription(!subscription))
      .then(() => window.location.reload()); // too lazy to do this properly sorry
  }

  return (
    <Button className='w-max self-end' variant='contained' color={subscription ? 'primary' : 'success'} onClick={onSubscription}>
      {subscription ? 'Cancel Subscription' : 'Subscribe'}
    </Button>
  );
};

export default SubscriptionButton;
