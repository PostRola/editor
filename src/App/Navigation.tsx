import { createStyles, Group, Navbar, NavbarProps, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { Rano } from '../Icon/logo';
import { darkTide } from '../theme';
import { omit } from '../util/fn';
import { NavLink } from './NavLink';


export type NavigationProps = Omit<NavbarProps, 'children'> & { showLogo: boolean; };


const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.gray[0]
  },
  logoLink: {
    display: 'inline-flex'
  },
  logo: {
    color: darkTide
  },
  footer: {
    paddingTop: '1.25rem',
    borderTop: `1px solid ${theme.colors.gray[2]}`
  }
}));


export function Navigation(props: NavigationProps) {

  const { showLogo } = props;
  const { classes } = useStyles();

  const navProps = omit(['showLogo'], props);

  return (
    <Navbar {...navProps} className={classes.root}>
      {showLogo && (
        <Navbar.Section mb='lg'>
          <Link className={classes.logoLink} to='/'>
            <Rano className={classes.logo} />
          </Link>
        </Navbar.Section>
      )}

      <Navbar.Section grow>
        <Group direction='column' spacing={48} grow>
          <NavLink to='/' icon='Dashboard'>
            <Text>Dashboard</Text>
          </NavLink>

          <Group direction='column' spacing='xs' grow>
            <NavLink to='/posts' icon='Article'>
              <Text>Posts</Text>
            </NavLink>
            <NavLink to='/tags' icon='PriceTag3'>
              <Text>Tags</Text>
            </NavLink>
          </Group>
        </Group>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <NavLink to='/settings' icon='Settings2' size='lg'>
          <Text>
            Settings
          </Text>
        </NavLink>
      </Navbar.Section>
    </Navbar>
  );
}
