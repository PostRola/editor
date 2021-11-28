import { css, cx } from '@emotion/css';

import { ButtonBase, ButtonBaseProps } from '../../Components/ButtonBase';
import { darkTide, whiteLilac } from '../../theme';


export interface EditorButtonProps extends ButtonBaseProps {
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
    <ButtonBase {...modified} className={classes} />
  );
}
