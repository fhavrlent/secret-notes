import { Suspense } from 'react';
import { Center, Container, Loader } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const Content = () => (
  <Container>
    <Suspense
      fallback={
        <Container>
          <Center style={{ height: '100vh' }}>
            <Loader />
          </Center>
        </Container>
      }
    >
      <Outlet />
    </Suspense>
  </Container>
);
