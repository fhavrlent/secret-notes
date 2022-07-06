import { Textarea, Button, LoadingOverlay, Input, Group } from '@mantine/core';

import { useNoteCreator } from './useNoteCreator';

export default function NoteCreator() {
  const { setValue, value, sendNote, isLoading, messageUrl, copyUrl } = useNoteCreator();

  return (
    <>
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible={isLoading} />
        <Textarea
          autosize
          maxRows={15}
          minRows={15}
          onChange={(event) => setValue(event.target.value)}
          placeholder='Write your note here...'
          value={value}
        />
      </div>
      <Group mt={10} grow>
        <Group grow>
          <Button color='teal' onClick={sendNote} disabled={isLoading}>
            Encrypt
          </Button>
          <Button onClick={copyUrl}>Copy Link</Button>
        </Group>
        <Input readOnly value={messageUrl} />
      </Group>
    </>
  );
}
