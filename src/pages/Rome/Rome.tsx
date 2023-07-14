import { AccordionSummary, AccordionDetails } from '@mui/material';
import React, { FC } from 'react';
import CarrouselWrapper from '../../components/CarrouselWrapper';
import {
  StyledPageContainer,
  StyledPageTitle,
  StyledText,
  StyledAccordion,
  StyledPageH4,
} from '../../components/StyledComponents';
import { romePhotos } from '../Mexico/photos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface RomeProps {}

const Rome: FC<RomeProps> = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>Roma</StyledPageTitle>
      <StyledText style={{ textAlign: 'center' }}>
        Piza 🍕 Pasta 🍝 y Gelatto 🍦
      </StyledText>

      <CarrouselWrapper pictures={romePhotos} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="rome-content"
          id="rome-header"
        >
          <StyledPageH4>ROMA</StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Aquí nos encontramos con Sara y Omar! Nuestra family mexicana wey
            🇲🇽!
          </StyledText>
          <StyledText>
            En Roma visitamos los lugares más importantes: el Coliseo, la
            Fontana di Trevi, el Vaticano y sus callecitas sucias.
          </StyledText>
          <StyledText>
            Tambien porfin pudimos probar las pizzas y pastas originales de
            Italy y comimos helados deliciosos 🤤. ¡La comida italiana, como
            dice Omar, es awesome!
          </StyledText>
        </AccordionDetails>
      </StyledAccordion>
    </StyledPageContainer>
  );
};

export default Rome;
