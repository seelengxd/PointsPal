import { CircularProgress, Stack } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const LoggedIn = (): JSX.Element => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <CircularProgress />;
  }
  if (user === null) {
    return <Navigate to='/merchants' />;
  }
  return (
    <Stack spacing='32px'>
      <h1>Logged in successfully!</h1>
      <h2>sgID</h2>
      <h2>{user.sub}</h2>
      <h2>Name</h2>
      <h2>{user.data['myinfo.name']}</h2>
    </Stack>
  );
};
