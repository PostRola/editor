import { css, cx } from '@emotion/css';
import { ChangeEvent, KeyboardEvent } from 'react';


export interface TitleProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onCommit: () => void;
}

const fontStyle = css`
  font-family: inherit;
  font-size: 3rem;
  font-weight: 200;
  line-height: 1.15em;
`;

const rootStyle = css`
  position: relative;
  padding-bottom: 1rem;

  border-bottom: 1px solid #EEEEEE;

  ${fontStyle};
`;

const hiddenTextStyle = css`
  visibility: hidden;
  opacity: 0;

  font: inherit;
  white-space: pre-wrap;
`;

const textStyle = css`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  z-index: 1;
  overflow: hidden;

  border: 0;
  outline: 0;
  resize: none;

  background-color: transparent;
  font: inherit;
`;


export function Title(props: TitleProps) {

  const { className, value, onCommit } = props;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value);
  };

  const onKeyboard = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      onCommit();
    } else if (e.key === 'ArrowRight') {
      const target = e.target as HTMLTextAreaElement;

      if (value.length === target.selectionStart) {
        e.preventDefault();
        onCommit();
      }
    }
  };

  const placeholder = 'Post Title';
  const classes = cx('chidi__title', rootStyle, className);

  return (
    <div className={classes}>
      <textarea className={textStyle} placeholder={placeholder}
        value={value} onChange={onChange} onKeyDownCapture={onKeyboard} />
      <div className={hiddenTextStyle}>{value || placeholder}</div>
    </div>
  );
}
