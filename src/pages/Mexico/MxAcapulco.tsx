import {
  StyledAccordion,
  StyledPageContainer,
  StyledPageH3,
  StyledPageH4,
  StyledPageTitle,
  StyledText,
} from '../../components/StyledComponents';

import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarrouselWrapper from '../../components/CarrouselWrapper';
import { acapulcoPhotos } from './photos';

const MxAcapulco = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>Acapulco</StyledPageTitle>

      <StyledText>El origen de la miqueta</StyledText>

      <StyledPageH3>Los first tacosss!! 🌮</StyledPageH3>

      <CarrouselWrapper pictures={acapulcoPhotos} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="llegada-content"
          id="llegada-header"
        >
          <StyledPageH4>La llegada</StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>Donde comimos los primeros tacooos !!</StyledText>
          <StyledText>
            Realmente hicimos muuuuchas cosas! Aqui fue donde me llevaste a
            conocer todos tus origenes y donde definitivamente me terminaste de
            conquistar.
          </StyledText>
          <StyledText>
            Pasamos nuestras tardes en el club y el pulpo, comimos tacos, me
            presentaste a tus amigos y amigas, a tu familia... comimos tu
            esquite favorito en el mundo, vimos la quebrada, fuimos a hacer las
            compras del club juntitooos, el cumple de Max, nuestra tan querida
            miqueta que siempre vamos a recordar...
          </StyledText>
          <StyledText>
            A parte, fuimos a la boda de tu amiga Ana, donde pasó uno de los
            mayores eventos en la historia de la humanidad.... Gerard Ramon
            Monte COMIÓ PESCADO 😱😱😱😱!!!!!!!!!
          </StyledText>
          <StyledText>
            Fue un sitio muy especial que nos unió mucho y donde pasamos unos
            dias muy bonitos ❤️
          </StyledText>
        </AccordionDetails>
      </StyledAccordion>
    </StyledPageContainer>
  );
};

export default MxAcapulco;
