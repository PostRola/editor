import { css, cx } from '@emotion/css';

import { ButtonBase, ButtonBaseProps } from '../../Components/ButtonBase';
import { ArrowLeftS, ArrowRightS, Close, Substract } from '../../Icon';
import { tide } from '../../theme';

import { ImageSize } from '../Type';


export interface ImageToolsProps {
  isImage: boolean;
  isAlt: boolean;
  isSelected: boolean;
  size: ImageSize;
  onAltToggle: () => void;
  onSize: (state: ImageSize) => void;
  onRemove: () => void;
}

const altStyle = css`
  position: absolute;
  padding: 2px 4px;
  bottom: 14px;
  right: 1rem;

  border: 1px solid currentColor;
  border-radius: 2px;

  font-size: 0.75rem;
  font-weight: 500;
  color: ${tide};

  &.active {
    /* background: ${tide}; */
    color: #586477;
    border-color: currentColor;
    background: #E6E5E7;
  }
`;

const panelStyle = css`
  position: absolute;
  display: grid;

  top: 1rem;
  right: 1rem;

  grid-gap: 1rem;

  &.isImage {
    top: -1.5rem;
    left: 50%;
    right: initial;

    grid-template-columns: auto auto;

    transform: translateX(-50%);
  }
`;

const closeStyle = css`
  width: 1.25rem;
  height: 1.25rem;

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

  const { isImage, isAlt, isSelected, size, onSize, onAltToggle, onRemove } = props;

  return (
    <div>
      <ButtonBase className={cx(altStyle, isAlt && 'active')}
        onClick={onAltToggle}>
          Alt
      </ButtonBase>
      <div className={cx(panelStyle, isImage && 'isImage')}>
        {isImage && isSelected && (
          <SizeButton isImage={isImage}
            state={size} onToggle={onSize} />)}

        {(!isImage || (isImage && isSelected)) && (
          <ButtonBase
            className={cx(closeStyle, isImage && 'active')}
            onClick={onRemove}>
              <Close />
          </ButtonBase>)}
      </div>
    </div>
  );
}


export interface SizeButtonProps extends ButtonBaseProps {
  isImage: boolean;
  state: ImageSize;
  onToggle: (size: ImageSize) => void;
}

const sizeButtonStyle = css`
  width: 3rem;
  height: 1.25rem;

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
  delete modified.isImage;

  const onClick = () => {
    onToggle(state === 'standard' ? 'wide' : state === 'wide' ? 'fullwidth' : 'standard');
  };

  const classes = cx(sizeButtonStyle, state, isImage && 'active');

  return (
    <ButtonBase {...modified} className={classes}
      onClick={onClick}>
        <ArrowLeftS className='left' />
        <Substract className='subtract' />
        <ArrowRightS className='right' />
    </ButtonBase>
  );
}
