import {
  ActionIcon,
  Container,
  Group,
  Header as HeaderComponent,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { MoonStars, Sun } from 'tabler-icons-react';

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const isDarkColorScheme = colorScheme === 'dark';

  return (
    <HeaderComponent height={60}>
      <Container style={{ height: '100%' }}>
        <Group sx={{ height: '100%' }} px={20} position='apart'>
          <Link to='/' typeof='text' style={{ color: 'inherit', textDecoration: 'none' }}>
            <Title>Secret Notes</Title>
          </Link>
          <ActionIcon
            variant='default'
            onClick={() => toggleColorScheme()}
            size={30}
            title={isDarkColorScheme ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkColorScheme ? <Sun size={16} /> : <MoonStars size={16} />}
          </ActionIcon>
        </Group>
      </Container>
    </HeaderComponent>
  );
};
