import { Textarea, Button, LoadingOverlay } from '@mantine/core';

import { useNoteCreator } from './useNoteCreator';

export default function NoteCreator() {
  const { setValue, value, sendNote, isLoading } = useNoteCreator();

  return (
    <>
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible={isLoading} />
        <Textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          maxRows={15}
          minRows={15}
          autosize
        />
      </div>
      <Button color='teal' mt={5} onClick={sendNote} disabled={isLoading}>
        Encrypt
      </Button>
    </>
  );
}
