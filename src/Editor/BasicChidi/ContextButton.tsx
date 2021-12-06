import { css, cx } from '@emotion/css';

import { ButtonBase, ButtonBaseProps } from '../../Component/ButtonBase';

export interface ContextButtonProps extends ButtonBaseProps {
}


const pushStyle = css`
  transition: all 120ms ease-out;
`;


export function ContextButton(props: ContextButtonProps) {

  const { className } = props;

  const classes = cx(pushStyle, className);

  return (
    <ButtonBase {...props} className={classes} />
  );
}
