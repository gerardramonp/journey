import Layout from './components/Layout';

import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';
import { Routes } from './routes/routes';

const StyledButton = styled(Button)`
  width: 50%;
`;

const SDialogText = styled(DialogContentText)`
  margin-bottom: 0.75rem;
`;

const SDialogActions = styled(DialogActions)`
  display: flex;
  justify-content: center;
`;

function App() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(
    !JSON.parse(localStorage.getItem('dialogOpened') || 'false')
  );

  const handlePresent = () => {
    setIsDialogOpen(false);
    localStorage.setItem('dialogOpened', 'true');

    navigate(Routes.notes);
  };

  return (
    <div className="App">
      <Dialog
        open={isDialogOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Feliz primer mes juntos amor ❤️'}
        </DialogTitle>
        <DialogContent>
          <SDialogText id="alert-dialog-description">
            Solo decirte que ha sido increible conocerte y estoy muy feliz de
            estar contigo baby.
          </SDialogText>

          <SDialogText id="alert-dialog-description">
            Estoy muy emocionado de seguir construyendo nuestra relación juntos
            y vivir muchas cosas contigo amor. Eres lo mejor que me podia pasar
            cholosquincla ❤️
          </SDialogText>

          <SDialogText id="alert-dialog-description">
            Aqui tienes tu regalito, espero que te guste amor 😊 .
          </SDialogText>
        </DialogContent>
        <SDialogActions>
          <StyledButton variant="contained" onClick={handlePresent}>
            Ver regalito
          </StyledButton>
        </SDialogActions>
      </Dialog>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
