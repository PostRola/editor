import { css, cx } from '@emotion/css';

import { darkTide, tide } from '../theme';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';


export interface ButtonProps extends ButtonBaseProps {
  className?: string;
  variant?: 'standard';
}


const standard = css`
  padding: 0.5rem;

  color: ${tide};
  background-color: ${darkTide};
`;


const variants = { standard };


export function Button(props: ButtonProps) {
  const { variant } = props;

  const className = cx(variants[variant || 'standard'], props.className);

  return (
    <ButtonBase {...props} className={className} />
  );
}
