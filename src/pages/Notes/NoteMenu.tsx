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
  anchor: HTMLElement | null;
}

const NoteMenu: FC<NoteMenuProps> = ({ anchor }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
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
          <ListItemText>Paste</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NoteMenu;
