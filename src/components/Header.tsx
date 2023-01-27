import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { FC, useCallback, useState } from 'react';
import LeftDrawer from './LeftDrawer';

const Header: FC = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleToggleDrawer = useCallback(() => {
    setIsDrawerOpened(!isDrawerOpened);
  }, [isDrawerOpened]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleToggleDrawer}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Journey
          </Typography>
        </Toolbar>
      </AppBar>
      <LeftDrawer isOpen={isDrawerOpened} handleToggle={handleToggleDrawer} />
    </>
  );
};

export default Header;
