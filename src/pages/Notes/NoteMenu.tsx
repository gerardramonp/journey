import { ContentPaste } from '@mui/icons-material';
import {
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC, useState } from 'react';

interface NoteMenuProps {
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const NoteMenu: FC<NoteMenuProps> = ({ isOpen, anchorEl, handleClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NoteMenu;
