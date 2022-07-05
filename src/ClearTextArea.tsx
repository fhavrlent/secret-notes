import { useState } from 'react';
import { Textarea } from '@mantine/core';

const ClearTextArea = () => {
  const [value, setValue] = useState('');

  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.target.value)}
      maxRows={15}
      minRows={15}
      autosize
    />
  );
};

export default ClearTextArea;
