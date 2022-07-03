import { useState } from 'react';
import { Container, Textarea } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import { lib } from 'crypto-js';

import { encryptValue } from './utils';

const randomPassword = lib.WordArray.random(128 / 8).toString();

const Poc = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <RichTextEditor value={value} onChange={setValue} />
      <Textarea
        value={encryptValue(value, randomPassword)}
        autosize
        maxRows={30}
        radius='xl'
        disabled
      />
    </Container>
  );
};

export default Poc;
