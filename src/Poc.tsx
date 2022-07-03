import { useState } from 'react';
import { Container, Textarea } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import cryptoJs from 'crypto-js';

const randomPassword = cryptoJs.lib.WordArray.random(128 / 8).toString();

const encryptValue = (value: string, password: string) =>
  cryptoJs.AES.encrypt(value, password).toString();

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
