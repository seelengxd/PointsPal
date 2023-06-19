import { Button, Container, Grid, Stack, TextField } from '@mui/material';
import MerchantCard from '../../component/commons/MerchantCard';
import { ApiResponse } from '../../api/useApi/useApi';
import { MerchantService, MerchantType } from '../../api/MerchantService/MerchantService';
import { useCallback, useState } from 'react';
import axios from 'axios';
import TopBar from '../../component/TopBar';
import { useNavigate } from 'react-router-dom';
import Banner from '../../component/commons/Banner';
import SearchBar from '../../component/ConsumerHome/SearchBar';

// function fillCard(imageUrl: string, title: string, desc: string, isMember: boolean, id: number) {
//   return MerchantCard(imageUrl, title, desc, isMember, id);
// }

type merchantInfo = {
  imageUrl: string;
  title: string;
  desc: string;
  isMember: boolean;
};

function handleScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const ConsumerHome = () => {
  const merchantsResponse: ApiResponse<MerchantType[]> = MerchantService.getMerchants();
  const merchantsData = merchantsResponse.data || [];
  const [query, setQuery] = useState('');

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);
  const navigate = useNavigate();

  // i know this is scuffed but i have no idea how to make MerchantService refire without throwing hook errors
  const [isSomethingUpdated, setIsSomethingUpdated] = useState(false);
  const [updatedMerchantsData, setUpdatedMerchantsData] = useState<MerchantType[]>([]);
  const filteredData = (isSomethingUpdated ? updatedMerchantsData : merchantsData).filter(merchant =>
    merchant.name.toLowerCase().includes(query.toLowerCase()),
  );
  function handleJoin(id: number, merchant: MerchantType) {
    // window.location.href = '/merchant'; //dummy code, to replace later
    const fullUrl = process.env.REACT_APP_API_URL + `/merchants/${id}`;
    axios
      .put(fullUrl, { data: { ...merchant, type: 1 }, withCredentials: true })
      .then(() => axios.get(process.env.REACT_APP_API_URL + '/merchants'))
      .then(resp => setUpdatedMerchantsData(resp.data));
    setIsSomethingUpdated(true);
  }
  return (
    <>
      <TopBar />
      <Stack spacing={-4} justifyContent='center' alignItems='center'>
        <Banner className='h-80' />
        <SearchBar onInputChange={setQuery} />
      </Stack>
      <div className='flex'>
        <div className='flex flex-wrap m-4 w-screen items-center justify-center'>
          {filteredData.map(merchant => {
            const { id, name, type, image } = merchant;
            return MerchantCard(image, name, `${name} is a store`, type === 1, id, merchant, () => handleJoin(id, merchant), navigate);
          })}
        </div>
      </div>
      <Button onClick={handleScrollToTop}>
        <h1 className='hover:scale-110 hover:transition-transform fixed right-5 bottom-10 rounded-full w-16 h-16 bg-black text-white pt-4 text-lg'>
          ▲
        </h1>
      </Button>
    </>
  );
};

export default ConsumerHome;
