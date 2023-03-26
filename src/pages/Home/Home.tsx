import styled from '@emotion/styled';
import {
  StyledFullWidthImg,
  StyledPageContainer,
} from '../../components/StyledComponents';
import { Routes } from '../../routes/routes';
import homePicture from '../../assets/photos/mexico/home/random.jpg';
import TripCard from './TripCard';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';

const StyledTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const StyledDestinationsTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const StyledFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  align-items: center;
`;

const Home = () => {
  return (
    <StyledPageContainer>
      <StyledTitle>Nuestra miqueta</StyledTitle>
      <StyledFullWidthImg src={homePicture} alt="home-img" />

      <StyledDestinationsTitle>Choose destination</StyledDestinationsTitle>

      <StyledFeaturesContainer>
        <TripCard
          icon={<NoteAddRoundedIcon fontSize="large" />}
          title="Notas"
          path={Routes.notes}
        />
        <TripCard countryCode="MX" title="Mexico" path={Routes.mexicoHome} />
      </StyledFeaturesContainer>
    </StyledPageContainer>
  );
};

export default Home;
