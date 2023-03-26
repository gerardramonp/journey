import styled from '@emotion/styled';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StyledFullWidthContainer } from './StyledComponents';

interface CarrouselWrapperProps {
  pictures: string[];
}

const StyledCarrousel = styled(Carousel)`
  .thumb {
    img {
      height: 100px;
    }
  }
`;

const StyledCarrouselImageContainer = styled.div`
  img {
    border-radius: 0.25rem;
    height: 450px;
    object-fit: cover;
  }
`;

const CarrouselWrapper: FC<CarrouselWrapperProps> = ({ pictures }) => {
  return (
    <StyledFullWidthContainer className="carrousel-wrapper">
      <StyledCarrousel autoPlay infiniteLoop>
        {pictures.map((picture, index) => (
          <StyledCarrouselImageContainer
            className="carrousel-image-wrapper"
            key={`carrousel-pic-${index}`}
          >
            <img
              src={picture}
              alt="carrouselpic"
              style={{
                borderRadius: '0.25rem',
              }}
            />
          </StyledCarrouselImageContainer>
        ))}
      </StyledCarrousel>
    </StyledFullWidthContainer>
  );
};

export default CarrouselWrapper;
