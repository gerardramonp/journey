import { FC } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import { cardBgColor } from '../../assets/styles/colors';

const StyledTripCardContainer = styled(NavLink)`
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-radius: 1rem;
  border: 1px solid black;
  align-items: center;
  text-decoration: none;
  background-color: ${cardBgColor};
`;

const StyledLeftContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
`;

const StyledRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-left: 2.5rem;
`;

const StyledFlag = styled.img`
  width: 2.5rem;
`;

const StyledIconContainer = styled.div`
  color: #1876d1;
  width: 2.5rem;
  display: flex;
  justify-content: center;
`;
const StyledTripText = styled.span`
  font-weight: 500;
  color: black;
  font-size: 1.75rem;
`;

interface TripCardProps {
  title: string;
  path: Routes;
  countryCode?: string;
  icon?: React.ReactNode;
}

const TripCard: FC<TripCardProps> = ({ title, countryCode, path, icon }) => {
  return (
    <StyledTripCardContainer to={path}>
      <StyledLeftContainer>
        {countryCode && (
          <StyledFlag
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
            alt={countryCode}
          />
        )}
        {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledTripText>{title}</StyledTripText>
      </StyledRightContainer>
    </StyledTripCardContainer>
  );
};

export default TripCard;
