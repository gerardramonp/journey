import styled from '@emotion/styled';
import { Accordion, TextField, Typography } from '@mui/material';

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

export const StyledPageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledPageH2 = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const StyledPageH3 = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.15rem;
`;

export const StyledPageH4 = styled.h4`
  font-size: 1.05rem;
`;

export const StyledFullWidthImg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledText = styled(Typography)`
  margin-bottom: 1rem;
  text-align: justify;
  width: 100%;
  font-size: 1rem;
  line-height: 1.75;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 1.25rem;
`;

export const StyledAccordion = styled(Accordion)`
  margin-bottom: 3rem;
`;

export const StyledFullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
