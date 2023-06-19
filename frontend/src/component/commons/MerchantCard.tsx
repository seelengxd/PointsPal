import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, NavigateFunction } from 'react-router-dom';
import { MerchantService, MerchantType } from '../../api/MerchantService/MerchantService';
import { useNavigate } from "react-router-dom";

function ButtonAction(isMember: boolean, id: number, merchant: MerchantType, handleJoin: (id: number, merchant: MerchantType) => void) {
  if (isMember) {
    return (
      <Link to={`/merchant/${id}`}>
        <Button size='small'>View Rewards</Button>
      </Link>
    );
  } else {
    return (
      <Button size='small' onClick={() => handleJoin(id, merchant)}>
        Join
      </Button>
    );
  }
}

export default function MediaCard(
  imageUrl: string,
  title: string,
  desc: string,
  isMember: boolean,
  id: number,
  merchant: MerchantType,
  handleJoin: (id: number, merchant: MerchantType) => void,
  navigate: NavigateFunction,
) {

  return (
    <Card className='m-4 w-[320px] h-[300px] hover:scale-105 hover:transition-transform hover:cursor-pointer relative' onClick={() => navigate(`/merchant/${id}`)}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={title} />

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {desc}
        </Typography>
      </CardContent>
      <CardActions className='absolute bottom-0 right-0'>{ButtonAction(isMember, id, merchant, handleJoin)}</CardActions>
    </Card>
  );
}
