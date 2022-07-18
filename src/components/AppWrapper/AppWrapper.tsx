import { AppShell, useMantineTheme } from '@mantine/core';

import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

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
      header={<Header />}
      footer={<Footer />}
    >
      <Content />
    </AppShell>
  );
};
