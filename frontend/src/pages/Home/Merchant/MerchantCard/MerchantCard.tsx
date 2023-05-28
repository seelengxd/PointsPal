import { useState } from 'react';
import MerchantLevel from './MerchantLevel/MerchantLevel';
import MerchantLoyaltyCard from './MerchantLoyaltyCard/MerchantLoyaltyCard';
import './MerchantCard.css';

const MerchantCard = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`card ${toggle ? 'flipped' : ''}`} onClick={handleClick}>
      <div className='card-inner'>
        <div className='card-front'>
          <MerchantLevel />
        </div>
        <div className='card-back'>
          <MerchantLoyaltyCard />
        </div>
      </div>
    </div>
  );
};

export default MerchantCard;
