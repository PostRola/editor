import { createStyles, Group } from '@mantine/core';
import { ReactNode } from 'react';
import { To, Link } from 'react-router-dom';

import { Icon, IconSet } from '../Icon/Icon';


export interface NavLinkProps {
  children: ReactNode;
  icon?: IconSet;
  to: To;
  size?: 'md' | 'lg';
}


const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    padding: '0.25rem 0.5rem',

    color: theme.colors.gray[9],
    textDecoration: 'none',

    '&:hover': {
      background: theme.colors.gray[2]
    }
  }
}));


export function NavLink(props: NavLinkProps) {

  const { children, icon, to, size } = props;
  const { classes } = useStyles();

  return (
    <Link className={classes.link} to={to}>
      <Group align='center' spacing='md'>
        {icon && <Icon size={size || 'md'} name={icon} />}
        {children}
      </Group>
    </Link>
  );
}
