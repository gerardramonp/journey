/* eslint-disable no-restricted-globals */
import { ContentPaste } from '@mui/icons-material';
import {
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import { FC, useState } from 'react';

const NoteMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this note?')) {
      // delete note
    }
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={handleOpenMenu}>
        <MoreVertRoundedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <EditRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <ListItemIcon>
              <DeleteRoundedIcon fontSize="small" color="error" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default NoteMenu;
