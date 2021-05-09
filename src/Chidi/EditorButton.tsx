import { css, cx } from '@emotion/css';

import { Button, ButtonProps } from '../Components/Button';
import { darkTide, whiteLilac } from '../theme';


export interface EditorButtonProps extends ButtonProps {
  pushed?: boolean;
}


const pushStyle = css`
  transition: all 120ms ease-out;

  color: #C1B6AC;

  &:focus,
  &:hover {
    background-color: ${whiteLilac};
  }

  &.pushed {
    color: ${darkTide};
    background-color: ${whiteLilac};
  }
`;


export function EditorButton(props: EditorButtonProps) {

  const { pushed, className } = props;

  const classes = cx(pushStyle, pushed && 'pushed', className);

  const modified = { ...props };
  delete modified.pushed;

  return (
    <Button {...modified} variant={'minimal'} className={classes} />
  );
}
