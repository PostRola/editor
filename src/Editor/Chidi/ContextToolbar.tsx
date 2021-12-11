import { css, cx } from '@emotion/css';
import { Editor } from '@tiptap/react';


export interface ContextToolbarProps {
  className?: string;
  editor: Editor;
}

const rootStyle = css`
  display: flex;

  background-color: rgba(248, 248, 248, 0.95);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
`;


export function ContextToolbar(props: ContextToolbarProps) {

  const { className, editor } = props;

  return (
    <div className={cx('toolbar', rootStyle, className)}>
    </div>
  );
}
