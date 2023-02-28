import { Fab } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { StyledPageContainer } from '../../components/StyledComponents';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { onValue, push, ref, set } from 'firebase/database';
import { firebaseDb } from '../../firebase/config';
import NoteCard from './NoteCard';

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

  return notes;
};

const StyledFab = styled(Fab)`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
`;

const StyledNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-y: scroll;
  row-gap: 1.5rem;
`;

const Notes: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<Note[]>([]);

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
    <StyledPageContainer>
      <StyledNotesContainer>
        {notes.map((note) => (
          <NoteCard key={`${note.timestamp}`} note={note} />
        ))}
      </StyledNotesContainer>

      <StyledFab color="primary" aria-label="add" onClick={() => {}}>
        <AddIcon />
      </StyledFab>
    </StyledPageContainer>
  );
};

export default Notes;
