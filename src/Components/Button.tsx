import { css, cx } from '@emotion/css';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type BaseButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends BaseButtonProps {
  variant?: 'minimal';
}


const base = css`
  display: inline-flex;
  padding: 0;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  background: transparent;
  color: inherit;

  font-family: inherit;
  font-size: inherit;
`;

export const minimal = css`
  ${base};

  outline: none;
  border: none;
`;


export function Button(props: ButtonProps) {
  const { variant, className } = props;

  const classes = cx(base, variant === 'minimal' && minimal, className);

  return (
    <button {...props} className={classes} />
  );
}
