import { AppShell, Center, Container, Footer, Loader, useMantineTheme } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AppWrapper = () => {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
        root: {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
        body: {
          flex: 1,
        },
      }}
      footer={
        <Footer height={60} p='md'>
          <Container>lorem ipsum</Container>
        </Footer>
      }
    >
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
    </AppShell>
  );
};
