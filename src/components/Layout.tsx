import styled from '@emotion/styled';

import { FC, ReactNode, useCallback, useState } from 'react';
import Header from './Header';
import LeftDrawer from './LeftDrawer';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
`;

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  position: relative;
  background: #f5f5f5;
  flex: 1;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledMainContainer>{children}</StyledMainContainer>
    </StyledLayout>
  );
};

export default Layout;
