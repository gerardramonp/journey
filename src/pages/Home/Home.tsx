import styled from '@emotion/styled';
import {
  StyledFullWidthImg,
  StyledPageContainer,
} from '../../components/StyledComponents';
import { Routes } from '../../routes/routes';
import homePicture from '../../assets/photos/teotihuacan.jpeg';
import TripCard from './TripCard';
import {
  Button,
  DialogContentText,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const StyledDestinationsTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const StyledTripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  align-items: center;
`;

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

const Home = () => {
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
    <StyledPageContainer>
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
      <StyledTitle>Placeholder title</StyledTitle>
      <StyledFullWidthImg src={homePicture} alt="home-img" />

      <StyledDestinationsTitle>Choose destination</StyledDestinationsTitle>

      <StyledTripsContainer>
        <TripCard countryCode="MX" title="Mexico" path={Routes.mexicoHome} />
      </StyledTripsContainer>
    </StyledPageContainer>
  );
};

export default Home;
