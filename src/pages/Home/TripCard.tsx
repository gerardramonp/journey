import { FC } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import { cardBgColor } from '../../assets/styles/colors';

const StyledTripCardContainer = styled(NavLink)`
  display: flex;
  width: 80%;
  justify-content: center;
  padding: 1rem 1rem;
  border-radius: 1rem;
  border: 1px solid black;
  align-items: center;
  text-decoration: none;
  background-color: ${cardBgColor};
`;

const StyledFlag = styled.img`
  width: 2.5rem;
  margin-right: 2.5rem;
`;

const StyledTripText = styled.span`
  font-weight: 500;
  color: black;
  font-size: 1.75rem;
`;

interface TripCardProps {
  title: string;
  countryCode: string;
  path: Routes;
}

const TripCard: FC<TripCardProps> = ({ title, countryCode, path }) => {
  return (
    <StyledTripCardContainer to={path}>
      <StyledFlag
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
        alt={countryCode}
      />
      <StyledTripText>{title}</StyledTripText>
    </StyledTripCardContainer>
  );
};

export default TripCard;
