import { Button, Container, Grid, TextField } from '@mui/material';
import MerchantCard from '../../component/commons/MerchantCard';
import { ApiResponse } from '../../api/useApi/useApi';
import { MerchantService, MerchantType } from '../../api/MerchantService/MerchantService';
import { useCallback, useState } from 'react';
import axios from 'axios';

// function fillCard(imageUrl: string, title: string, desc: string, isMember: boolean, id: number) {
//   return MerchantCard(imageUrl, title, desc, isMember, id);
// }

type merchantInfo = {
  imageUrl: string;
  title: string;
  desc: string;
  isMember: boolean;
};

const Test = () => {
  const merchantsResponse: ApiResponse<MerchantType[]> = MerchantService.getMerchants();
  const merchantsData = merchantsResponse.data || [];
  const [query, setQuery] = useState('');

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

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
      <Grid container justifyContent='center'>
        <Grid item>
          <TextField
            id='standard-basic'
            label='Search'
            variant='standard'
            fullWidth
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </Grid>
      </Grid>
      <div className='flex'>
        <div className='flex flex-wrap m-4 w-screen items-center justify-center'>
          {filteredData.map(merchant => {
            const { id, name, type, image } = merchant;
            return MerchantCard(image, name, `${name} is a store`, type === 1, id, merchant, () => handleJoin(id, merchant));
          })}
        </div>
      </div>
    </>
  );
};

export default Test;
