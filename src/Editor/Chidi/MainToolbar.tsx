import { css, cx } from '@emotion/css';
import { Editor } from '@tiptap/react';

import {
  Bold, Italic, Underline, Strikethrough,
  H2, H3, CodeView, Image, DoubleQuote,
  ListOrdered, ListUnordered, Attachment,
  ArrowGoBack, ArrowGoForward
 } from '../../Icon';
import { EditorButton } from './EditorButton';

export interface MainToolbarProps {
  className?: string;
  editor: Editor;
}

const rootS = css`
  display: flex;
`;

const rowS = css`
  display: flex;
`;

const buttonStyle = css`
  width: 2.25rem;
  height: 2.25rem;
`;

const edgeStyle = css`
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
  const onUndo = () => editor.chain().focus().undo().run();
  const onRedo = () => editor.chain().focus().redo().run();

  const onImage = () => editor.chain().focus()
    .setImage({
      src: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: '',
      caption: '',
      size: 'fullwidth'
    })
    .run();

  return (
    <div className={cx('toolbar', rootS, className)}>
      <div className={rowS}>
        <EditorButton className={buttonStyle}
          pushed={isH2} onClick={onH2}>
            <H2 className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle}
          pushed={isH3} onClick={onH3}>
            <H3 className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle}
          pushed={isQuote} onClick={onQuote}>
            <DoubleQuote className={iconStyle} />
        </EditorButton>
        <EditorButton className={cx(buttonStyle, edgeStyle)}
          pushed={isListOrdered} onClick={onListOrdered}>
            <ListOrdered className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle}
          pushed={isListUnordered} onClick={onListUnordered}>
            <ListUnordered className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle}
          pushed={isCodeBlock} onClick={onCodeBlock}>
            <CodeView className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle} onClick={onImage}>
          <Image className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle} pushed={false}>
          <Attachment className={iconStyle} />
        </EditorButton>
      </div>

      <div className={rowS}>
        <EditorButton className={cx(buttonStyle, edgeStyle)}
            pushed={isBold} onClick={onBold}>
              <Bold className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle}
          pushed={isItalic} onClick={onItalic}>
            <Italic className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle}
          pushed={isUnderline} onClick={onUnderline}>
            <Underline className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle}
          pushed={isStrike} onClick={onStrike}>
            <Strikethrough className={iconStyle} />
        </EditorButton>
      </div>

      <div className={rowS}>
        <EditorButton className={buttonStyle} onClick={onUndo}>
          <ArrowGoBack className={iconStyle} />
        </EditorButton>
        <EditorButton className={buttonStyle} onClick={onRedo}>
          <ArrowGoForward className={iconStyle} />
        </EditorButton>
      </div>
    </div>
  );
}
