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
import { Link } from 'react-router-dom';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FlagRoundedIcon from '@mui/icons-material/Flag';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import { Routes } from '../routes/routes';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';

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
              component={Link}
              to={Routes.home}
              onClick={handleToggle}
            >
              <ListItemIcon>{<HomeRoundedIcon />}</ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={Routes.notes} disablePadding>
            <ListItemButton
              selected={pathName === Routes.notes}
              component={Link}
              to={Routes.notes}
              onClick={handleToggle}
            >
              <ListItemIcon>{<TextSnippetRoundedIcon />}</ListItemIcon>
              <ListItemText primary={'Notas'} />
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
                component={Link}
                to={Routes.mexicoHome}
                onClick={handleToggle}
              >
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                selected={pathName === Routes.mexicoPuebla}
                component={Link}
                to={Routes.mexicoPuebla}
                onClick={handleToggle}
              >
                <ListItemIcon>
                  <ApartmentRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Puebla" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={pathName === Routes.mexicoAcapulco}
                component={Link}
                to={Routes.mexicoAcapulco}
                onClick={handleToggle}
              >
                <ListItemIcon>
                  <ApartmentRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Acapulco" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
