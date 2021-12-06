import { Burger, Header, useMantineTheme, HeaderProps, Group } from '@mantine/core';

import { Rano } from '../Icon/logo';


export type AppHeaderProps = Omit<HeaderProps, 'children'> & {
  opened: boolean;
  setOpen: (value: boolean) => void;
}


export function AppHeader(props: AppHeaderProps) {

  const theme = useMantineTheme();
  const { fixed, height, opened, setOpen } = props;

  return (
    <Header fixed={fixed} height={height} padding='xs'>
      <Group spacing='lg'>
        <Burger
          opened={opened}
          onClick={() => setOpen(!opened)}
          size='sm'
          color={theme.colors.gray[6]} />
        <Rano />
      </Group>
    </Header>
  );
}
