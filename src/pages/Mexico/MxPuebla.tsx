import {
  StyledAccordion,
  StyledPageContainer,
  StyledPageH3,
  StyledPageH4,
  StyledPageTitle,
  StyledText,
} from '../../components/StyledComponents';
import homePicture from '../../assets/photos/mexico/home/teotihuacan.jpeg';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarrouselWrapper from '../../components/CarrouselWrapper';
import { teotihuacanPhotos } from './photos';

console.log(teotihuacanPhotos);

const cholulaPictures = [homePicture];

const MxPuebla = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>Puebla</StyledPageTitle>

      <StyledText>
        La first destination... donde por fin nos volvimos a ver 🐵
      </StyledText>

      <StyledPageH3>Cholula 🔔</StyledPageH3>

      <CarrouselWrapper pictures={cholulaPictures} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="cholula-content"
          id="cholula-header"
        >
          <StyledPageH4>Cholula 🔔</StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Fuimos a comer a un restaurante MUY mexicano con Sara, Max, Kevin y
            su amiga ____ (no nos sabemos el nombre) 🤣.
          </StyledText>

          <StyledText>
            También visitamos la piramide donde Brisa hizo todo el deporte del
            año, comimos grillos y algunos dulces tipicos de la zona.
          </StyledText>
        </AccordionDetails>
      </StyledAccordion>

      <StyledPageH3>Pirámides de Teotihuacán</StyledPageH3>

      <CarrouselWrapper pictures={teotihuacanPhotos} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="teotihuacan-content"
          id="teotihuacan-header"
        >
          <StyledPageH4>Teotihuacan 🐆</StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Un lugar muy bonito e histórico donde fuimos de excursion con Max y
            Sara acompañados de nuestro pasional guia 🤣
          </StyledText>

          <StyledText>
            Ahí conocimos a nuestro gran amigo <b>scholoquincle</b> y vimos la
            increible artesania de los juguetes sexuales de obsidiana, o lo que
            pudimos, ya que que Max nos dejó ciegos con el polvo de la moto
          </StyledText>

          <StyledText>Ah, y también a nuestro cachorrito Pancho...</StyledText>
        </AccordionDetails>
      </StyledAccordion>
    </StyledPageContainer>
  );
};

export default MxPuebla;
