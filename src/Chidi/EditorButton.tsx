import { css, cx } from '@emotion/css';

import { Button, ButtonProps } from '../Components/Button';


export interface EditorButtonProps extends ButtonProps {
  pushed?: boolean;
}


const pushStyle = css`
  transition: all 120ms ease-out;

  color: #C1B6AC;

  &:focus,
  &:hover {
    background-color: #F6F5F7;
  }

  &.pushed {
    color: #A7B3C8;
    background-color: #F6F5F7;
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
