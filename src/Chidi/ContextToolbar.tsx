import { css, cx } from '@emotion/css';
import { Editor } from '@tiptap/react';

import { Button, PushButton } from '../Components/Button';
import {
  Bold, Italic, Underline, Strikethrough,
  H2, H3, CodeView, SingleQuote, DoubleQuote,
  ListOrdered, ListUnordered
 } from '../Icons';

export interface ContextToolbarProps {
  className?: string;
  editor: Editor;
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


export function ContextToolbar(props: ContextToolbarProps) {

  const { className, editor } = props;

  return (
    <div className={cx('toolbar', rootStyle, className)}>
    </div>
  );
}
