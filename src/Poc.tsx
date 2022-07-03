import { useState } from 'react';
import { Container, Textarea } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import cryptoJs from 'crypto-js';

import { encryptValue } from './utils';

const randomPassword = cryptoJs.lib.WordArray.random(128 / 8).toString();

export const Poc = () => {
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
