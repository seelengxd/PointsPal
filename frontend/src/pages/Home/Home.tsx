import { Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, Stack } from '@mui/material';
import { useCallback, useLayoutEffect, useState } from 'react';
import singpassLogo from '../../assets/singpass.svg'
import pointsPalLogo from '../../assets/PointsPalLogo.svg'
import { BACKEND_URL } from '../../config/constants';

const Home = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#eee"
  }, []);

  const [isLoading, setIsLoading] = useState(false)

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const handleLogin = useCallback(() => {
    setIsLoading(true)
    fetch(`${BACKEND_URL}/api/auth-url`, {
      credentials: 'include',
    })
      .then(async (r) => await r.json())
      .then(({ url }) => {
        window.location.href = url
      })
      .catch((e: unknown) => {
        setIsLoading(false);
        console.log(e);
      })
  }, [])

  if (isLoading) {
    return <CircularProgress />
  }
  
  return (
    <>
      <Card style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "2em",
      }} elevation={3} variant='outlined'>
        <CardMedia component="img" src={pointsPalLogo} style={{ height: "250px" }} />
        <CardHeader title={'Welcome to PointsPal'} subheader={'Make it a point to support our local businesses'} sx={{ textAlign: 'center' }}/>
        <CardContent style={{ padding: '1.5em' }}>
          <Stack direction="column">
            <Button size='large' sx={{color: 'black', border: '1px solid #e5e7eb', padding: '1.5em', fontSize: '1em'}} onClick={handleLogin}><strong>Login with </strong><img src={singpassLogo} width='100em' style={{margin: "0px 10px"}}/><strong> mobile</strong></Button>
            <Button size='large' sx={{padding: '1.5em', fontSize: '1em'}}>Or I am a merchant</Button>
          </Stack>
        </CardContent>
        <Button onClick={handleScrollToTop}><h1 className='hover:scale-110 hover:transition-transform fixed right-5 bottom-10 rounded-full w-16 h-16 bg-black text-white pt-4 text-lg'>▲</h1></Button>
      </Card>
    </>
  );
};

export default Home;
