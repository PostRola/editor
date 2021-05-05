import { css, cx } from '@emotion/css';
import { Editor } from '@tiptap/react';

import { Button, PushButton } from '../Components/Button';
import {
  Bold, Italic, Underline, Strikethrough,
  H2, H3, CodeView, SingleQuote, DoubleQuote,
  ListOrdered, ListUnordered
 } from '../Icons';

export interface InlineToolbarProps {
  className?: string;
  editor: Editor | null;
}

const rootStyle = css`
  display: flex;

  background-color: rgba(248, 248, 248, 0.95);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
`;

const rowStyle = css`
  display: flex;
`;

const buttonStyle = css`
  width: 2.25rem;
  height: 2.25rem;
`;

const edgeStyle = css`
  border-left: 1px solid #E0E0E0;
`;

const iconStyle = css`
  width: 1rem;
  height: 1rem;
`;


export function InlineToolbar(props: InlineToolbarProps) {

  const { className } = props;

  return (
    <div className={cx('toolbar', rootStyle, className)}>
      <div className={rowStyle}>
        <PushButton className={buttonStyle} pushed={true}>
          <H2 className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={true}>
          <H3 className={iconStyle} />
        </PushButton>
        <PushButton className={cx(buttonStyle, edgeStyle)} pushed={true}>
          <ListOrdered className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={true}>
          <ListUnordered className={iconStyle} />
        </PushButton>
        <PushButton className={cx(buttonStyle, edgeStyle)} pushed={true}>
          <SingleQuote className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={true}>
          <DoubleQuote className={iconStyle} />
        </PushButton>
      </div>
      <div className={rowStyle}>
        <PushButton className={cx(buttonStyle, edgeStyle)} pushed={true}>
          <Bold className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={true}>
          <Italic className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={true}>
          <Underline className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={true}>
          <Strikethrough className={iconStyle} />
        </PushButton>
      </div>
    </div>
  );
}
