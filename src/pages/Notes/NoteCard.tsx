import styled from '@emotion/styled';
import { IconButton, Paper } from '@mui/material';
import { FC, useState } from 'react';
import formatTimeStamp from '../../utils/formatDate';
import { Note } from './Notes';

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import NoteMenu from './NoteMenu';
interface NoteCardProps {
  note: Note;
  rotation: number;
}

const brisaColor = '#A7CDF6';
const gerardColor = '#94D476';

const StyledNoteContainer = styled<any>(Paper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem;
  background-color: ${(props) => props.color};
  transform: rotate(${(props) => props.rotation}deg);
`;

const StyledNoteTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledNoteTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
`;

const StyledNoteText = styled.p`
  font-family: 'Reenie Beanie';
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
`;

const StyledNoteDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #919191;
  font-size: 1.15rem;
  font-weight: bold;
`;

const NoteCard: FC<NoteCardProps> = ({ note, rotation }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <StyledNoteContainer
      color={note.owner === 'brisa' ? brisaColor : gerardColor}
      elevation={5}
      rotation={rotation}
    >
      <StyledNoteTitleContainer>
        <StyledNoteTitle>{note.title}</StyledNoteTitle>
        <IconButton aria-label="delete" onClick={handleOpenMenu}>
          <MoreVertRoundedIcon />
        </IconButton>
        <NoteMenu
          isOpen={isMenuOpen}
          handleClose={handleCloseMenu}
          anchorEl={anchorEl}
        />
      </StyledNoteTitleContainer>
      <StyledNoteText>{note.content}</StyledNoteText>

      <StyledNoteDetails>
        <span>{note.owner.toLocaleUpperCase()}</span>
        <span>{formatTimeStamp(note.timestamp)}</span>
      </StyledNoteDetails>
    </StyledNoteContainer>
  );
};

export default NoteCard;
