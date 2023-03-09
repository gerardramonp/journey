import styled from '@emotion/styled';

import { FC, ReactNode, useEffect, useState } from 'react';
import { bgColor } from '../assets/styles/colors';
import { Routes } from '../routes/routes';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${bgColor};
  overflow: auto;
`;

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  position: relative;
  background: ${bgColor};
  width: 100%;
  flex: 1;
  height: calc(100vh - 4rem);
  overflow: auto;

  @media (min-width: 768px) {
    max-width: 450px;
    margin: auto;
  }
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
    <StyledLayout className="layout">
      {!isInLoginScreen && <Header />}
      <StyledMainContainer>{children}</StyledMainContainer>
      <Toaster position="top-center" />
    </StyledLayout>
  );
};

export default Layout;
