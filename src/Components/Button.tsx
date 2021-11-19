import { css, cx } from '@emotion/css';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { darkTide, tide } from '../theme';


export type BaseButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends BaseButtonProps {
  variant?: 'standard' | 'minimal';
}


const base = css`
  display: inline-flex;
  padding: 0;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: none;
  background: transparent;
  color: inherit;
  outline: none;

  font-family: inherit;
  font-size: inherit;
`;

const minimal = css`
  ${base};

`;

const standard = css`
  ${base};

  padding: 0.5rem;
  height: 36px;

  color: ${tide};
  background-color: ${darkTide};
`;

const variants = { minimal, standard };


export function Button(props: ButtonProps) {
  const { variant, className } = props;

  const classes = cx(base, variants[variant || 'standard'], className);

  return (
    <button {...props} className={classes} />
  );
}
