import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleMerchantPage = () => {
    navigate('/merchant');
  };

  return (
    <Button variant='contained' color='primary' onClick={handleMerchantPage}>
      Merchant Page
    </Button>
  );
};

export default Home;
