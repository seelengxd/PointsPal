import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { MerchantService, MerchantType } from '../../api/MerchantService/MerchantService';
import axios from 'axios';

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

function handleViewReward() {
  window.location.href = '/merchant'; //dummy code, to replace later
}

export default function MediaCard(
  imageUrl: string,
  title: string,
  desc: string,
  isMember: boolean,
  id: number,
  merchant: MerchantType,
  handleJoin: (id: number, merchant: MerchantType) => void,
) {
  return (
    <Card className='m-4 w-[320px] h-[300px] hover:scale-105 hover:transition-transform'>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={title} />

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>{ButtonAction(isMember, id, merchant, handleJoin)}</CardActions>
    </Card>
  );
}
