import { Fab } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { StyledPageContainer } from '../../components/StyledComponents';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { onValue, ref } from 'firebase/database';
import { firebaseDb } from '../../firebase/config';
import NoteCard from './NoteCard';

import CreateNoteDialog from './useCreateNoteDialog';
import { generateRandomRotation } from '../../utils/generateRandomRotation';

export interface Note {
  owner: string;
  title: string;
  content: string;
  timestamp: Date;
}

const mapNotesToArray = (data: any) => {
  const notes: Note[] = [];

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const note = data[key];
      notes.push(note);
    }
  }

  return notes.sort((a, b) => (b.timestamp as any) - (a.timestamp as any));
};

const StyledFab = styled(Fab)`
  position: sticky;
  bottom: 1.25rem;
  left: 100%;
  z-index: 10;
`;

const StyledNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding: 1rem;
  row-gap: 2.5rem;
  position: relative;
`;

const Notes: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const dbNotesRef = ref(firebaseDb, 'notes');

    onValue(dbNotesRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const notes = mapNotesToArray(data);
        setNotes(notes);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <StyledPageContainer>Cargando notas...</StyledPageContainer>;
  }

  return (
    <>
      <StyledPageContainer>
        <StyledNotesContainer>
          {notes.map((note) => (
            <NoteCard
              key={`${note.timestamp}`}
              note={note}
              rotation={generateRandomRotation()}
            />
          ))}
        </StyledNotesContainer>

        <CreateNoteDialog isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </StyledPageContainer>
      <StyledFab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </StyledFab>
    </>
  );
};

export default Notes;
