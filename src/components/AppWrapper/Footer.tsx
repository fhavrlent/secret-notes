import { Container, Footer as FooterComponent, Anchor } from '@mantine/core';
import { BrandGithub } from 'tabler-icons-react';

export const Footer = () => {
  return (
    <FooterComponent height={60} p='md'>
      <Container>
        <Anchor href='https://github.com/fhavrlent/secret-notes' target='_blank'>
          <BrandGithub />
        </Anchor>
      </Container>
    </FooterComponent>
  );
};
