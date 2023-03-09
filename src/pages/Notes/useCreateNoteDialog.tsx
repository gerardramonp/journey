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
import toast from 'react-hot-toast';

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
    setState({
      title: '',
      content: '',
    });
    setIsOpen(false);
  };

  const handleCreate = async () => {
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
        isDisplayed: true,
      };

      try {
        set(newNoteRef, newNote);
        handleClose();
      } catch (error) {
        try {
          set(newNoteRef, newNote);
          handleClose();
        } catch (error) {
          try {
            await navigator.clipboard.writeText(state.content);
            toast.error(
              'Error al crear la nota, se ha copiado en el portapapeles.'
            );
            handleClose();
          } catch (err: any) {
            toast.error(
              'Sorry, tampoco se ha podido copiar en el portapapeles. Intenta de nuevo.'
            );
          }
        }
      }
    }
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      title: e.target.value,
    });
    setIsError(false);
  };

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      content: e.target.value,
    });
    setIsError(false);
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
