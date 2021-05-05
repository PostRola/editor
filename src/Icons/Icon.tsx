import { css, cx } from '@emotion/css';
import { ReactNode } from 'react';

export interface SVGIconProps {
  className?: string;
  viewBox: string;
  children: ReactNode;
}

const style = css`
  display: inline-flex;
  align-self: center;

  width: 1rem;
  height: 1rem;
`;

export function SVGIcon(props: SVGIconProps) {
  return (
    <svg viewBox={props.viewBox} className={cx(style, props.className)}>
      {props.children}
    </svg>
  );
}
