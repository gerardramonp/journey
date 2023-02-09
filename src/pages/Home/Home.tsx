import styled from '@emotion/styled';
import {
  StyledFullWidthImg,
  StyledPageContainer,
} from '../../components/StyledComponents';
import { Routes } from '../../routes/routes';
import homePicture from '../../assets/photos/teotihuacan.jpeg';
import TripCard from './TripCard';

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

const Home = () => {
  return (
    <StyledPageContainer>
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
