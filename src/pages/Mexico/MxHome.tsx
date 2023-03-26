import {
  StyledFullWidthImg,
  StyledPageContainer,
  StyledPageTitle,
  StyledText,
} from '../../components/StyledComponents';
import homePicture from '../../assets/photos/mexico/home/teotihuacan.jpeg';

const MxHome = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>México</StyledPageTitle>
      <StyledFullWidthImg src={homePicture} alt="mx" />
      <StyledText style={{ textAlign: 'center' }}>
        El viaje que lo empezó todo ❤️
      </StyledText>
    </StyledPageContainer>
  );
};

export default MxHome;
