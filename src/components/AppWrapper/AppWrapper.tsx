import { Suspense } from 'react';
import {
  ActionIcon,
  AppShell,
  Center,
  Container,
  Footer,
  Group,
  Header,
  Loader,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Sun, MoonStars } from 'tabler-icons-react';

export const AppWrapper = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const isDarkColorScheme = colorScheme === 'dark';

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
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position='apart'>
            <Title>Secret Notes</Title>
            <ActionIcon
              variant='default'
              onClick={() => toggleColorScheme()}
              size={30}
              title={isDarkColorScheme ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkColorScheme ? <Sun size={16} /> : <MoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
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
