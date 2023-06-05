import { css, cx } from '@emotion/css';
import { ActionIcon, ActionIconProps, Tooltip } from '@mantine/core';

import { Icon, IconSet } from '../../Icon/Icon';
import { darkTide, whiteLilac } from '../../theme';


export interface EditorButtonProps {
  pushed?: boolean;
  title?: string;
  icon: IconSet;

  onClick?: () => void;
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


export function EditorIconButton(props: EditorButtonProps) {

  const { icon, pushed, title, onClick } = props;

  const classes = cx(pushStyle, pushed && 'pushed');
  const variant: ActionIconProps['variant'] = pushed ? 'filled' : 'transparent';

  return (
    <Tooltip
      label={title}
      withArrow>
        <ActionIcon
          radius={0}
          variant={variant}
          size='xl'
          title={title}
          onClick={onClick}>
            <Icon name={icon} size='sm' />
        </ActionIcon>
    </Tooltip>
  );
}
