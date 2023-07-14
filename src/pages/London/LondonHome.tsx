import React, { FC } from 'react';
import {
  StyledPageContainer,
  StyledPageTitle,
  StyledText,
  StyledAccordion,
  StyledPageH4,
} from '../../components/StyledComponents';
import CarrouselWrapper from '../../components/CarrouselWrapper';
import { londonPhotos } from '../Mexico/photos';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LondonHome: FC = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>Londres</StyledPageTitle>
      <StyledText style={{ textAlign: 'center' }}>
        El primer pedacito de casa en meses 🏠
      </StyledText>

      <CarrouselWrapper pictures={londonPhotos} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="london-content"
          id="london-header"
        >
          <StyledPageH4>LONDRES</StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Aquí te reencontraste con tu familia después de 3 meses sin verlos!!
          </StyledText>

          <StyledText>
            Estuvimos 2 días muy intensos paseando y conociendo las calles de
            Londres junto con tu tía y Fátima.
          </StyledText>

          <StyledText>
            Vimos muchas banderas, coches de lujo, edificios bonitos, barrios
            peligrosos, cines bajo puentes y muchas cosas de Harry Potter 😍
          </StyledText>

          <StyledText>
            Y para terminar y tener nuestro momento que nos mantiene humildes
            pasamos la noche en el aeropuerto durmiendo en el suelo cuál
            vagabundos 😂
          </StyledText>
        </AccordionDetails>
      </StyledAccordion>
    </StyledPageContainer>
  );
};

export default LondonHome;
