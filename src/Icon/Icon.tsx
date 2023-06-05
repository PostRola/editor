import { createStyles, MantineSize, MantineSizes } from '@mantine/styles';
import { ReactNode } from 'react';

import * as icons from './index';


export interface BaseIconProps {
  className?: string;
  title?: string;
  size?: MantineSize;
}

export interface SVGIconProps extends BaseIconProps {
  viewBox: string;
  children: ReactNode;
}


export type IconSet = keyof typeof icons;

const useStyles = createStyles((theme) => ({
  root: {
    display: 'inline-flex',
    height: 'auto',

    alignSelf: 'center',

    fill: 'currentColor'
  }
}));


const sizes: MantineSizes = {
  xs: '12',
  sm: '16',
  md: '20',
  lg: '24',
  xl: '32',
};

export function SVGIcon(props: SVGIconProps) {

  const { children, viewBox, className, size, title } = props;

  const { classes, cx } = useStyles();

  const width = sizes[size ?? 'sm'];

  return (
    <svg
      viewBox={viewBox}
      className={cx('svg-icon', classes.root, className)}
      width={width}>
        {title ? <title>{title}</title> : null}
        {children}
    </svg>
  );
}

export interface IconProps extends BaseIconProps {
  name: IconSet;
};


export function Icon(props: IconProps) {

  const { name, className, title, size } = props;

  const IconElm = icons[name];

  return (
    <IconElm className={className} title={title} size={size} />
  );
}
