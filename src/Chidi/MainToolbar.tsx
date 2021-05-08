import { css, cx } from '@emotion/css';
import { Editor } from '@tiptap/react';

import { PushButton } from '../Components/Button';
import {
  Bold, Italic, Underline, Strikethrough,
  H2, H3, CodeView, Image, DoubleQuote,
  ListOrdered, ListUnordered, Attachment
 } from '../Icons';

export interface MainToolbarProps {
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


export function MainToolbar(props: MainToolbarProps) {

  const { className, editor } = props;

  const isBold = editor.isActive('bold');
  const isItalic = editor.isActive('italic');
  const isStrike = editor.isActive('strike');
  const isUnderline = editor.isActive('underline');
  const isH2 = editor.isActive('heading', { level: 2 });
  const isH3 = editor.isActive('heading', { level: 3 });
  const isQuote = editor.isActive('blockquote');
  const isListOrdered = editor.isActive('orderedList');
  const isListUnordered = editor.isActive('bulletList');
  const isCodeBlock = editor.isActive('codeBlock');

  const onBold = () => editor.chain().focus().toggleBold().run();
  const onItalic = () => editor.chain().focus().toggleItalic().run();
  const onStrike = () => editor.chain().focus().toggleStrike().run();
  const onUnderline = () => editor.chain().focus().toggleUnderline().run();
  const onH2 = () => editor.chain().focus().toggleHeading({ level: 2 }).run();
  const onH3 = () => editor.chain().focus().toggleHeading({ level: 3 }).run();
  const onQuote = () => editor.chain().focus().toggleBlockquote().run();
  const onListOrdered = () => editor.chain().focus().toggleOrderedList().run();
  const onListUnordered = () => editor.chain().focus().toggleBulletList().run();
  const onCodeBlock = () => editor.chain().focus().toggleCodeBlock().run();

  return (
    <div className={cx('toolbar', rootStyle, className)}>
      <div className={rowStyle}>
        <PushButton className={buttonStyle}
          pushed={isH2} onClick={onH2}>
            <H2 className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle}
          pushed={isH3} onClick={onH3}>
            <H3 className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle}
          pushed={isQuote} onClick={onQuote}>
            <DoubleQuote className={iconStyle} />
        </PushButton>
        <PushButton className={cx(buttonStyle, edgeStyle)}
          pushed={isListOrdered} onClick={onListOrdered}>
            <ListOrdered className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle}
          pushed={isListUnordered} onClick={onListUnordered}>
            <ListUnordered className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle}
          pushed={isCodeBlock} onClick={onCodeBlock}>
            <CodeView className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={false}>
          <Image className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle} pushed={false}>
          <Attachment className={iconStyle} />
        </PushButton>
      </div>

      <div className={rowStyle}>
        <PushButton className={cx(buttonStyle, edgeStyle)}
            pushed={isBold} onClick={onBold}>
              <Bold className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle}
          pushed={isItalic} onClick={onItalic}>
            <Italic className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle}
          pushed={isUnderline} onClick={onUnderline}>
            <Underline className={iconStyle} />
        </PushButton>
        <PushButton className={buttonStyle}
          pushed={isStrike} onClick={onStrike}>
            <Strikethrough className={iconStyle} />
        </PushButton>
      </div>
    </div>
  );
}
