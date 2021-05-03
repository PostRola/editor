import { css, cx } from '@emotion/css';
import { ChangeEvent, KeyboardEvent } from 'react';


export interface EditorTitleProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onCommit: () => void;
}

const fontStyle = css`
  font-family: inherit;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.15em;
`;

const rootStyle = css`
  position: relative;
  ${fontStyle};
`;

const divStyle = css`
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


export function EditorTitle(props: EditorTitleProps) {

  const { className, value, onCommit } = props;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value);
  };

  const onKeyboard = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onCommit();
    }
  };

  const placeholder = 'Post Title';

  const classes = cx('chidi__title', rootStyle, className);

  return (
    <div className={classes}>
      <textarea className={textStyle} placeholder={placeholder}
        value={value} onChange={onChange} onKeyDown={onKeyboard} />
      <div className={divStyle}>{value || placeholder}</div>
    </div>
  );
}
