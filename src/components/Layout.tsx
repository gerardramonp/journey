import styled from '@emotion/styled';

import { FC, ReactNode, useEffect, useState } from 'react';
import { bgColor } from '../assets/styles/colors';
import { Routes } from '../routes/routes';
import Header from './Header';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${bgColor};
`;

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  position: relative;
  background: ${bgColor};
  flex: 1;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isInLoginScreen, setIsInLoginScreen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;

    setIsInLoginScreen(path === Routes.login ? true : false);
  }, [window.location.pathname]);

  return (
    <StyledLayout>
      {!isInLoginScreen && <Header />}
      <StyledMainContainer>{children}</StyledMainContainer>
    </StyledLayout>
  );
};

export default Layout;
