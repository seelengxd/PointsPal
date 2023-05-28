import { Button, Container, Grid, TextField } from '@mui/material';
import MerchantCard from '../../component/commons/MerchantCard';
import { ApiResponse } from '../../api/useApi/useApi';
import { MerchantService, MerchantType } from '../../api/MerchantService/MerchantService';
import { useState } from 'react';

function fillCard(imageUrl: string, title: string, desc: string, isMember: boolean, id: number) {
  return MerchantCard(imageUrl, title, desc, isMember, id);
}

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
  const filteredData = merchantsData.filter(merchant => merchant.name.toLowerCase().includes(query.toLowerCase()));
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
          {filteredData.map(({ id, name, type, image }) => {
            return MerchantCard(image, name, `${name} is a store`, type === 1, id);
          })}
        </div>
      </div>
    </>
  );
};

export default Test;
