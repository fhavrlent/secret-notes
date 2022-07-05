import { lazy, useEffect } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppWrapper } from './components/AppWrapper';

const NoteCreator = lazy(() => import('./pages/NoteCreator/NoteCreator'));

const queryClient = new QueryClient();

export const App = () => {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    setColorScheme(preferredColorScheme);
  }, [preferredColorScheme, setColorScheme]);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
          <AppWrapper>
            <NoteCreator />
          </AppWrapper>
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
