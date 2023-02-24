import styled from '@emotion/styled';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StyledFullWidthContainer } from './StyledComponents';

interface CarrouselWrapperProps {
  pictures: string[];
}

const CarrouselWrapper: FC<CarrouselWrapperProps> = ({ pictures }) => {
  return (
    <StyledFullWidthContainer className="carrousel-wrapper">
      <Carousel autoPlay infiniteLoop>
        {pictures.map((picture) => (
          <div>
            <img
              src={picture}
              alt="carrouselpic"
              style={{ borderRadius: '0.25rem' }}
            />
          </div>
        ))}
      </Carousel>
    </StyledFullWidthContainer>
  );
};

export default CarrouselWrapper;
