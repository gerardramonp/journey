import styled from '@emotion/styled';
import {
  StyledAccordion,
  StyledFullWidthImg,
  StyledPageContainer,
  StyledPageH4,
} from '../../components/StyledComponents';
import { Routes } from '../../routes/routes';
import homePicture from '../../assets/photos/mexico/home/random.jpg';
import TripCard from './TripCard';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import mxFlag from '../../assets/flags/mxflag.jpg';
import { Link } from 'react-router-dom';

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

const StyledHomeAccordion = styled(StyledAccordion)`
  width: 80%;
  margin-bottom: 3rem;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  display: flex;
  align-items: center;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

const StyledFlag = styled.img`
  width: 2.5rem;
  border-radius: 0.15rem;
  margin-right: 1.5rem;
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
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
        <StyledHomeAccordion defaultExpanded={true}>
          <StyledAccordionSummary
            className="accordion-summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="mx-content"
            id="mx-header"
          >
            <StyledFlag src={mxFlag} alt={'mx'} />
            <StyledPageH4>Mexico</StyledPageH4>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <StyledLink to={Routes.mexicoPuebla}>Puebla</StyledLink>
            <StyledLink to={Routes.mexicoAcapulco}>Acapulco</StyledLink>
            <StyledLink to={Routes.mexicoCancun}>Cancún</StyledLink>
          </StyledAccordionDetails>
        </StyledHomeAccordion>
      </StyledFeaturesContainer>
    </StyledPageContainer>
  );
};

export default Home;
