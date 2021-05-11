import { css, cx } from '@emotion/css';

import { Button, ButtonProps } from '../Components/Button';

export interface ContextButtonProps extends ButtonProps {
}


const pushStyle = css`
  transition: all 120ms ease-out;
`;


export function ContextButton(props: ContextButtonProps) {

  const { className } = props;

  const classes = cx(pushStyle, className);

  return (
    <Button {...props} variant={'minimal'} className={classes} />
  );
}
