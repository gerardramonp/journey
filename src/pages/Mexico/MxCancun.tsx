import React, { FC } from 'react';
import {
  StyledAccordion,
  StyledPageContainer,
  StyledPageH3,
  StyledPageH4,
  StyledPageTitle,
  StyledText,
} from '../../components/StyledComponents';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarrouselWrapper from '../../components/CarrouselWrapper';

import {
  cancunDespedidaPhotos,
  cancunPhase1Photos,
  cancunPhase2Photos,
} from './photos';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MxCancun: FC = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>Cancún</StyledPageTitle>

      <StyledPageH3>La fase 1 👨‍👨‍👧‍👦 </StyledPageH3>

      <CarrouselWrapper pictures={cancunPhase1Photos} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="fase1-content"
          id="fase1-header"
        >
          <StyledPageH4>La fase 1 - Family Trip - 👨‍👨‍👧‍👦 </StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Un family trip a Cancún, Playa del Carmen y Tulum! Donde me di el
            famoso golpe del que tanto te has reido 🤣.
          </StyledText>
          <StyledText>
            Arrancamos el viaje directos hacia la segunda maravilla del mundo
            que hemos visto hasta ahora, el <b>Chichen Itza</b>, porque la
            primera es mi bebé, no lo digo yo, lo dice wikipedia, donde le
            dijiste a tu mama que oficialmente eramos novios ya que Max te
            acorraló 🤣
          </StyledText>
          <StyledText>
            Nuestro siguiente destino fue Tallín a.k.a. Tulum. A las primeras
            playitas caribeñas que fuimos 🏝️!. Aquí comimos los que recuerdo
            como los mejores tacos de cochinita, hicimos un paseito por la playa
            cojiditos de la mano, escuchamos Boris Brejcha, vimos a una señora
            desagradable, y nos hicimos un peeling con el zargazo.
          </StyledText>
          <StyledText>
            Después nos fuimos para Bacalar, un sitio precioso donde nos llevó
            mi baby que es la mejor del mundo y que nos gustó mucho. Dimos un
            paseo en paddle surf y kayak por el lago, hicimos el monito en las
            cuerdas donde se cayó mi bebé, y dimos un tour en barquito pasando
            frío por la zona viendo los cenotes y las piedrecitas delicadas que
            no recuerdo como se llaman que no se pueden tocar porque sino se
            acaba el mundo... Tampoco te puedes echar crema solar, ni soplar al
            aire, son piedras, pero son más delicadas que yo...
          </StyledText>
          <StyledText>
            Al siguiente dia nos fuimos a Xcaret! Un parque temático donde vimos
            animalitos, NADAMOS CON TIBURONEEES, vimos tortugas gigantes,
            pasamos frio y vimos el espectáculo de la noche de la historia de
            Mexico y sus lugares, canciones y bailes tradicionales. Cabe
            destacar que ya al volver, no se encendia el coche y por suerte tu
            padre lo arregló y pudimos ir a mimir.
          </StyledText>
          <StyledText>
            Después nos tomamos un dia mas relajado para descansar en Playa del
            Carmen, y acabamos el viaje en Cancún, donde hacia un viento
            tremendo y nos fuimos a la miqueta y a comer.
          </StyledText>
        </AccordionDetails>
      </StyledAccordion>

      <StyledPageH3>La fase 2 - Nuestros dias 👩🏽‍❤️‍👨🏼 </StyledPageH3>

      <CarrouselWrapper pictures={cancunPhase2Photos} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="fase1-content"
          id="fase1-header"
        >
          <StyledPageH4>La fase 2 - Nuestros dias - 👩🏽‍❤️‍👨🏼 </StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Estos fueron nuestros dias juntos en Cancún, que pasaron gracias a
            que soy idiota y compré mal los vuelos, pero la verdad no puedo
            alegrarme más de haberla cagado en eso ❤️.
          </StyledText>
          <StyledText>
            Nos quedamos en el apartamento de Mikasa la titán, arriba de la
            Yola, nuestra provider de desayunos en la camita.
          </StyledText>
          <StyledText>
            Estos fueron unos días de los que tengo muy buenos recuerdos... Fue
            nuestra luna de miel según muchos...
          </StyledText>
          <StyledText>
            Estuvimos los 2 juntos 24/7, de vacaciones, disfrutando de estar
            juntos, yendo a la miqueta, a cenar, a comer tortas de cochinita o
            tapa-arterias o hamburguesas quesositas buenísimas, paseando por la
            ciudad, por la Isla, por la miqueta, fuimos a Isla Mujeres y me
            enseñaste los autobuses original MX hoteleshoteleshoteleshoteles!!!!
          </StyledText>
          <StyledText>
            Fue la forma perfecta de terminar el viaje, de verdad... juntos,
            solos, y disfrutándonos al 100%! De verdad fueron unos días 10/10
            con mi bebé y me alegro mucho de haber podido pasarlos contigo amor,
            los recordaré siempre ❤️.
          </StyledText>
        </AccordionDetails>
      </StyledAccordion>

      <StyledPageH3>La despedida </StyledPageH3>

      <CarrouselWrapper pictures={cancunDespedidaPhotos} />

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="fase1-content"
          id="fase1-header"
        >
          <StyledPageH4>La dura despedida...</StyledPageH4>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Un momento muy duro... Nuestra despedida no fue fácil. Habíamos
            pasado muchos días juntos y de repente estábamos separados, pero
            sabíamos que pronto volveríamos a vernos y nos fuimos con muchos
            bonitos recuerdos que vamos a tener para siempre.
          </StyledText>
          <StyledText>
            De verdad te digo amor mío que este viaje fue una de las mejores
            cosas que me ha pasado en la vida. Me alegro infinito de haberlo
            hecho por todo lo que ha significado... Ha sido de verdad un antes y
            un después y estoy 100% seguro de que siempre recordaré este viaje y
            miraré atrás y pensaré... suerte que lo hicimos, porque gracias a
            esos días, ahora estamos aquí juntos, felices, y construyendo
            nuestra vida y nuestra familia juntos ❤️.
          </StyledText>
          <StyledText>
            Te quiero mucho mi amor, y espero que te guste este pequeño resumen
            de nuestro viaje, igual que espero que sea el primero de muchos que
            hagamos juntos ❤️.
          </StyledText>
          <StyledText>
            Te amo con todo mi corazón amor mío, eres lo mejor que me ha pasado
            en la vida, y lo mejor que me va a pasar, no tengo ni una duda de
            ello ❤️.
          </StyledText>
        </AccordionDetails>
      </StyledAccordion>
    </StyledPageContainer>
  );
};

export default MxCancun;
