import { css, cx } from '@emotion/css';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';


export type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonBaseProps extends DefaultButtonProps {}


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

export function ButtonBase(props: ButtonBaseProps) {
  const { className } = props;

  return (
    <button {...props} className={cx(base, className)} />
  );
}
