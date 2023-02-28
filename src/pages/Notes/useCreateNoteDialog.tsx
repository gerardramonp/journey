import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
  styled,
} from '@mui/material';
import Textarea from '@mui/joy/Textarea';

import { FC, useState } from 'react';
import { Note } from './Notes';
import { push, ref, set } from 'firebase/database';
import { firebaseDb } from '../../firebase/config';

interface CreateNoteDialogProps {
  isOpen: boolean;
  setIsOpen: any;
}

interface NewNoteForm {
  title: string;
  content: string;
}

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
`;

const CreateNoteDialog: FC<CreateNoteDialogProps> = ({ isOpen, setIsOpen }) => {
  const [state, setState] = useState<NewNoteForm>({
    title: '',
    content: '',
  });

  const [isError, setIsError] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCreate = () => {
    if (state.title === '' || state.content === '') {
      setIsError(true);
    } else {
      const notesRef = ref(firebaseDb, 'notes');
      const newNoteRef = push(notesRef);
      const newNote: Note = {
        owner: localStorage.getItem('username') || 'brisa',
        title: state.title,
        content: state.content,
        timestamp: Date.now() as any,
      };

      set(newNoteRef, newNote);
    }
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} fullWidth>
      <DialogTitle>Nueva nota</DialogTitle>
      <DialogContent>
        <StyledTextField
          autoFocus
          margin="dense"
          size="small"
          id="title"
          label="Titulo"
          type="text"
          fullWidth
          helperText={isError ? 'Faltan campos' : null}
          error={isError}
          onChange={changeTitle}
        />
        <Textarea
          minRows={4}
          maxRows={8}
          placeholder="Escribe aquí tu nota..."
          size="sm"
          onChange={changeContent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleCreate} color="primary" variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateNoteDialog;
