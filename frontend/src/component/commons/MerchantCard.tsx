import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ButtonAction(isMember: boolean) {
    if (isMember) {
        return (<Button size="small" onClick={handleViewReward}>View Rewards</Button>)
    } else {
        return <Button size="small" onClick={handleJoin}>Join</Button>
    }
}

function handleJoin() {
    window.location.href = '/merchant' //dummy code, to replace later
}

function handleViewReward() {
    window.location.href = '/merchant' //dummy code, to replace later
}

export default function MediaCard(imageUrl: string, title: string, desc: string, isMember: boolean) {
  return (
    <Card className='m-4 w-[320px] h-[300px] hover:scale-105 hover:transition-transform'>

      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title={title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        {ButtonAction(isMember)}
      </CardActions>
    </Card>
  );
}