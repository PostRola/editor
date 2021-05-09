import { css, cx } from '@emotion/css';

import { Button, ButtonProps } from '../Components/Button';
import { ArrowLeftS, ArrowRightS, Close, Substract } from '../Icons';
import { tide } from '../theme';

import { ImageSize } from './Type';


export interface ImageToolsProps {
  isImage: boolean;
  isAlt: boolean;
  state: ImageSize;
  onAltToggle: () => void;
  onState: (state: ImageSize) => void;
  onRemove: () => void;
}

const altStyle = css`
  position: absolute;
  padding: 2px 4px;
  bottom: 0.75rem;
  right: 1rem;

  border: 1px solid #C1B6AC;
  border-radius: 2px;

  font-size: 0.75rem;
  color: #C1B6AC;
`;

const panelStyle = css`
  position: absolute;
  display: grid;
  top: 1rem;
  right: 1rem;

  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
`;

const actionStyle = css`
  width: 1.125rem;
  height: 1.125rem;

  transition: all 180ms ease-out;

  border-radius: 4px;
  color: ${tide};
  background: transparent;

  &:hover,
  &.active {
    color: #586477;
    background: #E6E5E7;
  }
`;

export function ImageTools(props: ImageToolsProps) {

  const { isImage, isAlt, state, onState, onAltToggle, onRemove } = props;

  return (
    <div>
      <div className='test'></div>
      <Button variant={'minimal'} className={altStyle}
        onClick={onAltToggle}>
          Alt
      </Button>
      <div className={panelStyle}>
        <SizeButton isImage={isImage}
          state={state} onToggle={onState} />
        <Button variant={'minimal'}
          className={cx(actionStyle, isImage && 'active')}
          onClick={onRemove}>
            <Close />
        </Button>
      </div>
    </div>
  );
}


export interface SizeButtonProps extends ButtonProps {
  isImage: boolean;
  state: ImageSize;
  onToggle: (size: ImageSize) => void;
}

const sizeButtonStyle = css`
  width: 3rem;
  height: 1.125rem;

  border-radius: 4px;

  color: ${tide};
  background: transparent;

  perspective: 800px;

  &:hover,
  &.active {
    color: #586477;
    background: #E6E5E7;
  }

  .svg-icon {
    transition: all 180ms ease-out;
  }

  .left { transform: rotateY(0); }
  .right { transform: rotateY(0); }
  .subtract { transform: rotateY(0); }

  &.standard {
    .left {
      transform: rotateY(180deg) translateX(-8px);
    }

    .right {
      transform: rotateY(180deg) translateX(8px);
    }

    .subtract {
      opacity: 0;
      transform: translateY(12px);
    }
  }

  &.wide {
    .left {
      transform: rotateY(0) translateX(6px);
    }

    .right {
      transform: rotateY(0) translateX(-6px);
    }

    .subtract {
      opacity: 0;
      transform: translateY(12px);
    }
  }
`;


export function SizeButton(props: SizeButtonProps) {

  const { isImage, state, onToggle } = props;

  const modified = { ...props } as Partial<SizeButtonProps>;
  delete modified.state;
  delete modified.onToggle;

  const onClick = () => {
    onToggle(state === 'standard' ? 'wide' : state === 'wide' ? 'fullwidth' : 'standard');
  };

  const classes = cx(sizeButtonStyle, state, isImage && 'active');

  return (
    <Button {...modified} variant={'minimal'} className={classes}
      onClick={onClick}>
        <ArrowLeftS className='left' />
        <Substract className='subtract' />
        <ArrowRightS className='right' />
    </Button>
  );
}
