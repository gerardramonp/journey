import {
  StyledAccordion,
  StyledPageContainer,
  StyledPageH3,
  StyledPageH4,
  StyledPageTitle,
  StyledText,
} from '../../components/StyledComponents';
import homePicture from '../../assets/photos/teotihuacan.jpeg';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarrouselWrapper from '../../components/CarrouselWrapper';

const cholulaPictures = [homePicture];

const MxAcapulco = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>Acapulco</StyledPageTitle>

      <StyledText>El origen de la miqueta</StyledText>

      <StyledPageH3>Los first tacosss!! 🌮</StyledPageH3>

      <CarrouselWrapper pictures={cholulaPictures} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="acapulco-content"
          id="acapulco-header"
        >
          <StyledPageH4>Acapulco</StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>Donde comimos los primeros tacooos !!</StyledText>
        </AccordionDetails>
      </StyledAccordion>
    </StyledPageContainer>
  );
};

export default MxAcapulco;
