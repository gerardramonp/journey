import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC, useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { StarBorder } from '@mui/icons-material';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FlagRoundedIcon from '@mui/icons-material/Flag';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import { Routes } from '../routes/routes';

interface LeftDrawerProps {
  isOpen: boolean;
  handleToggle: () => void;
}
const LeftDrawer: FC<LeftDrawerProps> = ({ isOpen, handleToggle }) => {
  const [isMexicoOpen, setIsMexicoOpen] = useState(true);

  const handleClickMexico = () => {
    setIsMexicoOpen(!isMexicoOpen);
  };

  const pathName = window.location.pathname;

  return (
    <Drawer anchor="left" open={isOpen} onClose={handleToggle}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem key={Routes.home} disablePadding>
            <ListItemButton
              selected={pathName === Routes.home}
              component="a"
              href={Routes.home}
            >
              <ListItemIcon>{<HomeRoundedIcon />}</ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={handleClickMexico}>
            <ListItemIcon>
              <FlagRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Mexico" />
            {isMexicoOpen ? (
              <ExpandLessRoundedIcon />
            ) : (
              <ExpandMoreRoundedIcon />
            )}
          </ListItemButton>

          <Collapse in={isMexicoOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={pathName === Routes.mexicoHome}
                component="a"
                href={Routes.mexicoHome}
              >
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={pathName === Routes.mexicoPuebla}
                component="a"
                href={Routes.mexicoPuebla}
              >
                <ListItemIcon>
                  <ApartmentRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Puebla" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
