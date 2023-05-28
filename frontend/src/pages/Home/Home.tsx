import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Test from '../MerchantsContent/Merchants';
import TopBar from '../../component/TopBar';

function handleScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <TopBar/>
    <Test/>
    <Button onClick={handleScrollToTop}><h1 className='hover:scale-110 hover:transition-transform fixed right-5 bottom-10 rounded-full w-16 h-16 bg-black text-white pt-4 text-lg'>▲</h1></Button>
    </>
  );
};

export default Home;
