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


export interface PushButtonProps extends ButtonProps {
  pushed?: boolean;
}


const pushStyle = css`

  transition: all 120ms ease-out;

  &.pushed {
    background-color: #EEEEEE;
  };

  &:focus,
  &:hover {
    background-color: #F1F3F4;
  }
`;


export function PushButton(props: PushButtonProps) {

  const { pushed, className } = props;

  const classes = cx(pushStyle, pushed && 'pushed', className);

  const modified = { ...props };
  delete modified.pushed;

  return (
    <Button {...modified} variant={'minimal'} className={classes} />
  );
}
