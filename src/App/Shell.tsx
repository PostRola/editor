import { AppShell, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { trimQuery } from '../util/mantine';

import { AppHeader } from './Header';
import { Navigation } from './Navigation';


export function Shell() {

  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();
  const isSmall = useMediaQuery(trimQuery(theme.fn.smallerThan('sm')));

  const headerEl = isSmall ? (
    <AppHeader
      height={48}
      opened={opened}
      setOpen={setOpened} />
  ) : undefined;

  const navbarEl = (
    <Navigation
      showLogo={!isSmall}
      p='lg'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 260, xl: 320 }} />
  );


  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint='sm'
      header={headerEl}
      navbar={navbarEl}>
        <Outlet />
    </AppShell>
  );
}
