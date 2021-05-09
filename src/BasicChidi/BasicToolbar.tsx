import { css, cx } from '@emotion/css';
import { BubbleMenu, Editor } from '@tiptap/react';

import { Bold, Italic } from '../Icons';
import { tide } from '../theme';
import { ContextButton } from './ContextButton';


export interface BasicToolbarProps {
  className?: string;
  editor: Editor;
}

const rootStyle = css`
  display: flex;
`;


const buttonStyle = css`
  width: 2.25rem;
  height: 2.25rem;
`;


const iconStyle = css`
  width: 1rem;
  height: 1rem;

  transition: all 120ms ease-out;
  transform: scale3d(1, 1, 1);

  fill: ${tide};


  &.pushed {
    transform: scale3d(1.25, 1.25, 1);
    fill: #DBC0AF;
  }
`;


export function BasicToolbar(props: BasicToolbarProps) {

  const { className, editor } = props;

  const isBold = editor.isActive('bold');
  const isItalic = editor.isActive('italic');

  const onBold = () => editor.chain().focus().toggleBold().run();
  const onItalic = () => editor.chain().focus().toggleItalic().run();


  return (
    <div className={cx('basic-toolbar', rootStyle, className)}>
      <ContextButton className={cx(buttonStyle)}
        onClick={onBold}>
          <Bold className={cx(iconStyle, isBold && 'pushed')} />
      </ContextButton>
      <ContextButton className={buttonStyle}
        onClick={onItalic}>
          <Italic className={cx(iconStyle, isItalic && 'pushed')} />
      </ContextButton>
    </div>
  );
}


export function BasicContextMenu(props: BasicToolbarProps) {

  const { editor } = props;

  return editor && (
    <BubbleMenu editor={editor} tippyOptions={{ arrow: true, theme: 'copper' }}>
      <BasicToolbar editor={editor} />
    </BubbleMenu>
  );
}
